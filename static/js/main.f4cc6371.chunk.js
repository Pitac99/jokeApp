(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),r=n.n(c),i=(n(17),n(3)),u=n(4),s=n(6),l=n(5),m=n(7),h=(n(19),function(e){var t=e.randomJoke;e.jokeImg;return a.a.createElement("div",null,a.a.createElement("h2",{className:"ml7 mt7 f1 white"},"Chuck Norris"),a.a.createElement("div",{className:"tl bg-white br2 ml7 dib pa3 measure"}," ",t))}),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).state={jokes:[]},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.chucknorris.io/jokes/random").then(function(e){return e.json()}).then(function(t){return e.setState({jokes:t})}),console.log("prima-incarcare")}},{key:"render",value:function(){var e=this,t=this.state.jokes.value;return a.a.createElement("div",null,a.a.createElement(h,{randomJoke:t}),a.a.createElement("button",{onClick:function(){fetch("https://api.chucknorris.io/jokes/random").then(function(e){return e.json()}).then(function(t){return e.setState({jokes:t})}),console.log("click")},className:"garamond f4 br2 ph3 pv2 dib mb2 white bg-black b ml7 mt3"},"Random Joke"))}}]),t}(o.Component),d=(n(21),function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,24)).then(function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),c(e),r(e)})});r.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null))),d()},8:function(e,t,n){e.exports=n(23)}},[[8,3,2]]]);
//# sourceMappingURL=main.f4cc6371.chunk.js.map