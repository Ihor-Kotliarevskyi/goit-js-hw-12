import{a as B,S as E,i as u}from"./assets/vendor-DA0uMjGz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const M="https://pixabay.com/api/",C="52764873-a8569ac81d8d8c122be292efa",m=15;async function b(t,e){return(await B.get(`${M}`,{params:{key:C,q:t,per_page:m,page:e,type:"photo",orientation:"horizontal",safesearch:!0}})).data}const I=new E(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.85,showCounter:!0});function d(t,e){const n=t.map(({webformatURL:l,largeImageURL:o,tags:r,likes:i,views:O,comments:P,downloads:q})=>`<li class="gallery-item">
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
                      <p>${i}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Views</h4>
                      <p>${O}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Comments</h4>
                      <p>${P}</p>
                    </li>
                    <li class="image-stat-item">
                      <h4>Downloads</h4>
                      <p>${q}</p>
                    </li>
                  </ul>
                </li>`).join("");e.insertAdjacentHTML("beforeend",n),I.refresh()}function D(t){t.innerHTML=""}function w(){$.style.display="block"}function L(){$.style.display="none"}function v(){p.style.display="block"}function f(){p.style.display="none"}function y(t){window.scrollBy({top:t,left:0,behavior:"smooth"})}function g(t){return(t[0].getBoundingClientRect().height+24)*2}const $=document.querySelector(".loader"),p=document.querySelector(".load-more-button"),S=document.querySelector(".form"),a=document.querySelector(".gallery");S.addEventListener("submit",H);p.addEventListener("click",R);let s=1,c="";async function H(t){if(t.preventDefault(),s=1,c=t.target.elements["search-text"].value.trim(),!c)A();else{w(),D(a);try{const e=await b(c,s);e.hits.length?(d(e.hits,a),v(),s++,e.totalHits/m<=s&&(f(),h("We're sorry, but you've reached the end of search results."))):(f(),h("Sorry, there are no images matching your search query. Please try again!"))}catch(e){x(e)}finally{S.reset(),L()}}}async function R(t){t.preventDefault(),w();try{const e=await b(c,s);e.totalHits/m<=s?(d(e.hits,a),f(),y(g(a.children)),h("We're sorry, but you've reached the end of search results.")):(d(e.hits,a),v(),y(g(a.children)),s++)}catch(e){x(e)}finally{L()}}u.settings({timeout:4e3,progressBar:!1});function h(t){u.info({title:"Info",message:`${t}`,color:"#f8e730ff",position:"bottomCenter"})}function A(){u.warning({title:"Attention!",message:"Please enter text to search!",position:"topRight"})}function x(t){u.error({title:"Ooops!",message:`${t.message}`,position:"bottomRight"})}
//# sourceMappingURL=index.js.map
