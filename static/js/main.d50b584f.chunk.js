(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(31)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./A.jpeg":18,"./B.jpeg":19,"./C.jpeg":20,"./D.jpeg":21,"./E.jpeg":22,"./F.jpeg":23,"./G.jpeg":24,"./H.jpeg":25,"./I.jpeg":26,"./J.jpeg":27,"./K.jpeg":28};function c(e){var t=s(e);return a(t)}function s(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}c.keys=function(){return Object.keys(n)},c.resolve=s,e.exports=c,c.id=17},function(e,t,a){e.exports=a.p+"static/media/A.a6b6d96d.jpeg"},function(e,t,a){e.exports=a.p+"static/media/B.4bfbbbe5.jpeg"},function(e,t,a){e.exports=a.p+"static/media/C.c21de8c7.jpeg"},function(e,t,a){e.exports=a.p+"static/media/D.31e38317.jpeg"},function(e,t,a){e.exports=a.p+"static/media/E.d703619c.jpeg"},function(e,t,a){e.exports=a.p+"static/media/F.1b4b8277.jpeg"},function(e,t,a){e.exports=a.p+"static/media/G.256b0980.jpeg"},function(e,t,a){e.exports=a.p+"static/media/H.e7ad70ea.jpeg"},function(e,t,a){e.exports=a.p+"static/media/I.d2f57c6f.jpeg"},function(e,t,a){e.exports=a.p+"static/media/J.f3a5f6e6.jpeg"},function(e,t,a){e.exports=a.p+"static/media/K.1b9abf50.jpeg"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(2),i=a.n(s),o=(a(14),a(3)),r=a(4),l=a(6),d=a(5),u=a(7),m=(a(15),a(16),function(e){var t=e.letterProp,n=e.versoProp,s=e.selectProp,i=e.foundProp;return t.map(function(e,t,o){return c.a.createElement("img",{id:"".concat(s.includes(e)&&n||i.includes(e)?"recto":"verso"),className:e,key:t,src:a(17)("./".concat(e.charAt(0),".jpeg")),alt:"Silhouette"})})}),p=(a(29),function(){return c.a.createElement("div",{className:"navcontainer"},c.a.createElement("h1",{className:"item"},"MEMORY GAME: "),c.a.createElement("h2",{className:"item"},"Investigation Edition"))}),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).imageSelection=function(t){var a=e.state.select.concat(t.target.className);e.setState({select:a}),console.log(t.target.className)},e.setTimer=function(t){e.timerHandle||(e.timerHandle=setTimeout(function(){e.setState({clicked:0,verso:!e.state.verso,select:[]}),e.timerHandle=0},t))},e.clearTimer=function(){e.timerHandle&&(clearTimeout(e.timerHandle),e.timerHandle=0)},e.handleClick=function(t){e.setState({clicked:e.state.clicked+1}),"wrap"===t.target.className&&e.setState({clicked:e.state.clicked}),e.state.clicked<1&&(e.imageSelection(t),e.setState({verso:!e.state.verso}));var a=t.target.className.charAt(0),n=e.state.select.map(function(e){return e.charAt(0)});if(e.state.clicked&&e.state.select.includes(t.target.className))e.setState({clicked:e.state.clicked});else if(1===e.state.clicked&&n.includes(a)){console.log("SAME"),e.imageSelection(t),e.setState({verso:!0});var c=e.state.found.concat(e.state.select,t.target.className);e.setState({found:c}),e.setTimer(500)}else 1!==e.state.clicked||n.includes(a)||(console.log("NOT SAME"),e.imageSelection(t),e.setState({verso:!0}),e.setTimer(1e3));2===e.state.clicked&&(e.setState({clicked:0,verso:!e.state.verso,select:[]}),e.clearTimer())},e.state={listLetters:[],select:[],found:[],verso:!1,clicked:0},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=["A","A2","B","B2","C","C2","D","D2","E","E2","F","F2","G","G2","H","H2","I","I2","J","J2","K","K2"],t=Math.floor(11*Math.random()),a=function(e){var t,a,n;for(t=e.length-1;t>0;t--)a=Math.floor(Math.random()*(t+1)),n=e[t],e[t]=e[a],e[a]=n;return e}(e.slice(0,t).concat(e.slice(t+1,e.length)));this.setState({listLetters:a})}},{key:"render",value:function(){var e=this.state,t=e.listLetters,a=e.verso,n=e.select,s=e.found;return c.a.createElement("div",{className:"html"},c.a.createElement(p,null),c.a.createElement("div",{className:"body"},c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"wrap",onClick:this.handleClick},c.a.createElement(m,{letterProp:t,versoProp:a,selectProp:n,foundProp:s})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30);i.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.d50b584f.chunk.js.map