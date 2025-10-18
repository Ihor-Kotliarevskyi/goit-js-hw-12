import{a as h,S as y,i as n}from"./assets/vendor-DA0uMjGz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const b="https://pixabay.com/api/",L="52764873-a8569ac81d8d8c122be292efa";function O(s){return h.get(`${b}`,{params:{key:L,q:s,per_page:30,type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const $=new y(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.85,showCounter:!0});function x(s,r){const i=s.map(({webformatURL:a,largeImageURL:e,tags:t,likes:o,views:p,comments:g,downloads:d})=>`<li class="gallery-item">
                <div class="image-box">
                  <a class="gallery-link" href="${e}">
                      <img
                        class="gallery-image"
                        src="${a}"
                        alt="${t}"
                      />
                  </a>
                  </div>
                  <ul class="image-stats">
                    <li class="image-stat-item">
                      <h4>Likes</h4>
                      <p>${o}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Views</h4>
                      <p>${p}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Comments</h4>
                      <p>${g}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Downloads</h4>
                      <p>${d}</p>
                    </li>
                  </ul>
                </li>`).join("");r.insertAdjacentHTML("beforeend",i),$.refresh()}function c(s){s.innerHTML=""}function S(){m.style.display="block"}function u(){m.style.display="none"}const m=document.querySelector(".loader"),f=document.querySelector(".form"),l=document.querySelector(".gallery");f.addEventListener("submit",v);n.settings({timeout:2500,progressBar:!1,transitionIn:"flipInX",transitionOut:"flipInX"});function v(s){s.preventDefault(),S();const r=s.target.elements["search-text"].value.trim();r?(c(l),O(r).then(i=>{i.length?(c(l),x(i,l)):n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",color:"#f8e730ff",position:"center"})}).catch(i=>{n.error({title:"Ooops!",message:`${i.message}`,position:"bottomRight"})}).finally(()=>{f.reset(),u()})):(n.warning({title:"Attention!",message:"Please enter text to search!",position:"topRight"}),u())}
//# sourceMappingURL=index.js.map
