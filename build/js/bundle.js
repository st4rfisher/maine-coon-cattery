!function(){var e={763:function(){const e=document.querySelector(".questions-answers__list"),t=e.querySelectorAll(".questions-answers__button"),s=e.querySelectorAll(".questions-answers__answer"),l=e.querySelectorAll(".questions-answers__icon"),r=Array.prototype.slice.call(t);t.forEach((e=>{e.addEventListener("click",(()=>{const t=r.indexOf(e);((e,t,s)=>{s.classList.contains("questions-answers__button--active")?(e.innerHTML="",e.insertAdjacentHTML("afterBegin",'<use xlink:href="img/icons/sprite.svg#unfurl-icon"></use>'),e.classList.toggle("questions-answers__icon--curtail"),s.classList.toggle("questions-answers__button--active"),t.classList.toggle("questions-answers__answer--show")):(e.innerHTML="",e.insertAdjacentHTML("afterBegin",'<use xlink:href="img/icons/sprite.svg#curtail-icon"></use>'),e.classList.toggle("questions-answers__icon--curtail"),s.classList.toggle("questions-answers__button--active"),t.classList.toggle("questions-answers__answer--show"))})(l[t],s[t],e)}))}))}},t={};function s(l){var r=t[l];if(void 0!==r)return r.exports;var o=t[l]={exports:{}};return e[l](o,o.exports,s),o.exports}!function(){"use strict";const e=(e,t,s)=>{t.forEach((e=>e.classList.remove(s))),t[e].classList.add(s)},t=document.querySelector(".pets-gallery"),l=t.querySelectorAll(".pets-gallery__button"),r=t.querySelectorAll(".pets-gallery__block"),o=Array.prototype.slice.call(l),a=t.querySelector(".pets-gallery__slider--left"),c=t.querySelector(".pets-gallery__slider--right"),n=t.querySelector(".pets-gallery__block.pets-gallery__block--he-cats").querySelectorAll(".pets-gallery__photo"),i=t.querySelector(".pets-gallery__block.pets-gallery__block--she-cats").querySelectorAll(".pets-gallery__photo"),_=t.querySelector(".pets-gallery__block.pets-gallery__block--kittens").querySelectorAll(".pets-gallery__photo");let u="he-cats",g=0;l.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),l.forEach((e=>e.classList.remove("pets-gallery__button--active")));const s=o.indexOf(e);((e,t)=>{e.classList.add("pets-gallery__button--active"),r.forEach((e=>e.classList.remove("pets-gallery__block--show"))),t.classList.add("pets-gallery__block--show"),u=e.dataset.tab})(e,r[s])}))}));const y=()=>{let e;return"he-cats"===u?e=n:"she-cats"===u?e=i:"kittens"===u&&(e=_),e};c.addEventListener("click",(()=>{g++,g>=y().length&&(g=0),e(g,y(),"pets-gallery__photo--show")})),a.addEventListener("click",(()=>{g<=0&&(g=y().length),g--,e(g,y(),"pets-gallery__photo--show")}));const p=document.querySelector(".team-gallery"),d=p.querySelectorAll(".team-gallery__member"),h=p.querySelector(".team-gallery__slider--left"),q=p.querySelector(".team-gallery__slider--right");let L=0;q.addEventListener("click",(()=>{L++,L>=d.length&&(L=0),e(L,d,"team-gallery__member--show")})),h.addEventListener("click",(()=>{L<=0&&(L=d.length),L--,e(L,d,"team-gallery__member--show")})),s(763)}()}();