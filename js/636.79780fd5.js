"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[636],{8910:function(n,s,a){a.d(s,{Z:function(){return w}});var e=a(3396),i=a(7139),t=a(4870),c=a(678);const l=n=>((0,e.dD)("data-v-287bed41"),n=n(),(0,e.Cn)(),n),u={class:"navigation"},o=l((()=>(0,e._)("svg",{class:"icon","aria-hidden":"true"},[(0,e._)("use",{"xlink:href":"#icon-gengduo"})],-1))),r={class:"nav-content"},d=l((()=>(0,e._)("span",null,"电台",-1))),_=l((()=>(0,e._)("span",null,"视频",-1))),v=l((()=>(0,e._)("use",{"xlink:href":"#icon-sousuo"},null,-1))),p=[v];var h={setup(n){const s=(0,c.tv)(),a=s.currentRoute.value.path,l=()=>{s.push({path:"/"})},v=()=>{s.push({path:"/my"})};console.log();const h=()=>{s.push({path:"/search"})};return(n,s)=>((0,e.wg)(),(0,e.iD)("div",u,[o,(0,e._)("div",r,[(0,e._)("span",{onClick:v,class:(0,i.C_)({recommend:"/my"===(0,t.SU)(a)})},"我的",2),(0,e._)("span",{onClick:l,class:(0,i.C_)({recommend:"/home"===(0,t.SU)(a)})},"推荐",2),d,_]),(0,e._)("svg",{class:"icon","aria-hidden":"true",onClick:h},p)]))}},m=a(89);const g=(0,m.Z)(h,[["__scopeId","data-v-287bed41"]]);var w=g},2636:function(n,s,a){a.r(s),a.d(s,{default:function(){return A}});var e=a(3396),i=a(8910),t=a(4870),c=a(3766),l=a(5101),u=(0,c.Q_)("home",{state(){return{banner:[],recommend:[]}},actions:{async getHomeInitialize(){const n=await Promise.allSettled([(0,l.WC)(),(0,l.Cg)()]);this.banner=n[0]?.value?.banners||[],this.recommend=n[1]?.value?.result||[]}}});const o=["src"];var r={setup(n){const s=u();return(n,a)=>{const i=(0,e.up)("van-swipe-item"),c=(0,e.up)("van-swipe");return(0,e.wg)(),(0,e.j4)(c,{autoplay:1500,"lazy-render":""},{default:(0,e.w5)((()=>[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)((0,t.SU)(s).banner,((n,s)=>((0,e.wg)(),(0,e.j4)(i,{key:s},{default:(0,e.w5)((()=>[(0,e._)("img",{src:n.pic},null,8,o)])),_:2},1024)))),128))])),_:1})}}},d=a(89);const _=(0,d.Z)(r,[["__scopeId","data-v-0f311024"]]);var v=_,p=a(678);const h=n=>((0,e.dD)("data-v-9c377976"),n=n(),(0,e.Cn)(),n),m={class:"homeList"},g=h((()=>(0,e._)("li",null,[(0,e._)("svg",{class:"icon","aria-hidden":"true"},[(0,e._)("use",{"xlink:href":"#icon-jinrituijian"})]),(0,e._)("span",null,"今日推荐")],-1))),w=h((()=>(0,e._)("li",null,[(0,e._)("svg",{class:"icon","aria-hidden":"true"},[(0,e._)("use",{"xlink:href":"#icon-sirenFM"})]),(0,e._)("span",null,"私人FM")],-1))),f=h((()=>(0,e._)("svg",{class:"icon","aria-hidden":"true"},[(0,e._)("use",{"xlink:href":"#icon-geshou"})],-1))),k=h((()=>(0,e._)("span",null,"歌手",-1))),C=[f,k],b=h((()=>(0,e._)("li",null,[(0,e._)("svg",{class:"icon","aria-hidden":"true"},[(0,e._)("use",{"xlink:href":"#icon-paihangbang-"})]),(0,e._)("span",null,"排行榜")],-1)));var y={setup(n){const s=(0,p.tv)(),a=()=>{s.push({path:"/artist"})};return(n,s)=>((0,e.wg)(),(0,e.iD)("div",m,[(0,e._)("ul",null,[g,w,(0,e._)("li",{onClick:a},C),b])]))}};const D=(0,d.Z)(y,[["__scopeId","data-v-9c377976"]]);var I=D,x=a(7139),S=a(7130);const U=n=>((0,e.dD)("data-v-304f178a"),n=n(),(0,e.Cn)(),n),W={class:"SongList"},Z=U((()=>(0,e._)("div",{class:"title"},[(0,e._)("h1",null,"发现好歌单"),(0,e._)("div",{class:"more"},"查看更多")],-1))),j={class:"content"},z={class:"Img"},H=["src"],M={class:"quantity"},q=U((()=>(0,e._)("svg",{class:"icon","aria-hidden":"true"},[(0,e._)("use",{"xlink:href":"#icon-bofang2"})],-1))),F={class:"name"};var K={setup(n){const s=u();return(n,a)=>{const i=(0,e.up)("router-link"),c=(0,e.up)("van-swipe-item"),l=(0,e.up)("van-swipe");return(0,e.wg)(),(0,e.iD)("div",W,[Z,(0,e._)("div",j,[(0,e.Wm)(l,{loop:!1,width:120,"show-indicators":!1},{default:(0,e.w5)((()=>[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)((0,t.SU)(s).recommend,(n=>((0,e.wg)(),(0,e.j4)(c,{key:n.id},{default:(0,e.w5)((()=>[(0,e.Wm)(i,{to:{path:"/itemMusic",query:{id:n.id}}},{default:(0,e.w5)((()=>[(0,e._)("div",z,[(0,e._)("img",{src:n.picUrl,alt:""},null,8,H),(0,e._)("span",M,[q,(0,e.Uk)(" "+(0,x.zw)((0,t.SU)(S.p)(n.playCount)),1)])]),(0,e._)("div",F,(0,x.zw)(n.name),1)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])])}}};const L=(0,d.Z)(K,[["__scopeId","data-v-304f178a"]]);var Y=L;const P={class:"home"};var Q={setup(n){const s=u();return(0,e.bv)((()=>{s.getHomeInitialize()})),(n,s)=>((0,e.wg)(),(0,e.iD)("div",P,[(0,e.Wm)(i.Z),(0,e.Wm)(v),(0,e.Wm)(I),(0,e.Wm)(Y)]))}};const R=(0,d.Z)(Q,[["__scopeId","data-v-ccda548c"]]);var A=R}}]);
//# sourceMappingURL=636.79780fd5.js.map