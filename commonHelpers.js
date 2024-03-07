import{S as l,i as p}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",u="42729601-bb8f3cd30c047f14b18874640";function h(o){const s=new URLSearchParams({key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const d=new l(".photos-list a",{captionsData:"alt",captionDelay:250});function m({webformatURL:o,largeImageURL:s,tags:r,likes:i,views:e,comments:t,downloads:n}){return`
        <li class="photos__item">
          <a
            class="photos__link"
            href="${s}"
          >
            <img
              class="photos__image"
              src="${o}"
              alt="${r}"
              
            />
          </a>
         <span class="photos-info">
            <p class="text-center">Likes <span class="photos-text">${i}</span></p>
            <p class="text-center">Views <span class="photos-text">${e}</span></p> 
            <p class="text-center">Comments <span class="photos-text">${t}</span></p>
            <p class="text-center">Downloads <span class="photos-text">${n}</span></p>
         </span>
        </li>
      `}function g(o){return o.map(m).join("")}function y(o,s){o.innerHTML=g(s)}function L(){d.refresh()}const b=document.querySelector(".js-hero-form"),a=document.querySelector(".photos-list"),c=document.querySelector(".loader");b.addEventListener("submit",o=>{o.preventDefault(),x(),a.innerHTML="";const s=o.target.elements.query.value.trim();h(s).then(r=>{r.hits.length===0&&p.error({title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),y(a,r.hits),L()}).catch(r=>{console.error(r)}).finally(()=>{P()}),o.target.reset()});function x(){c.classList.add("visible")}function P(){c.classList.remove("visible")}
//# sourceMappingURL=commonHelpers.js.map
