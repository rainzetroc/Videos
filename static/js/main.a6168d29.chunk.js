(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{45:function(e,t,i){},46:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i.n(n),s=i(17),a=i.n(s),r=i(8),o=i.n(r),d=i(18),l=i(3),u=i(4),j=i(6),m=i(5),b=(i(25),i(0)),v=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(i,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"search-bar ui-segment",children:Object(b.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{className:"",children:"Video Search"}),Object(b.jsx)("input",{onChange:this.onInputChange,value:this.state.term,type:"text"})]})})})}}]),i}(c.a.Component),h=i(19),p=i.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResults:5,key:"AIzaSyAt_GB4BYwjj4OylKW-7e56cIkcqlt59bo"}}),O=(i(45),function(e){var t=e.video,i=e.onVideoSelect;return Object(b.jsxs)("div",{onClick:function(){return i(t)},className:"video-item item",children:[Object(b.jsx)("img",{className:"ui image",alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("div",{className:"header",children:t.snippet.title})})]})}),x=function(e){var t=e.videos,i=e.onVideoSelect,n=t.map((function(e){return Object(b.jsx)(O,{onVideoSelect:i,video:e},e.id.videoId)}));return Object(b.jsx)("div",{className:"ui relaxed divided list",children:n},t.id)},f=function(e){var t=e.video;if(!t)return Object(b.jsx)("div",{children:"Loading..."});var i="https://www.youtube.com/embed/".concat(t.id.videoId);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"ui embed",children:Object(b.jsx)("iframe",{title:"video player",src:i})}),Object(b.jsxs)("div",{className:"ui segment",children:[Object(b.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(b.jsx)("p",{children:t.snippet.description})]})]})},S=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(d.a)(o.a.mark((function t(i){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/search",{params:{q:i}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(i,[{key:"componentDidMount",value:function(e){this.onTermSubmit("Ulan Cortez")}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"ui container",children:[Object(b.jsx)(v,{onFormSubmit:this.onTermSubmit}),Object(b.jsx)("div",{className:"ui grid",children:Object(b.jsxs)("div",{className:" ui stackable grid row",children:[Object(b.jsx)("div",{className:"eleven wide column",children:Object(b.jsx)(f,{video:this.state.selectedVideo})}),Object(b.jsx)("div",{className:"five wide column",children:Object(b.jsx)(x,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})})]})})]})}}]),i}(c.a.Component);a.a.render(Object(b.jsx)(S,{}),document.querySelector("#root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a6168d29.chunk.js.map