import{a as w,S as x,i as s}from"./assets/vendor-DA0uMjGz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const P="https://pixabay.com/api/",q="52764873-a8569ac81d8d8c122be292efa",m=150;function g(r,e){return w.get(`${P}`,{params:{key:q,q:r,per_page:m,page:e,type:"photo",orientation:"horizontal",safesearch:!0}}).then(n=>(console.log(n),n.data))}const M=new x(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.85,showCounter:!0});function f(r,e){const n=r.map(({webformatURL:c,largeImageURL:t,tags:o,likes:a,views:$,comments:I,downloads:S})=>`<li class="gallery-item">
                <div class="image-box">
                  <a class="gallery-link" href="${t}">
                      <img
                        class="gallery-image"
                        src="${c}"
                        alt="${o}"
                      />
                  </a>
                  </div>
                  <ul class="image-stats">
                    <li class="image-stat-item">
                      <h4>Likes</h4>
                      <p>${a}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Views</h4>
                      <p>${$}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Comments</h4>
                      <p>${I}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Downloads</h4>
                      <p>${S}</p>
                    </li>
                  </ul>
                </li>`).join("");e.insertAdjacentHTML("beforeend",n),M.refresh()}function h(r){r.innerHTML=""}function d(){v.style.display="block"}function y(){v.style.display="none"}function b(){p.style.display="block"}function L(){p.style.display="none"}const v=document.querySelector(".loader"),p=document.querySelector(".load-more-button"),O=document.querySelector(".form"),l=document.querySelector(".gallery");O.addEventListener("submit",C);p.addEventListener("click",E);s.settings({timeout:2500,progressBar:!1,transitionIn:"flipInX",transitionOut:"flipInX"});let i=1,u="";function C(r){r.preventDefault(),i=1,u=r.target.elements["search-text"].value.trim(),u?(d(),h(l),g(u,i).then(e=>{e.hits.length?(h(l),f(e.hits,l),b(),i++,console.log(e),e.totalHits/m<=i&&(L(),s.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",timeout:2500,color:"#f8e730ff",position:"bottomCenter"}))):s.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",color:"#f8e730ff",position:"bottomCenter"})}).catch(e=>{s.error({title:"Ooops!",message:`${e.message}`,position:"bottomRight"})}).finally(()=>{O.reset(),y()})):s.warning({title:"Attention!",message:"Please enter text to search!",position:"topRight"})}function E(r){r.preventDefault(),d(),g(u,i).then(e=>{e.totalHits/m<=i?(f(e.hits,l),L(),s.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",timeout:2500,color:"#f8e730ff",position:"bottomCenter"})):(f(e.hits,l),b(),i++,console.log(e))}).catch(e=>{s.error({title:"Ooops!",message:`${e.message}`,position:"bottomRight"})}).finally(()=>{y()})}
//# sourceMappingURL=index.js.map
