(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(6),r=n.n(c),s=(n(13),n(1)),i=n(4),u=n(7),f=(n(14),function(e){var t=e.snakeDots;return a.a.createElement("div",null,t.map((function(e,t){var n={top:"".concat(e[0],"%"),left:"".concat(e[1],"%")};return a.a.createElement("div",{key:t,className:"snake-dot",style:n})})))}),d=function(e){var t=e.food,n={top:"".concat(t[0],"%"),left:"".concat(t[1],"%")};return a.a.createElement("div",{style:n,className:"food"})};var l=function(){var e=function(){return[2*Math.floor((99*Math.random()+1)/2),2*Math.floor((99*Math.random()+1)/2)]},t={snakeDots:[[0,0],[0,2]],food:e(),direction:"RIGHT",speed:150},n=Object(o.useState)(t),c=Object(u.a)(n,2),r=c[0],l=c[1],b=function(){alert("You lost your score ".concat(r.snakeDots.length)),l(t)},m=function(t){t[0]===r.food[0]&&t[1]===r.food[1]&&(k(),r.food=e(),r.speed>=10&&(r.speed-=5))},k=function(){var e=Object(i.a)(r.snakeDots);e.unshift([]),l((function(t){return Object(s.a)(Object(s.a)({},t),{},{snakeDots:e})}))};Object(o.useEffect)((function(){return window.addEventListener("keyup",h),function(){window.removeEventListener("keyup",h)}}),[]),Object(o.useEffect)((function(){var e=setTimeout((function(){!function(){var e=Object(i.a)(r.snakeDots),t=e[e.length-1];switch(r.direction){case"UP":t=[t[0]-2,t[1]];break;case"DOWN":t=[t[0]+2,t[1]];break;case"LEFT":t=[t[0],t[1]-2];break;case"RIGHT":t=[t[0],t[1]+2]}e.push(t),e.shift(),l((function(t){return Object(s.a)(Object(s.a)({},t),{},{snakeDots:e})}))}()}),r.speed),t=Object(i.a)(r.snakeDots),n=t[t.length-1];return function(e){(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&b()}(n),function(e,t){e.pop(),e.forEach((function(e){t[0]===e[0]&&t[1]===e[1]&&b()}))}(t,n),m(n),function(){return clearTimeout(e)}}));var h=function(e){switch(e.code){case"ArrowUp":case"KeyW":l((function(e){return Object(s.a)(Object(s.a)({},e),{},{direction:"UP"})}));break;case"ArrowDown":case"KeyS":l((function(e){return Object(s.a)(Object(s.a)({},e),{},{direction:"DOWN"})}));break;case"ArrowLeft":case"KeyA":l((function(e){return Object(s.a)(Object(s.a)({},e),{},{direction:"LEFT"})}));break;case"ArrowRight":case"KeyD":l((function(e){return Object(s.a)(Object(s.a)({},e),{},{direction:"RIGHT"})}))}};return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"game-container"},a.a.createElement(f,{snakeDots:r.snakeDots}),a.a.createElement(d,{food:r.food})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.bd119b01.chunk.js.map