(this["webpackJsonpsimple-dnd"]=this["webpackJsonpsimple-dnd"]||[]).push([[0],{3:function(e,a,t){e.exports=t(9)},8:function(e,a,t){},9:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),o=t.n(c);t(8);var d=function(e){return r.a.createElement("div",{id:e.id,className:e.className,draggable:e.draggable,onDragStart:function(e){var a=e.target;e.dataTransfer.setData("card_id",a.id),setTimeout((function(){a.classList.add("moving-card")}),0)},onDragOver:function(e){e.stopPropagation()},onDragEnd:function(e){e.target.classList.remove("moving-card")}},e.children)};var i=function(e){return r.a.createElement("div",{id:e.id,onDrop:function(e){e.preventDefault();var a=e.dataTransfer.getData("card_id"),t=document.getElementById(a);t.style.display="block",e.target.appendChild(t)},onDragOver:function(e){e.preventDefault()},className:e.className},e.children)};var l=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("main",{className:"flexbox"},r.a.createElement(i,{id:"board-1",className:"board"},r.a.createElement(d,{id:"card-1",className:"card",draggable:"true"},r.a.createElement("p",null,"Card 1"))),r.a.createElement(i,{id:"board-2",className:"board"},r.a.createElement(d,{id:"card-2",className:"card",draggable:"true"},r.a.createElement("p",null,"Card 2")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[3,1,2]]]);
//# sourceMappingURL=main.c7209a5e.chunk.js.map