// const asyncLocalStorage = require('./als.service')
const chatService = require('../api/chat/chat.service')
const logger = require('./logger.service')
var gIo = null

function connectSockets(http, session) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*',
        },
    })

    gIo.on('connection', (socket) => {
        console.log('New socket', socket.id)

        socket.userId = socket.id

        socket.on('disconnect', (socket) => {
            console.log('Someone disconnected')
        })

        socket.on('chat topic', (topic) => {
            if (socket.myTopic === topic) return
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic
        })

        socket.on('chat newMsg', async (msg) => {
            console.log('Emitting Chat msg', msg)
            // emits to all sockets:
            // gIo.emit('chat addMsg', msg)

            // emits only to sockets in the same room
            gIo.to(socket.myTopic).emit('chat addMsg', msg)

            chatService.addMsg(msg.chatId, msg)//save history bonus
        })

        socket.on('user-typing', (user) => {
            console.log(`${user} is typing...`)
            //   gIo.to(socket.myTopic).emit('user-typing', user)
            // Send to all sockets BUT not the current socket
            //broadcast to all in the same room exepet curr socket
            broadcast({ type: 'user-typing', data: user, room: socket.myTopic, userId: socket.userId })
        })
        socket.on('created chat id', (chatId) => {
            console.log('chatId', chatId);
            //removed the room prop send to the sockets conected exept the curr 
            broadcast({ type: 'new-chat-create', data: chatId, userId: socket.userId })
        })

        socket.on('user-watch', (userId) => {
            socket.join('watching:' + userId)
        })

        socket.on('set-user-socket', (userId) => {
            logger.debug(`Setting (${socket.id}) socket.userId = ${userId}`)
            socket.userId = userId
        })

        //for fun delete toy in other browsers
        socket.on('deleteToy', (toyId) => {
            //   gIo.to(socket.myTopic).emit('user-typing', user)
            broadcast({ type: 'delete-toy', data: toyId, userId: socket.userId })
        })
        socket.on('unset-user-socket', () => {
            delete socket.userId
        })
    })
}

function emitTo({ type, data, label }) {
    if (label) gIo.to('watching:' + label).emit(type, data)
    else gIo.emit(type, data)
}

async function emitToUser({ type, data, userId }) {
    logger.debug('Emiting to user socket: ' + userId)
    const socket = await _getUserSocket(userId)
    if (socket) socket.emit(type, data)
    else {
        console.log('User socket not found')
        _printSockets()
    }
}

// Send to all sockets BUT not the current socket
async function broadcast({ type, data, room = null, userId }) {
    console.log('BROADCASTING', JSON.stringify(arguments))
    const excludedSocket = await _getUserSocket(userId)
    if (!excludedSocket) {
        logger.debug('Shouldnt happen, socket not found')
        _printSockets()
        return
    }
    logger.debug('broadcast to all but user: ', userId)
    if (room) {
        excludedSocket.broadcast.to(room).emit(type, data)
    } else {
        excludedSocket.broadcast.emit(type, data)
    }
}

async function _getUserSocket(userId) {
    const sockets = await _getAllSockets()
    const socket = sockets.find((s) => s.userId == userId)
    return socket
}
async function _getAllSockets() {
    // return all Socket instances
    const sockets = await gIo.fetchSockets()
    return sockets
}

async function _printSockets() {
    const sockets = await _getAllSockets()
    console.log(`Sockets: (count: ${sockets.length}):`)
    sockets.forEach(_printSocket)
}

function _printSocket(socket) {
    console.log(`Socket - socketId: ${socket.id} userId: ${socket.userId}`)
}

module.exports = {
    connectSockets,
    emitTo,
    emitToUser,
    broadcast,
}
