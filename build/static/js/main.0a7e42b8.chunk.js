(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(30)},18:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),i=n.n(s),o=(n(18),n(2)),c=n.n(o),l=n(5),u=n(6),m=n(7),p=n(10),v=n(8),d=n(11),g=(n(22),n(1)),f=n.n(g),h=n(9),_=n.n(h);n(28);function y(e){var t=e.title,n=e.poster,a=e.genres,s=e.synopsis;return r.a.createElement("div",{className:"Movie test"},r.a.createElement("div",{className:"Movie__Columns"},r.a.createElement(w,{poster:n,alt:t})),r.a.createElement("div",{className:"Movie__Columns"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"Movie__Genres"},a.map(function(e,t){return r.a.createElement(E,{genre:e,key:t})})),r.a.createElement("div",{className:"Movie__synopsis"},r.a.createElement(_.a,{text:s,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))}function w(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{className:"Movie__poster",src:t,alt:n,title:n})}function E(e){var t=e.genre;return r.a.createElement("span",{className:"Movie__Genre"},t)}y.PropTypes={title:f.a.string.isRequired,poster:f.a.string,genres:f.a.array.isRequired,synopsis:f.a.string.isRequired},w.PropTypes={poster:f.a.string.isRequired};var M=y,b=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(s)))).state={},n._renderMoives=function(){return n.state.movies.map(function(e){return console.log(e),r.a.createElement(M,{title:e.title_english,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:e?"App":"App--loading"},e?this._renderMoives():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.0a7e42b8.chunk.js.map