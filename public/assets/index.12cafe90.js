var ee=Object.defineProperty;var J=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,j=(e,t)=>{for(var o in t||(t={}))te.call(t,o)&&H(e,o,t[o]);if(J)for(var o of J(t))se.call(t,o)&&H(e,o,t[o]);return e};import{_ as f,r as y,o as a,c as u,a as s,b as p,w as v,d as g,F as C,e as T,f as B,u as oe,t as h,n as ne,g as re,h as D,i as $,j as ae,k as x,v as S,l as le,C as ie,m as ce,D as ue,P as de,p as pe,q as he,s as me,x as ye,y as _e,z as fe,A as ge,B as ve,E as be}from"./vendor.9bca09ef.js";const we=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}};we();const $e={},Ce={class:"main-header flex items-center justify-between"},ke=s("div",{class:"logo"},[s("h2",{class:"uppercase"},[g("Toy"),s("span",{class:"clr-teal"},"App")])],-1),xe={class:"flex gap-2 fw-bold"},Te=g("Home"),Se=g("Chat"),Ie=g("Doc"),Be=g("Toy"),Ue=g("Dashboard"),Ee=g("About"),Re=g("Login"),De=g("User"),Ae=g("Reviews");function Pe(e,t){const o=y("router-link");return a(),u("header",Ce,[ke,s("nav",xe,[p(o,{class:"link",to:"/"},{default:v(()=>[Te]),_:1}),p(o,{class:"link",to:"/chat"},{default:v(()=>[Se]),_:1}),p(o,{class:"link",to:"/chat/doctor"},{default:v(()=>[Ie]),_:1}),p(o,{class:"link",to:"/toy"},{default:v(()=>[Be]),_:1}),p(o,{class:"link",to:"/dashboard"},{default:v(()=>[Ue]),_:1}),p(o,{class:"link",to:"/about"},{default:v(()=>[Ee]),_:1}),p(o,{class:"link",to:"/login"},{default:v(()=>[Re]),_:1}),p(o,{class:"link",to:"/user"},{default:v(()=>[De]),_:1}),p(o,{class:"link",to:"/review"},{default:v(()=>[Ae]),_:1})])])}var Oe=f($e,[["render",Pe]]);const Ne={},Ve={class:"main-footer text-center"},Me=s("p",null,"\xA9 Coffeerights 2022",-1),Fe=[Me];function Le(e,t){return a(),u("footer",Ve,Fe)}var Ge=f(Ne,[["render",Le]]);const ze={name:"app",created(){this.$store.dispatch({type:"loadToys"})},components:{appHeader:Oe,appFooter:Ge}},qe={class:"app-container container flex flex-col"};function Je(e,t,o,l,n,r){const i=y("app-header"),c=y("router-view"),d=y("app-footer");return a(),u("section",qe,[p(i),p(c),p(d)])}var He=f(ze,[["render",Je]]),je="/assets/toy.d3a330c4.svg";const We={},Ke={class:"home flex flex-col gap-2 items-center justify-center"},Ye=s("div",{class:"img"},[s("img",{src:je,alt:""})],-1),Qe={class:"info text-center flex flex-col gap-3 items-star"},Xe=s("div",null,[s("h1",null,"Welcome to my toy shop"),s("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit.")],-1);function Ze(e,t,o,l,n,r){return a(),u("section",Ke,[Ye,s("div",Qe,[Xe,s("button",{onClick:t[0]||(t[0]=i=>e.$router.push("/toy")),class:"btn btn-info"},"explore now")])])}var et=f(We,[["render",Ze]]);const tt={name:"about",data(){return{center:{lat:32.0853,lng:34.781769},markers:[{position:{lat:32.0853,lng:34.781769}},{position:{lat:31.768318,lng:35.213711}},{position:{lat:29.557669,lng:34.951923}}]}},methods:{panToBranch(e){this.center=e}}},st={class:"about flex flex-col gap-2 py-2"},ot=s("h1",{class:"clr-teal uppercase py-2"},"Our Branches",-1),nt={class:"btn-group"};function rt(e,t,o,l,n,r){const i=y("GMapMarker"),c=y("GMapCluster"),d=y("GMapMap");return a(),u("section",st,[ot,p(d,{center:n.center,zoom:8,"map-type-id":"terrain"},{default:v(()=>[p(c,null,{default:v(()=>[(a(!0),u(C,null,T(n.markers,(m,_)=>(a(),B(i,{key:_,position:m.position,clickable:!0,draggable:!0,onClick:N=>n.center=m.position},null,8,["position","onClick"]))),128))]),_:1})]),_:1},8,["center"]),s("div",nt,[s("button",{onClick:t[0]||(t[0]=m=>r.panToBranch({lat:32.0853,lng:34.781769})),class:"btn btn-info"}," Tel Aviv "),s("button",{onClick:t[1]||(t[1]=m=>r.panToBranch({lat:31.768318,lng:35.213711})),class:"btn btn-info"}," Jerusalem "),s("button",{onClick:t[2]||(t[2]=m=>r.panToBranch({lat:29.557669,lng:34.951923})),class:"btn btn-info"}," Eilat ")])])}var at=f(tt,[["render",rt]]);const w={makeId:lt,debounce:ut,getRandomInt:Q,getRandomColor:ct,getLoremIpsum:it,loadFromStorage:dt,saveToStorage:pt,loadFromSessionStorage:ht,saveToSessionStorage:mt};function lt(e=5){var t="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let l=0;l<e;l++)t+=o.charAt(Math.floor(Math.random()*o.length));return t}function Q(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function it(e=5){const t=["The sky","above","the port","was","the color of television","tuned","to","a dead channel",".","All","this happened","more or less",".","I","had","the story","bit by bit","from various people","and","as generally","happens","in such cases","each time","it","was","a different story",".","It","was","a pleasure","to","burn"];let o="";for(;e>0;)o+=t[Q(0,t.length-1)]+" ",e--;return o.trim()}function ct(){for(var e="#",t=0;t<6;t++)e+=Math.floor(Math.random()*10);return e}function ut(e,t=700){let o;return function(...n){const r=()=>{clearTimeout(o),e(...n)};clearTimeout(o),o=setTimeout(r,t)}}function dt(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null}function pt(e,t){localStorage[e]=JSON.stringify(t)}function ht(e){var t=sessionStorage.getItem(e);return t?JSON.parse(t):null}function mt(e,t){sessionStorage[e]=JSON.stringify(t)}const F={props:{label:String},data(){return{color:w.getRandomColor()}}},W=()=>{oe(e=>({b3c50e4c:e.color}))},K=F.setup;F.setup=K?(e,t)=>(W(),K(e,t)):W;const yt=F;function _t(e,t,o,l,n,r){return a(),u("div",{class:ne(["label px-2",o.label])},h(o.label),3)}var L=f(yt,[["render",_t]]);const ft={name:"toy-preview",props:{toy:Object},components:{customLabel:L}};function gt(e,t,o,l,n,r){return a(),u("section",null,[re(e.$slots,"default")])}var X=f(ft,[["render",gt]]);const vt={name:"toy-list",props:{toys:Array},components:{toyPreview:X,CustomLabel:L}},bt={class:"toy-list py-1 clean-list grid gap-2"},wt=["onClick"],$t={class:"flex items-center justify-between gap-2"},Ct={class:"uppercase"},kt={class:"clr-teal fw-bold"},xt={class:"labels flex flex-wrap items-center gap-1"};function Tt(e,t,o,l,n,r){const i=y("custom-label"),c=y("toy-preview");return a(),u(C,null,[s("button",{onClick:t[0]||(t[0]=d=>e.$router.push("/toy/edit")),class:"btn btn-secondary"},"add a new toy"),s("ul",bt,[(a(!0),u(C,null,T(o.toys,d=>(a(),B(c,{key:d._id,toy:d},{default:v(()=>[s("li",{onClick:m=>e.$router.push(`/toy/${d._id}`),class:"toy-preview p-2 flex flex-col gap-1"},[s("div",$t,[s("h3",Ct,h(d.name),1),s("p",kt,"$"+h(d.price),1)]),s("div",xt,[(a(!0),u(C,null,T(d.labels,m=>(a(),B(i,{key:m,label:m},null,8,["label"]))),128))])],8,wt)]),_:2},1032,["toy"]))),128))])],64)}var St=f(vt,[["render",Tt]]);const It={name:"toy-filter",data(){return{filterBy:{name:"",labels:[],inStock:"",sortBy:""},isOpen:!0,price:50}},created(){this.setFilter=w.debounce(this.setFilter,500)},computed:{labels(){return this.$store.getters.labels}},methods:{setFilter(){this.$emit("set-filter",j({},this.filterBy))}}},Bt={class:"toy-filter py-2"},Ut={class:"form-control"},Et=s("label",{for:"name",class:"form-label"},"Name",-1),Rt={class:"form-control flex flex-col"},Dt=s("label",{for:"stock",class:"form-label"},"In Stock",-1),At={class:"form-control flex flex-col"},Pt=s("label",{for:"labels",class:"form-label"},"By labels",-1),Ot={class:"form-control flex flex-col"},Nt=s("label",{for:"sort",class:"form-label"},"Sort by",-1);function Vt(e,t,o,l,n,r){const i=y("el-input"),c=y("el-option"),d=y("el-select");return a(),u("section",Bt,[s("button",{onClick:t[0]||(t[0]=m=>n.isOpen=!n.isOpen),class:"btn btn-info"},h(n.isOpen?"Close":"Open")+" options ",1),n.isOpen?(a(),u("form",{key:0,onSubmit:t[5]||(t[5]=D(()=>{},["prevent"])),class:"form items-center gap-1 py-1"},[s("div",Ut,[Et,p(i,{onInput:r.setFilter,modelValue:n.filterBy.name,"onUpdate:modelValue":t[1]||(t[1]=m=>n.filterBy.name=m),id:"name",class:"w-50",size:"large",placeholder:"Search by toy name..."},null,8,["onInput","modelValue"])]),s("div",Rt,[Dt,p(d,{onChange:r.setFilter,modelValue:n.filterBy.inStock,"onUpdate:modelValue":t[2]||(t[2]=m=>n.filterBy.inStock=m),id:"stock",size:"large"},{default:v(()=>[p(c,{label:"All",value:""}),p(c,{label:"In Stock",value:"true"}),p(c,{label:"Not in stock",value:"false"})]),_:1},8,["onChange","modelValue"])]),s("div",At,[Pt,p(d,{multiple:"",onChange:r.setFilter,modelValue:n.filterBy.labels,"onUpdate:modelValue":t[3]||(t[3]=m=>n.filterBy.labels=m),"collapse-tags":"","collapse-tags-tooltip":"",id:"labels",size:"large"},{default:v(()=>[(a(!0),u(C,null,T(r.labels,m=>(a(),B(c,{key:m,label:m,value:m},null,8,["label","value"]))),128))]),_:1},8,["onChange","modelValue"])]),s("div",Ot,[Nt,p(d,{onChange:r.setFilter,modelValue:n.filterBy.sortBy,"onUpdate:modelValue":t[4]||(t[4]=m=>n.filterBy.sortBy=m),id:"sort",size:"large"},{default:v(()=>[p(c,{label:"Time",value:"time"}),p(c,{label:"Name",value:"name"}),p(c,{label:"Price",value:"price"})]),_:1},8,["onChange","modelValue"])])],32)):$("",!0)])}var Mt=f(It,[["render",Vt]]);const Ft={name:"toy-app",created(){this.$store.dispatch({type:"loadToys"})},computed:{toys(){return this.$store.getters.toysToShow}},methods:{setFilter(e){const t=JSON.parse(JSON.stringify(e));this.$store.dispatch({type:"setFilter",filterBy:t})}},components:{toyList:St,toyFilter:Mt}},Lt={class:"toy-app"};function Gt(e,t,o,l,n,r){const i=y("toy-filter"),c=y("toy-list");return a(),u("section",Lt,[p(i,{onSetFilter:r.setFilter},null,8,["onSetFilter"]),p(c,{toys:r.toys},null,8,["toys"])])}var zt=f(Ft,[["render",Gt]]);const qt="/api/";var Jt=ae.create({withCredentials:!0});const b={get(e,t){return P(e,"GET",t)},post(e,t){return P(e,"POST",t)},put(e,t){return P(e,"PUT",t)},delete(e,t){return P(e,"DELETE",t)}};async function P(e,t="GET",o=null){try{return(await Jt({url:`${qt}${e}`,method:t,data:o,params:t==="GET"?o:null})).data}catch(l){throw console.log(`Had Issues ${t}ing to the backend, endpoint: ${e}, with data: ${o}`),console.dir(l),l.response&&l.response.status===401&&window.location.assign("/login"),l}}const Y="toys_db",Ht=["On wheels","Box game","Art","Baby","Doll","Puzzle","Outdoor"],A="toy",U={query:jt,getById:Wt,remove:Kt,save:Yt,getEmptyToy:Qt,getlabels:Xt};Zt();async function jt(e={}){return await b.get(A,e)}async function Wt(e){return await b.get(`${A}/${e}`)}async function Kt(e){return await b.delete(`${A}/${e}`)}async function Yt(e){return e._id?await b.put(`${A}/${e._id}`,e):await b.post(A,e)}function Qt(){return Promise.resolve({name:"",price:0,labels:[],createdAt:new Date,inStock:!0,reviews:[]})}function Xt(){return Ht}function Zt(){let e=w.loadFromStorage(Y);return(!e||!e.length)&&(e=[V("Doll",150,["On wheels","Doll"]),V("Truck",80,["Outdoor","Baby"]),V("Cards",150,["Puzzle","Art"])],w.saveToStorage(Y,e)),e}function V(e,t,o,l){return{_id:w.makeId(),name:e,price:t,labels:o,inStock:!0,createdAt:new Date,reviews:[{_id:w.makeId(),txt:w.getLoremIpsum(5),createdAt:new Date},{_id:w.makeId(),txt:w.getLoremIpsum(5),createdAt:new Date},{_id:w.makeId(),txt:w.getLoremIpsum(5),createdAt:new Date}]}}const G="review",O={query:es,addReview:ts,removeReview:ss,getEmptyReview:os};async function es(e){return await b.get(G,e)}async function ts(e){return await b.post(G,e)}async function ss(e){return await b.delete(`${G}/${e}`,e)}function os(){return Promise.resolve({userId:"",toyId:"",content:"",rate:0})}const ns={components:{toyPreview:X,CustomLabel:L},name:"toy-detail",data(){return{toy:null,reviewToAdd:null}},async created(){const{id:e}=this.$route.params;this.toy=await U.getById(e);const t=this.$store.getters.user;await this.$store.dispatch({type:"getReviews",filterBy:{toyId:this.toy._id}}),t&&(this.reviewToAdd=await O.getEmptyReview(),this.reviewToAdd.userId=t._id,this.reviewToAdd.toyId=this.toy._id)},computed:{user(){return this.$store.getters.user},reviews(){return this.$store.getters.reviews}},methods:{removeToy(){this.$store.dispatch({type:"removeToy",toyId:this.toy._id}).then(()=>{this.$router.push("/toy")})},async addReview(){!this.reviewToAdd.content||(await this.$store.dispatch({type:"addReview",review:this.reviewToAdd}),await this.$store.dispatch({type:"getReviews",filterBy:{toyId:this.toy._id}}))},async removeReview(e){await this.$store.dispatch({type:"removeReview",reviewId:e}),await this.$store.dispatch({type:"getReviews",filterBy:{toyId:this.toy._id}})}}},rs={key:0,class:"toy-detalis"},as={class:"py-3 flex flex-col gap-1"},ls={class:"flex flex-col gap-1"},is={class:"uppercase"},cs={class:"clr-teal fw-bold"},us=s("span",{class:"fw-bold"},"In Stock:",-1),ds=s("span",{class:"fw-bold"},"Created At:",-1),ps={class:"labels flex flex-wrap items-center gap-1"},hs=s("h2",{class:"clr-teal"},"Reviews",-1),ms={class:"form-control my-1"},ys=s("label",{for:"txt",class:"form-label fw-600"},"Your review",-1),_s={class:"form-control my-1"},fs=s("label",{for:"rate",class:"form-label"},"Rate",-1),gs=s("button",{class:"btn btn-info"},"Add Review",-1),vs={key:1,class:"my-1 flex flex-col gap-1"},bs={class:"fw-600"},ws=["onClick"],$s={key:2,class:"p-2 flex flex-col gap-1"},Cs=s("h4",null,"No reviews yet.",-1),ks=s("p",null,"Be the first...",-1),xs=[Cs,ks],Ts={key:3,class:"btn-group gap-1"};function Ss(e,t,o,l,n,r){var d,m;const i=y("custom-label"),c=y("toy-preview");return n.toy?(a(),u("section",rs,[p(c,{toy:n.toy},{default:v(()=>[s("section",as,[s("div",ls,[s("h3",is,h(n.toy.name),1),s("p",cs,"Price: $"+h(n.toy.price),1),s("p",null,[us,g(" "+h(n.toy.inStock),1)]),s("p",null,[ds,g(" "+h(e.$filters.formatTime(n.toy.createdAt)),1)])]),s("div",ps,[(a(!0),u(C,null,T(n.toy.labels,_=>(a(),B(i,{key:_,label:_},null,8,["label"]))),128))])])]),_:1},8,["toy"]),hs,n.reviewToAdd&&r.user?(a(),u("form",{key:0,onSubmit:t[2]||(t[2]=D((..._)=>r.addReview&&r.addReview(..._),["prevent"])),class:"form"},[s("div",ms,[ys,x(s("textarea",{name:"txt",id:"txt",rows:"3",class:"form-input","onUpdate:modelValue":t[0]||(t[0]=_=>n.reviewToAdd.content=_),required:""},null,512),[[S,n.reviewToAdd.content]]),s("div",_s,[fs,x(s("input",{id:"rate",type:"number",class:"form-input",min:"0",max:"5","onUpdate:modelValue":t[1]||(t[1]=_=>n.reviewToAdd.rate=_)},null,512),[[S,n.reviewToAdd.rate,void 0,{number:!0}]])])]),gs],32)):$("",!0),(d=r.reviews)!=null&&d.length?(a(),u("div",vs,[(a(!0),u(C,null,T(r.reviews,_=>{var N,q;return a(),u("article",{class:"review flex flex-col gap-1 items-start p-3",key:_._id},[s("p",bs,h(_.content),1),s("p",null,"Rate: "+h(_.rate)+"\u2B50",1),s("p",null,"By: "+h((N=_.user)==null?void 0:N.username),1),(q=r.user)!=null&&q.isAdmin?(a(),u("button",{key:0,class:"btn btn-danger",onClick:wn=>r.removeReview(_._id)}," Delete review ",8,ws)):$("",!0)])}),128))])):(a(),u("div",$s,xs)),(m=r.user)!=null&&m.isAdmin?(a(),u("div",Ts,[s("button",{onClick:t[3]||(t[3]=_=>e.$router.push(`/toy/edit/${n.toy._id}`)),class:"btn btn-primary"}," edit toy "),s("button",{onClick:t[4]||(t[4]=(..._)=>r.removeToy&&r.removeToy(..._)),class:"btn btn-danger"},"delete toy"),s("button",{onClick:t[5]||(t[5]=_=>e.$router.push("/toy")),class:"btn btn-secondary"},"go back")])):$("",!0)])):$("",!0)}var Is=f(ns,[["render",Ss]]);const Bs={name:"toy-edit",data(){return{toyToEdit:null,pageTitle:"Add Toy"}},created(){const{id:e}=this.$route.params;e?(U.getById(e).then(t=>this.toyToEdit=t),this.pageTitle="Edit Toy"):(U.getEmptyToy().then(t=>this.toyToEdit=t),this.pageTitle="Add Toy")},computed:{labels(){return this.$store.getters.labels}},methods:{saveToy(){this.$store.dispatch({type:"saveToy",toy:this.toyToEdit}).then(()=>{this.$router.push("/toy")})}}},Us={key:0,class:"toy-edit py-2"},Es={class:"py-2"},Rs={class:"form-control"},Ds=s("label",{for:"name",class:"form-label"},"Name",-1),As={class:"form-control"},Ps=s("label",{for:"price",class:"form-label"},"Price",-1),Os={class:"form-control flex flex-col"},Ns=s("label",{for:"labels",class:"form-label"},"Labels",-1),Vs={class:"form-control flex flex-col"},Ms=s("label",{for:"stock",class:"form-label"},"In Stock",-1),Fs={class:"btn-group"},Ls=s("button",{type:"submit",class:"btn btn-success"},"save",-1);function Gs(e,t,o,l,n,r){const i=y("el-option"),c=y("el-select");return n.toyToEdit?(a(),u("section",Us,[s("h1",Es,h(n.pageTitle),1),s("form",{onSubmit:t[5]||(t[5]=D((...d)=>r.saveToy&&r.saveToy(...d),["prevent"])),class:"form"},[s("div",Rs,[Ds,x(s("input",{id:"name",type:"text",class:"form-input","onUpdate:modelValue":t[0]||(t[0]=d=>n.toyToEdit.name=d)},null,512),[[S,n.toyToEdit.name]])]),s("div",As,[Ps,x(s("input",{id:"price",type:"text",class:"form-input","onUpdate:modelValue":t[1]||(t[1]=d=>n.toyToEdit.price=d)},null,512),[[S,n.toyToEdit.price,void 0,{number:!0}]])]),s("div",Os,[Ns,p(c,{multiple:"",modelValue:n.toyToEdit.labels,"onUpdate:modelValue":t[2]||(t[2]=d=>n.toyToEdit.labels=d),"collapse-tags-tooltip":"",id:"labels",size:"large"},{default:v(()=>[(a(!0),u(C,null,T(r.labels,d=>(a(),B(i,{key:d,value:d,label:d},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),s("div",Vs,[Ms,x(s("input",{id:"stock",type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=d=>n.toyToEdit.inStock=d)},null,512),[[le,n.toyToEdit.inStock]])]),s("div",Fs,[Ls,s("button",{onClick:t[4]||(t[4]=d=>e.$router.push("/toy")),class:"btn btn-danger-text"},"go back")])],32)])):$("",!0)}var zs=f(Bs,[["render",Gs]]);ie.register(...ce);const qs={name:"dashboard",data(){return{dataDoughnut:[],dataPie:[],labelsPie:[]}},created(){this.getPrices(),this.getPrecentage()},computed:{testDataDoughnut(){return{labels:this.$store.getters.labels,datasets:[{data:[...this.dataDoughnut],backgroundColor:["#f87171","#fbbf24","#34d399","#2dd4bf","#60a5fa","#818cf8","#f472b6"]}]}},testDataPie(){return{labels:[...this.labelsPie],datasets:[{data:[...this.dataPie],backgroundColor:["#f87171","#fbbf24","#34d399","#2dd4bf","#60a5fa","#818cf8","#f472b6"]}]}},options(){return{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Prices by labels"}}}}},methods:{getPrices(){const e=this.$store.getters.labels,t=this.$store.getters.toys;e.forEach(o=>{let l=t.reduce((n,r)=>(r.labels.includes(o)&&(n+=r.price),n),0);this.dataDoughnut.push(l)})},getPrecentage(){const e=this.$store.getters.toys,t={};e.forEach(o=>{o.labels.forEach(l=>{t[l]=t[l]?t[l]+1:1})});for(const o in t)this.labelsPie.push(o),this.dataPie.push(t[o]/e.length*100)}},components:{DoughnutChart:ue,PieChart:de}},Js={class:"dashboard py-2"};function Hs(e,t,o,l,n,r){const i=y("DoughnutChart"),c=y("PieChart");return a(),u("section",Js,[s("div",null,[p(i,{chartData:r.testDataDoughnut,options:r.options},null,8,["chartData","options"])]),s("div",null,[p(c,{chartData:r.testDataPie,options:r.options},null,8,["chartData","options"])])])}var js=f(qs,[["render",Hs]]);const Ws={name:"login",data(){return{isSignup:!1,newUser:{fullname:"",username:"",password:""}}},computed:{user(){return this.$store.getters.user}},methods:{async login(){await this.$store.dispatch({type:"login",cred:this.newUser}),this.$router.push("/")},async signup(){await this.$store.dispatch({type:"signup",cred:this.newUser}),this.$router.push("/")},async logout(){await this.$store.dispatch({type:"logout"})}}},Ks={key:0,class:"login-page flex items-center justify-center"},Ys=s("div",{class:"text-center my-2"},[s("h2",{class:"clr-teal"},"Hello Again!"),s("p",null,"Lorem ipsum dolor sit amet consectetur.")],-1),Qs={class:"form-control"},Xs=s("label",{for:"username",class:"form-label fw-600"},"Username",-1),Zs={class:"form-control"},eo=s("label",{for:"password",class:"form-label fw-600"},"Password",-1),to=s("div",{class:"btn-group"},[s("button",{type:"submit",class:"btn btn-primary"},"Login")],-1),so=s("div",{class:"text-center my-2"},[s("h2",{class:"clr-teal"},"We happy to see you here!"),s("p",null,"Lorem ipsum dolor sit amet consectetur.")],-1),oo={class:"form-control"},no=s("label",{for:"fullname",class:"form-label fw-600"},"Fullname",-1),ro={class:"form-control"},ao=s("label",{for:"username",class:"form-label fw-600"},"Username",-1),lo={class:"form-control"},io=s("label",{for:"password",class:"form-label fw-600"},"Password",-1),co=s("div",{class:"btn-group"},[s("button",{type:"submit",class:"btn btn-primary"},"Sign In")],-1),uo={key:1,class:"flex flex-col gap-1 items-center justify-center"},po=g(" Hello "),ho={class:"fw-600 clr-teal captilize"};function mo(e,t,o,l,n,r){const i=pe("focus");return r.user?(a(),u("section",uo,[s("h2",null,[po,s("span",ho,h(r.user.fullname),1)]),s("button",{onClick:t[9]||(t[9]=(...c)=>r.logout&&r.logout(...c)),class:"btn btn-danger"},"logout")])):(a(),u("section",Ks,[n.isSignup?$("",!0):(a(),u("form",{key:0,onSubmit:t[3]||(t[3]=D((...c)=>r.login&&r.login(...c),["prevent"])),class:"login form px-3 py-2"},[Ys,s("div",Qs,[Xs,x(s("input",{id:"username",type:"text",class:"form-input",placeholder:"Enter you username","onUpdate:modelValue":t[0]||(t[0]=c=>n.newUser.username=c),autocomplete:"off"},null,512),[[S,n.newUser.username]])]),s("div",Zs,[eo,x(s("input",{id:"password",type:"password",class:"form-input","onUpdate:modelValue":t[1]||(t[1]=c=>n.newUser.password=c),placeholder:"Enter your password"},null,512),[[S,n.newUser.password]])]),to,s("button",{onClick:t[2]||(t[2]=c=>n.isSignup=!n.isSignup),class:"my-1 btn btn-info-text"}," Don't have an account? Sign up now! ")],32)),n.isSignup?(a(),u("form",{key:1,onSubmit:t[8]||(t[8]=D((...c)=>r.signup&&r.signup(...c),["prevent"])),class:"signup form px-3 py-2"},[so,s("div",oo,[no,x(s("input",{id:"fullname",type:"text",class:"form-input",placeholder:"Enter your fullname","onUpdate:modelValue":t[4]||(t[4]=c=>n.newUser.fullname=c),autocomplete:"off"},null,512),[[S,n.newUser.fullname],[i]])]),s("div",ro,[ao,x(s("input",{id:"username",type:"text",class:"form-input",placeholder:"Enter you username","onUpdate:modelValue":t[5]||(t[5]=c=>n.newUser.username=c),autocomplete:"off"},null,512),[[S,n.newUser.username]])]),s("div",lo,[io,x(s("input",{id:"password",type:"password",class:"form-input","onUpdate:modelValue":t[6]||(t[6]=c=>n.newUser.password=c),placeholder:"Enter your password"},null,512),[[S,n.newUser.password]])]),co,s("button",{onClick:t[7]||(t[7]=c=>n.isSignup=!n.isSignup),class:"my-1 btn btn-info-text"}," Already have an account? Login now! ")],32)):$("",!0)]))}var yo=f(Ws,[["render",mo]]);const _o={name:"user-details",data(){return{userReviews:null}},async created(){var t;const e=(t=this.$store.getters.user)==null?void 0:t._id;e&&(this.userReviews=await this.$store.dispatch({type:"getReviews",filterBy:{userId:e}}))},computed:{user(){return this.$store.getters.user}}},fo={key:0,class:"flex flex-col gap-1 my-2"},go=g(" Reviews by "),vo={class:"clr-teal"},bo=g(" by "),wo={class:"clr-teal"},$o=g(" about "),Co={class:"clr-teal"},ko={key:1,class:"text-center my-5 flex flex-col gap-2"},xo=s("h2",null,"Login first to see your reviews",-1);function To(e,t,o,l,n,r){return r.user&&n.userReviews?(a(),u("section",fo,[s("h2",null,[go,s("span",vo,h(r.user.fullname),1)]),(a(!0),u(C,null,T(n.userReviews,i=>(a(),u("article",{class:"review p-2",key:i._id},[s("h1",null,[bo,s("span",wo,h(i.user.username),1),$o,s("span",Co,h(i.toy.name),1)]),s("p",null,h(i.content),1),s("p",null,h(i.rate)+"\u2B50",1)]))),128))])):(a(),u("section",ko,[xo,s("button",{onClick:t[0]||(t[0]=i=>e.$router.push("/login")),class:"btn btn-primary-text"}," go to login page ")]))}var So=f(_o,[["render",To]]);const Io={name:"reviews-explore",data(){return{reviews:null}},async created(){this.reviews=await this.$store.dispatch({type:"getReviews"})}},Bo={key:0,class:"flex flex-col gap-1 my-2"},Uo=s("h2",null,"All Reviews",-1),Eo=g(" by "),Ro={class:"clr-teal"},Do=g(" about "),Ao={class:"clr-teal"};function Po(e,t,o,l,n,r){return n.reviews?(a(),u("section",Bo,[Uo,(a(!0),u(C,null,T(n.reviews,i=>(a(),u("article",{class:"review p-2",key:i._id},[s("h1",null,[Eo,s("span",Ro,h(i.user.username),1),Do,s("span",Ao,h(i.toy.name),1)]),s("p",null,h(i.content),1),s("p",null,h(i.rate)+"\u2B50",1)]))),128))])):$("",!0)}var Oo=f(Io,[["render",Po]]);const R="chat",I={query:No,getById:Vo,remove:Fo,save:Lo,getEmptyChat:Go,getByUserId:Mo};async function No(e={}){return await b.get(R,e)}async function Vo(e){return await b.get(`${R}/${e}`)}async function Mo(e){return await b.get(`${R}/${e}/user`)}async function Fo(e){return await b.delete(`${R}/${e}`)}async function Lo(e){return e._id?await b.put(`${R}/${e._id}`,e):await b.post(R,e)}function Go(){return Promise.resolve({name:"",msgs:[],createdAt:Date.now(),userId:""})}const zo="",k=qo();window.socketService=k;k.setup();function qo(){var e=null;const t={setup(){e=he(zo)},on(o,l){e||t.setup(),e.on(o,l)},off(o,l){e||t.setup(),l?e.off(o,l):e.removeAllListeners(o)},emit(o,l){e==null||e.emit(o,l)},terminate(){e=null}};return t}const Jo={name:"chat",props:{userId:String,savedChat:Object},data(){return{msg:"",msgs:[],msgHistory:[],typingUser:null}},async created(){console.log("created"),console.log("this.userId",this.userId),this.userChat=await I.getByUserId(this.userId),this.msgHistory=this.userChat.msgs||this.savedChat.msgs,console.log("this.userChat",this.userChat),k.emit("chat topic",this.userChat._id),this.userId!=="doctor"&&k.emit("created chat id",this.userChat._id),k.on("chat addMsg",this.addMsg),k.on("user-typing",e=>{this.typingUser=e}),this.bounce=w.debounce(this.clearTyping)},computed:{user(){return this.$store.getters.getUser}},methods:{addMsg(e){this.msgs.push(e)},sendMsg(){var t;const e={txt:this.msg,username:((t=this.user)==null?void 0:t.username)||"Guest",createdAt:Date.now(),chatId:this.userChat._id};k.emit("chat newMsg",e),this.msg=""},typing(){this.setTyping(),this.bounce()},setTyping(){var e;k.emit("user-typing",((e=this.user)==null?void 0:e.username)||"Guest")},clearTyping(){k.emit("user-typing",null)}},unmounted(){k.off("chat addMsg",this.addMsg),k.off("user-typing")}},Ho={class:"chat-room-container"},jo=s("h2",null,"Chat",-1),Wo={key:0},Ko={key:1,class:"chat-list"},Yo={class:"send-box flex"};function Qo(e,t,o,l,n,r){return a(),u("div",Ho,[jo,s("div",{onClick:t[0]||(t[0]=i=>e.$emit("close")),class:"close-btn"},"X"),n.typingUser?(a(),u("h3",Wo,h(n.typingUser)+" is typing...",1)):$("",!0),n.msgHistory?(a(),u("div",Ko,[(a(!0),u(C,null,T([...n.msgHistory,...n.msgs],(i,c)=>(a(),u("p",{key:c,class:"chat-msg"},h(i.username)+": "+h(i.txt),1))),128))])):$("",!0),s("div",Yo,[x(s("input",{class:"",type:"text","onUpdate:modelValue":t[1]||(t[1]=i=>n.msg=i),onInput:t[2]||(t[2]=(...i)=>r.typing&&r.typing(...i)),placeholder:"Write your message"},null,544),[[S,n.msg]]),s("button",{onClick:t[3]||(t[3]=(...i)=>r.sendMsg&&r.sendMsg(...i)),class:"btn"},"Send")])])}var Z=f(Jo,[["render",Qo]]);const Xo={name:"ChatRoom",components:{chat:Z},data(){return{isChat:!1,userId:"",chatToEdit:null,savedChat:null}},async created(){var t;this.userId=(t=this.$route.params)==null?void 0:t.userId;const e=await I.getByUserId(this.userId);console.log("userChat",e),e?this.chatToEdit=e:(this.chatToEdit=await I.getEmptyChat(),this.chatToEdit.userId=this.userId)},methods:{toggleChat(){this.isChat=!this.isChat},async addChat(){var e;console.log("createChat"),(e=this.chatToEdit)!=null&&e._id?this.savedChat=this.chatToEdit:(this.savedChat=await I.save(this.chatToEdit),console.log("save a new chat")),console.log("savedChat",this.savedChat)}},computed:{},unmounted(){}},Zo=s("div",null,[s("h1",null,"Chat Room")],-1);function en(e,t,o,l,n,r){const i=y("chat");return a(),u(C,null,[Zo,n.isChat&&n.savedChat?(a(),B(i,{key:0,onClose:r.toggleChat,savedChat:n.savedChat,userId:n.userId},null,8,["onClose","savedChat","userId"])):(a(),u("img",{key:1,onClick:t[0]||(t[0]=c=>{r.toggleChat(),r.addChat()}),class:"chat-icon",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxJOgpS0rGQ1jVDxik31OfgfHsX15C_sivQ&usqp=CAU",alt:"chat icon"}))],64)}var tn=f(Xo,[["render",en]]);const sn={name:"ChatRoom",components:{chat:Z},data(){return{isChat:!1,isNewChat:!1,userId:"",openChat:null,chats:null}},async created(){this.chats=await this.$store.dispatch({type:"loadChats"}),console.log("this.chats",this.chats),k.on("new-chat-create",this.createChatRoom)},methods:{toggleChat(){this.isChat=!this.isChat},async createChatRoom(e){this.openChat=await I.getById(e),this.userId=this.openChat.userId,this.isNewChat=!0,console.log("this.openChat",this.openChat)},async openUserChat(e){this.userId=e,this.openChat=await I.getByUserId(e),this.toggleChat()},formatDate(e){return(new Date(e)+"").slice(0,25)}},computed:{},unmounted(){}},on=s("div",null,[s("h1",null,"Doctor Chat Room")],-1),nn={class:"chat-container"},rn=["onClick"],an={key:0};function ln(e,t,o,l,n,r){const i=y("chat");return a(),u(C,null,[on,s("div",nn,[n.chats?(a(!0),u(C,{key:0},T(n.chats,c=>(a(),u("div",{class:"chat",onClick:d=>r.openUserChat(c.userId),key:c._id},[s("h1",null,h(r.formatDate(c.createdAt)),1),s("h1",null,h(c.userId),1)],8,rn))),128)):$("",!0)]),n.isNewChat?(a(),u("div",an,[s("h1",{onClick:t[0]||(t[0]=(...c)=>r.toggleChat&&r.toggleChat(...c))},"new chat")])):$("",!0),n.isChat?(a(),B(i,{key:1,onClose:r.toggleChat,savedChat:n.openChat,userId:n.userId},null,8,["onClose","savedChat","userId"])):$("",!0)],64)}var cn=f(sn,[["render",ln]]);const un=me({history:ye(),linkActiveClass:"active",routes:[{path:"/",name:"home",component:et},{path:"/toy",name:"toy",component:zt},{path:"/toy/:id",name:"toy-details",component:Is},{path:"/toy/edit/:id?",name:"toy-edit",component:zs},{path:"/dashboard",name:"dashboard",component:js},{path:"/about",name:"about",component:at},{path:"/chat/:userId?/:chatId?",name:"chat",component:tn},{path:"/chat/doctor/:userId?/:chatId?",name:"doc Chat",component:cn},{path:"/login",name:"login",component:yo},{path:"/user",name:"user",component:So},{path:"/review",name:"review",component:Oo}]});var dn={state:{toys:[],filterBy:{name:"",inStock:"",labels:[],sortBy:""},labels:U.getlabels()},getters:{toys({toys:e}){return e},toysToShow({toys:e,filterBy:t}){return JSON.parse(JSON.stringify(e))},labels({labels:e}){return e}},mutations:{setToys(e,{toys:t}){e.toys=t},saveToy(e,{toy:t}){const o=e.toys.findIndex(l=>l._id===t._id);o!==-1?e.toys.splice(o,1,t):e.toys.push(t)},removeToy(e,{toyId:t}){const o=e.toys.findIndex(l=>l._id===t);e.toys.splice(o,1)},setFilter(e,{filterBy:t}){e.filterBy=t},setSort(e,{sortBy:t}){e.sortBy=t}},actions:{loadToys({commit:e,state:t}){U.query(t.filterBy).then(o=>{e({type:"setToys",toys:o})})},saveToy({commit:e},{toy:t}){U.save(t).then(o=>{e({type:"saveToy",toy:o})})},removeToy({commit:e},{toyId:t}){U.remove(t).then(()=>{e({type:"removeToy",toyId:t})})},setFilter({dispatch:e,commit:t},{filterBy:o}){t({type:"setFilter",filterBy:o}),e({type:"loadToys"})}}};const z="auth",M={login:pn,signup:hn,logout:mn,getGuestUser:yn};async function pn(e){return await b.post(z+"/login",e)}async function hn(e){return await b.post(z+"/signup",e)}async function mn(){return await b.post(z+"/logout")}function yn(){return{fullname:"Guest User",username:"guest",password:"guest",isAdmin:!0}}var _n={state:{loggedinUser:w.loadFromSessionStorage("user")||null},getters:{user(e){return e.loggedinUser}},mutations:{setUser(e,{user:t}){e.loggedinUser=t}},actions:{async login({commit:e},{cred:t}){try{const o=await M.login(t);e({type:"setUser",user:o}),w.saveToSessionStorage("user",o)}catch(o){console.log(o)}},async signup({commit:e},{cred:t}){try{const o=await M.signup(t);e({type:"setUser",user:o}),w.saveToSessionStorage("user",o)}catch(o){console.log(o)}},async logout({commit:e}){try{await M.logout(),e({type:"setUser",user:null}),sessionStorage.removeItem("user")}catch(t){console.log(t)}}}},fn={state:{chats:[],filterBy:null},getters:{chats({chats:e}){return e},chatsToShow({chats:e,filterBy:t}){return JSON.parse(JSON.stringify(e))}},mutations:{setChats(e,{chats:t}){e.chats=t},saveChat(e,{chat:t}){const o=e.chats.findIndex(l=>l._id===t._id);o!==-1?e.chats.splice(o,1,t):e.chats.push(t)},removeChat(e,{chatId:t}){const o=e.chats.findIndex(l=>l._id===t);e.chats.splice(o,1)},setFilter(e,{filterBy:t}){e.filterBy=t},setSort(e,{sortBy:t}){e.sortBy=t}},actions:{async loadChats({commit:e,state:t}){try{const o=await I.query(t.filterBy);return e({type:"setChats",chats:o}),o}catch(o){console.log(o)}},async saveChat({commit:e},{chat:t}){try{const o=await I.save(t);e({type:"saveChat",chat:o})}catch(o){console.log(o)}},async removeChat({commit:e},{chatId:t}){try{await I.remove(t),e({type:"removeChat",chatId:t})}catch(o){console.log(o)}},setFilter({dispatch:e,commit:t},{filterBy:o}){t({type:"setFilter",filterBy:o}),e({type:"loadChats"})}}},gn={state:{reviews:null},getters:{reviews(e){return e.reviews}},mutations:{setReviews(e,{reviews:t}){e.reviews=t},addReview(e,{review:t}){e.reviews.push(t)},removeReview(e,{reviewId:t}){const o=e.reviews.findIndex(l=>l._id===t);e.reviews.splice(o,1)}},actions:{async getReviews({commit:e},{filterBy:t}){try{const o=await O.query(t);return e({type:"setReviews",reviews:o}),o}catch(o){console.log("err :>> ",o)}},async addReview({commit:e},{review:t}){try{const o=await O.addReview(t);e({type:"addReview",review:o})}catch(o){console.log("err :>> ",o)}},async removeReview({commit:e},{reviewId:t}){try{await O.removeReview(t),e({type:"removeReview",reviewId:t})}catch(o){console.log("err :>> ",o)}}}};const vn=_e({strict:!0,state:{},getters:{},mutations:{},actions:{},modules:{toyStore:dn,userStore:_n,reviewStore:gn,chatStore:fn}}),bn={mounted(e){e.focus()}};const E=fe(He);E.config.globalProperties.$filters={formatTime(e){return ge(new Date(e),new Date)}};E.directive("focus",bn);E.use(ve,{load:{key:"AIzaSyCCw7udchhbe1ycD5KUE-vB3DUbOi1gnoY"}});E.use(be);E.use(un);E.use(vn);E.mount("#app");