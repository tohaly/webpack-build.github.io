!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){},function(e,n,t){},function(e,n){var t;t={lead:{section:document.querySelector(".lead"),buttonClass:"menu-item__link_stocks"},poster:{section:document.querySelector(".description"),buttonClass:"menu-item__link_poster"},projects:{section:document.querySelector(".projects"),buttonClass:"menu-item__link_projects"},organizers:{section:document.querySelector(".sponsors__title_org"),buttonClass:"menu-item__link_organizers"},partners:{section:document.querySelector(".sponsors__title_partners"),buttonClass:"menu-item__link_partners"}},window.btnAndSectn=t},function(e,n,t){"use strict";t.r(n);t(0),t(1);function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.section=n.section,this.buttonClass=n.buttonClass}var n,t,r;return n=e,(t=[{key:"scrolTo",value:function(e){var n=setInterval((function(){window.scrollBy(0,5)}),3);document.addEventListener("scroll",(function(){(pageYOffset>=e.offsetTop||pageYOffset===document.body.offsetHeight-document.documentElement.clientHeight)&&clearInterval(n)}))}},{key:"render",value:function(e,n){e.target.classList.contains(n)&&(e.preventDefault(),this.scrolTo(this.section))}},{key:"listeners",value:function(){var e=this;document.addEventListener("click",(function(n){e.render(n,e.buttonClass)}))}}])&&o(n.prototype,t),r&&o(n,r),e}(),i=(t(2),new r(window.btnAndSectn.lead)),s=new r(window.btnAndSectn.poster),u=new r(window.btnAndSectn.projects),c=new r(window.btnAndSectn.organizers),l=new r(window.btnAndSectn.partners);i.listeners(),s.listeners(),u.listeners(),c.listeners(),l.listeners(),document.querySelector(".header__humburger").addEventListener("click",(function(){document.querySelector(".menu_drop-down").classList.toggle("menu_drop-down_is-opened")}))}]);