(this.webpackJsonpHRLog=this.webpackJsonpHRLog||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),i=n.n(c),l=n(2),o=n(1),u=n(4),s=n(8),m=n.n(s),f=n(11),g=function(){return"../image/test.png"},d=Object(u.b)({name:"gif",initialState:{url:"",loading:!1,error:!1},reducers:{fetchStart:function(e){return Object.assign({},e,{url:"",loading:!0})},fetchSucceed:function(e,t){return Object.assign({},e,{url:t.payload,loading:!1})},fetchFaild:function(e,t){return console.error(t.payload),Object.assign({},e,{loading:!1,error:!0})},clear:function(){return{url:"",loading:!1,error:!1}}}}),p=d.reducer,b=d.actions.clear;var E=Object(o.c)({gif:p}),h=Object(u.a)({reducer:E});n(24);function v(e){var t=e.imageUrl,n=e.loading;return e.error?a.a.createElement("p",{className:"notification is-danger"},"Error!!"):n?a.a.createElement("p",{className:"notification is-info"},"Loading..."):t?a.a.createElement("figure",null,a.a.createElement("img",{src:t,alt:""}),a.a.createElement("figcaption",null,"GIFs by ",a.a.createElement("a",{href:"https://giphy.com/"},"GIPHY"))):a.a.createElement("p",{className:"notification"},"Welcome!")}var j=function(){var e=Object(l.c)((function(e){return e.gif.url})),t=Object(l.c)((function(e){return e.gif.loading})),n=Object(l.c)((function(e){return e.gif.error})),r=Object(l.b)();return a.a.createElement("div",null,a.a.createElement("h1",{className:"title"},"\u732bGIF\u30ac\u30c1\u30e3"),a.a.createElement(v,{imageUrl:e,loading:t,error:n}),a.a.createElement("hr",null),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{className:"button is-primary",onClick:function(){return r(function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(d.actions.fetchStart()),e.prev=1,e.next=4,g();case 4:n=e.sent,t(d.actions.fetchSucceed(n.url)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(d.actions.fetchFaild(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}},"Play"),a.a.createElement("button",{className:"button",onClick:function(){return r(b())}},"Clear")))};var O=function(){return a.a.createElement("div",{className:"section"},a.a.createElement("div",{className:"container"},a.a.createElement(j,null)))},N=document.getElementById("root");i.a.render(a.a.createElement(l.a,{store:h},a.a.createElement(O,null)),N)}},[[12,1,2]]]);
//# sourceMappingURL=main.987983ad.chunk.js.map