(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,n){e.exports=n(215)},215:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(44),o=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s,u=n(13),i=n(32),l=n(21),p=n(9),f=n(47),d=n(48),m=n(52),h=n(49),b=n(53),v=n(36),j=n.n(v),E=n(35),O=n.n(E),w=j.a.Header,g=j.a.Content,_=j.a.Footer,x=function(e){function t(){return Object(f.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:O.a.centerAlign},r.a.createElement(j.a,null,r.a.createElement(w,{className:O.a.header},"STAR WARS"),r.a.createElement(g,{className:O.a.content},"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u0439"),r.a.createElement(_,{className:O.a.footer},"\u0410\u043d\u0434\u0440\u0435\u0439 \u0420\u043e\u043c\u0430\u043d\u043e\u0432 \xa92019")))}}]),t}(r.a.Component),A=function(){return r.a.createElement(p.a,{exact:!0,path:"/",component:x})},T=(n(185),n(114)),k=n(70);!function(e){e.FETCH_DATA="@@persons/FETCH_DATA",e.GET_ALL="@@persons/GET_ALL"}(s||(s={}));var y=function(e){return Object(k.action)(s.GET_ALL,e)},C=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={persons:[]},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.data;e&&0!==e.length||this.props.fetchRequest()}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.loading,a=t.map(function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("p",null,e.name),r.a.createElement("br",null),r.a.createElement("p",null,e.mass),r.a.createElement("br",null))});return r.a.createElement("div",null,n&&r.a.createElement(T.a,{size:"large"}),!n&&a)}}]),t}(r.a.Component),L={fetchRequest:function(){return Object(k.action)(s.FETCH_DATA)}},D=Object(l.c)(function(e){var t=e.persons;return{loading:t.loading,data:t.data,errors:t.errors}},L)(C),M=function(){return r.a.createElement(p.a,{exact:!0,path:"/persons",component:D})},F=function(){return r.a.createElement(p.a,{path:"/"},r.a.createElement(A,null),r.a.createElement(M,null))},H=function(e){var t=e.store,n=e.history;return r.a.createElement(l.a,{store:t},r.a.createElement(i.a,{history:n},r.a.createElement(F,null)))},R=n(7),G=n.n(R),N=n(11),P=n(71),S={data:[],loading:!1,errors:void 0},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.FETCH_DATA:return Object(P.a)({},e,{loading:!0});case s.GET_ALL:return Object(P.a)({},e,{loading:!1,data:t.payload});default:return e}},q=n(14),B=n(112),J=n(113),K=n.n(J);function z(){return I.apply(this,arguments)}function I(){return(I=Object(B.a)(G.a.mark(function e(){var t;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.a.get("https://swapi.co/api/people/");case 3:return t=e.sent,e.next=6,t.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}var U=G.a.mark($),X=G.a.mark(Q),Z=G.a.mark(V);function $(){var e;return G.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(q.b)(z);case 3:return e=t.sent,t.next=6,Object(q.d)(y(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}},U,null,[[0,8]])}function Q(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.e)(s.FETCH_DATA,$);case 2:case"end":return e.stop()}},X)}function V(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([Object(q.c)(Q)]);case 2:case"end":return e.stop()}},Z)}var Y=V,ee=G.a.mark(te);function te(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([Object(q.c)(Y)]);case 2:case"end":return e.stop()}},ee)}var ne=n(103),ae=n(115),re=Object(u.a)(),ce=function(e,t){var n=Object(ae.a)(),a=Object(N.e)(function(e){return Object(N.c)({persons:W,router:Object(i.b)(e)})}(e),t,Object(N.a)(Object(ne.a)(e),n));return n.run(te),a}(re,window.initialReduxState);o.a.render(r.a.createElement(H,{store:ce,history:re}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,n){e.exports={header:"MainPage_header__2KZXj","center-align":"MainPage_center-align__1ffDU",content:"MainPage_content__3_KOA",footer:"MainPage_footer__1MrMw"}}},[[117,1,2]]]);
//# sourceMappingURL=main.7f00fed8.chunk.js.map