(this.webpackJsonphackernews=this.webpackJsonphackernews||[]).push([[0],{42:function(e,t,a){e.exports=a(94)},47:function(e,t,a){},76:function(e,t){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(39),o=a.n(s),i=(a(47),a(10)),c=a(1),l=a(15),m=a(5),d=a(6),u=a(7),h=a(8),f="https://hacker-news.firebaseio.com/v0",p=function(e){return"".concat(f,"/item/").concat(e,".json")},E=a(9);var v=function(e){return function(t){var a=t.isLoading,n=t.type,s=t.error,o=Object(E.a)(t,["isLoading","type","error"]);if(s)return r.a.createElement("div",{className:"error-message"},r.a.createElement("span",null,"Error Occured!"));if(!a)return r.a.createElement(e,o);switch(n){case"story":return r.a.createElement("div",{className:"loading-bar"},r.a.createElement("div",{className:"loading-bar__heading"}),r.a.createElement("div",{className:"loading-bar__description"}));case"comment":return r.a.createElement("div",{className:"loading-bar"},r.a.createElement("div",{className:"loading-bar__description"}));default:return r.a.createElement("div",null,"Loading...")}}};function g(e){if(!e.ok)throw Error(e);return e}var b=a(12),y=a(4);var L=function(e){var t=e.data,a=(Object(E.a)(e,["data"]),Object(c.e)().storyId?r.a.createElement("h1",{className:"story__title"},r.a.createElement(i.b,{to:"/".concat(t.id)},t.title)):r.a.createElement("h2",{className:"story__title"},r.a.createElement(i.b,{to:"/".concat(t.id)},t.title)));return r.a.createElement("div",null,a,r.a.createElement("div",{className:"description story__description"},r.a.createElement("span",{className:"description__by"},r.a.createElement(y.d,null)," ",r.a.createElement("strong",null,t.by)),r.a.createElement("span",{className:"description__comments"},r.a.createElement(y.c,null)," ",t.kids?t.kids.length:"0"),r.a.createElement("span",{className:"description__time"},r.a.createElement(y.a,null)," ",new Date(1e3*t.time).toLocaleString()),r.a.createElement("span",{className:"description__permalink"},r.a.createElement("a",{href:t.url,target:"_new",title:t.title},r.a.createElement(y.b,null)))))},N=v(L),k=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getStory=function(){fetch(p(n.props.id)).then(g).then((function(e){return e.json()})).then((function(e){n.setState({data:Object(b.a)({},e),isLoading:!1})})).catch((function(e){n.setState({error:!0})}))},n.state={data:{},isLoading:!0,activeComments:[],initialLoad:!1,showComments:!1,allCommentsLoaded:!1,error:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getStory()}},{key:"render",value:function(){return r.a.createElement("div",{className:"story"},r.a.createElement(N,{type:"story",error:this.state.error,isLoading:this.state.isLoading,data:this.state.data}))}}]),a}(r.a.Component);var S=v((function(e){var t=e.list,a=Object(E.a)(e,["list"]);return r.a.createElement("div",null,r.a.createElement("div",{className:"stories-list"},t.map((function(e){return r.a.createElement(k,{id:e,key:e})}))),r.a.createElement("button",{className:"btn stories-list__btn",onClick:a.loadStories,disabled:a.allLoaded},a.allLoaded?"No More Stories":"More Stories"))})),_=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).getTopStories=function(){fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then(g).then((function(e){return e.json()})).then((function(t){e.storiesList=Object(l.a)(t),e.loadStories(),e.setState({isLoading:!1})})).catch((function(t){e.setState({error:!0})}))},e.loadStories=function(){var t=e.state.activeStories.length+10;e.setState({activeStories:Object(l.a)(e.storiesList.slice(0,t))}),e.storiesList.length===e.state.activeStories.length&&e.setState({allLoaded:!0})},e.state={activeStories:[],allLoaded:!1,isLoading:!0,error:!1},e.storiesList=[],e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getTopStories()}},{key:"render",value:function(){return r.a.createElement(S,{type:"story",isLoading:this.state.isLoading,error:this.state.error,list:this.state.activeStories,loadStories:this.loadStories,allLoaded:this.state.allLoaded})}}]),a}(r.a.Component),j=a(41),O=a.n(j);var w=v((function(e){var t=e.data;return Object(E.a)(e,["data"]),r.a.createElement("div",{className:"comment"},r.a.createElement("div",{className:"description comment__description"},r.a.createElement("span",{className:"description__by"},r.a.createElement(y.d,null)," ",r.a.createElement("strong",null,t.by)),r.a.createElement("span",{className:"description__comments"},r.a.createElement(y.c,null)," ",t.kids?t.kids.length:"0"),r.a.createElement("span",{className:"description__time"},r.a.createElement(y.a,null)," ",new Date(1e3*t.time).toLocaleString())),O()(t.text))})),C=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getReplies=function(){fetch(p(n.props.id)).then(g).then((function(e){return e.json()})).then((function(e){n.setState({data:Object(b.a)({},e),isLoading:!1})})).catch((function(e){n.setState({error:!0})}))},n.state={data:{},isLoading:!0,error:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getReplies()}},{key:"render",value:function(){return r.a.createElement("div",{className:"comment-wrapper"},r.a.createElement(w,{type:"comment",error:this.state.error,isLoading:this.state.isLoading,data:this.state.data}),this.state.data.kids&&this.state.data.kids.map((function(e){return r.a.createElement(a,{id:e,key:e})})))}}]),a}(r.a.Component),M=v(L),I=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getStory=function(){fetch(p(n.props.match.params.storyId)).then(g).then((function(e){return e.json()})).then((function(e){n.setState({data:Object(b.a)({},e),isLoading:!1},(function(){n.state.data.kids?n.loadComments():n.setState({allCommentsLoaded:!0})}))})).catch((function(e){n.setState({error:!0})}))},n.loadComments=function(){var e=n.state.activeComments.length+1;n.setState({activeComments:Object(l.a)(n.state.data.kids.slice(0,e))},(function(){n.state.data.kids.length===n.state.activeComments.length&&n.setState({allCommentsLoaded:!0})}))},n.state={data:{},isLoading:!0,activeComments:[],allCommentsLoaded:!1,error:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getStory()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{error:this.state.error,isLoading:this.state.isLoading,data:this.state.data,type:"story"}),this.state.activeComments.map((function(e){return r.a.createElement(C,{id:e,key:e})})),!this.state.error&&r.a.createElement("div",{className:"detail-actions"},r.a.createElement("button",{className:"btn",onClick:this.loadComments,disabled:this.state.allCommentsLoaded},this.state.allCommentsLoaded?"No More Comments":"More Comments")))}}]),a}(r.a.Component);var D=function(e){return function(t){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},"HackerNews")))),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement(e,t))),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"footer__text"},"Built using ",r.a.createElement("a",{href:"https://github.com/HackerNews/API",target:"_new",title:"HackerNews API"},"HackerNews API")))))}},x=D(_),H=D(I);var A=function(){return r.a.createElement(i.a,{basename:"/HackerNews"},r.a.createElement(c.a,{exact:!0,path:"/",component:x}),r.a.createElement(c.a,{exact:!0,path:"/:storyId",component:H}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.9fd6864e.chunk.js.map