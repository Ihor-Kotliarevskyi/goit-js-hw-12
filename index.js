import{a as E,S as M,i as u}from"./assets/vendor-DA0uMjGz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const C="https://pixabay.com/api/",I="52764873-a8569ac81d8d8c122be292efa",m=15;async function L(t,e){return(await E.get(`${C}`,{params:{key:I,q:t,per_page:m,page:e,type:"photo",orientation:"horizontal",safesearch:!0}})).data}const D=new M(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.85,showCounter:!0});function f(t,e){const a=t.map(({webformatURL:l,largeImageURL:o,tags:r,likes:n,views:P,comments:q,downloads:B})=>`<li class="gallery-item">
                <div class="image-box">
                  <a class="gallery-link" href="${o}">
                      <img
                        class="gallery-image"
                        src="${l}"
                        alt="${r}"
                      />
                  </a>
                  </div>
                  <ul class="image-stats">
                    <li class="image-stat-item">
                      <h4>Likes</h4>
                      <p>${n}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Views</h4>
                      <p>${P}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Comments</h4>
                      <p>${q}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Downloads</h4>
                      <p>${B}</p>
                    </li>
                  </ul>
                </li>`).join("");e.insertAdjacentHTML("beforeend",a),D.refresh()}function g(t){t.innerHTML=""}function w(){S.style.display="block"}function v(){S.style.display="none"}function $(){p.style.display="block"}function h(){p.style.display="none"}function y(t){window.scrollBy({top:t,left:0,behavior:"smooth"})}function b(t){return(t[0].getBoundingClientRect().height+24)*2}const S=document.querySelector(".loader"),p=document.querySelector(".load-more-button"),x=document.querySelector(".form"),s=document.querySelector(".gallery");x.addEventListener("submit",H);p.addEventListener("click",R);let i=1,c="";function H(t){t.preventDefault(),i=1,c=t.target.elements["search-text"].value.trim(),c?(w(),g(s),L(c,i).then(e=>{e.hits.length?(g(s),f(e.hits,s),$(),i++,e.totalHits/m<=i&&(h(),d("We're sorry, but you've reached the end of search results."))):(h(),d("Sorry, there are no images matching your search query. Please try again!"))}).catch(e=>{O(e)}).finally(()=>{x.reset(),v()})):A()}function R(t){t.preventDefault(),w(),L(c,i).then(e=>{e.totalHits/m<=i?(f(e.hits,s),h(),y(b(s.children)),d("We're sorry, but you've reached the end of search results.")):(f(e.hits,s),$(),y(b(s.children)),i++)}).catch(e=>{O(e)}).finally(()=>{v()})}u.settings({timeout:4e3,progressBar:!1});function d(t){u.info({title:"Info",message:`${t}`,color:"#f8e730ff",position:"bottomCenter"})}function A(){u.warning({title:"Attention!",message:"Please enter text to search!",position:"topRight"})}function O(t){u.error({title:"Ooops!",message:`${t.message}`,position:"bottomRight"})}
//# sourceMappingURL=index.js.map
