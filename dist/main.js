!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o={events:{},on:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},off:function(e,t){if(this.events[e])for(let n=0;n<this.events[e].length;n++)if(this.events[e][n]===t){this.events[e].splice(n,1);break}},emit:function(e,...t){this.events[e]&&this.events[e].forEach((function(e){e(...t)}))}};function r(e,t,n,o){this.title=e,this.desc=t,this.dueDate=n,this.priority=o}r.prototype.printData=function(){console.log(this)},r.prototype.updateTodo=function(e,t){},r.prototype.renderTodo=function(){let e=document.createElement("div");return e.className="todo",e.appendChild(function(e){let t=document.createElement("div");return t.innerText=e,t.classtitle="todo-title",t}(this.title)),e.appendChild(function(e){let t=document.createElement("p");return t.innerText=e,t.className="todo-desc",t}(this.desc)),e.appendChild(function(e){let t=document.createElement("div");return t.innerText=e,t.className="todo-duedate",t}(this.dueDate)),e.appendChild(function(e){let t=document.createElement("div");return t.innerText=e,t.className="todo-priority",t}(this.priority)),e};var i=function(e){this.name=e,this.todoArray=[]};const u=o;u.on("renderActiveProjectTodos",(function(e){let t=document.querySelector("#todo-container");e.todoArray.forEach(e=>{let n=e.renderTodo();console.log(n),t.appendChild(n)})})),document.querySelector("#submit-todo").addEventListener("click",(function(){let e={title:document.querySelector("#todo-title").value,desc:document.querySelector("#todo-desc").value,dueDate:document.querySelector("#todo-dueDate").value,priority:document.querySelector('input[name="priority"]:checked').id};u.emit("SubmitTodo",e)})),c=new i("Default"),u.on("SubmitTodo",(function(e){let t=Object.assign(new r,e);t.printData(),c.todoArray.push(t),console.log(c.todoArray),u.emit("renderActiveProjectTodos",c)}));var c}]);