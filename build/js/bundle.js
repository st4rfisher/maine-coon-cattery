!function(){var e={999:function(){const e=document.querySelector(".pets-gallery"),t=e.querySelectorAll(".pets-gallery__button"),s=e.querySelectorAll(".pets-gallery__block"),r=Array.prototype.slice.call(t),l=e.querySelector(".pets-gallery__slider--left"),o=e.querySelector(".pets-gallery__slider--right"),n=e.querySelector(".pets-gallery__block.pets-gallery__block--he-cats").querySelectorAll(".pets-gallery__photo"),c=e.querySelector(".pets-gallery__block.pets-gallery__block--she-cats").querySelectorAll(".pets-gallery__photo"),a=e.querySelector(".pets-gallery__block.pets-gallery__block--kittens").querySelectorAll(".pets-gallery__photo");let i="he-cats",u=0;t.forEach((e=>{e.addEventListener("click",(l=>{l.preventDefault(),t.forEach((e=>e.classList.remove("pets-gallery__button--active")));const o=r.indexOf(e);((e,t)=>{e.classList.add("pets-gallery__button--active"),s.forEach((e=>e.classList.remove("pets-gallery__block--show"))),t.classList.add("pets-gallery__block--show"),i=e.dataset.tab})(e,s[o])}))}));const _=(e,t)=>{t.forEach((e=>e.classList.remove("pets-gallery__photo--show"))),t[e].classList.add("pets-gallery__photo--show")},g=()=>{let e;return"he-cats"===i?e=n:"she-cats"===i?e=c:"kittens"===i&&(e=a),e};o.addEventListener("click",(()=>{u++,u>=g().length&&(u=0),_(u,g())})),l.addEventListener("click",(()=>{u<=0&&(u=g().length),u--,_(u,g())}))},763:function(){const e=document.querySelector(".questions-answers__list"),t=e.querySelectorAll(".questions-answers__button"),s=e.querySelectorAll(".questions-answers__answer"),r=e.querySelectorAll(".questions-answers__icon"),l=Array.prototype.slice.call(t);t.forEach((e=>{e.addEventListener("click",(()=>{const t=l.indexOf(e);((e,t,s)=>{s.classList.contains("questions-answers__button--active")?(e.innerHTML="",e.insertAdjacentHTML("afterBegin",'<use xlink:href="img/icons/sprite.svg#unfurl-icon"></use>'),e.classList.toggle("questions-answers__icon--curtail"),s.classList.toggle("questions-answers__button--active"),t.classList.toggle("questions-answers__answer--show")):(e.innerHTML="",e.insertAdjacentHTML("afterBegin",'<use xlink:href="img/icons/sprite.svg#curtail-icon"></use>'),e.classList.toggle("questions-answers__icon--curtail"),s.classList.toggle("questions-answers__button--active"),t.classList.toggle("questions-answers__answer--show"))})(r[t],s[t],e)}))}))}},t={};function s(r){var l=t[r];if(void 0!==l)return l.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";s(999),s(763)}()}();