(()=>{"use strict";const e=()=>{const e=document.querySelector("main");e.innerHTML="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("home");const t=document.createElement("img");t.setAttribute("src","images/logo_eclipse.svg"),t.setAttribute("alt","logo");const n=document.createElement("h1");n.textContent="Exceptional Ramen";const o=document.createElement("h2");return o.textContent="Taste The Difference",e.appendChild(t),e.appendChild(n),e.appendChild(o),e})())},t=(e,t)=>{const n=document.createElement("div");n.classList.add("item");const o=document.createElement("img"),a=e.toLowerCase().replace(/ /g,"_");o.setAttribute("src",`images/${a}.jpeg`),o.setAttribute("alt",e);const c=document.createElement("h2");c.textContent=e;const d=document.createElement("p");return d.textContent=t,n.appendChild(o),n.appendChild(c),n.appendChild(d),n};(()=>{const e=document.getElementById("content");e.appendChild((()=>{const e=document.createElement("header"),t=document.createElement("div");t.classList.add("logo-container");const n=document.createElement("img");n.setAttribute("src","images/logo_soybean.svg"),n.setAttribute("alt","logo");const o=document.createElement("h1");o.textContent="Ramen Rules",t.appendChild(n),t.appendChild(o);const a=document.createElement("ul"),c=document.createElement("li");c.classList.add("home"),c.textContent="Home";const d=document.createElement("li");d.classList.add("menu"),d.textContent="Menu";const i=document.createElement("li");return i.classList.add("contact"),i.textContent="Contact",a.appendChild(c),a.appendChild(d),a.appendChild(i),e.appendChild(t),e.appendChild(a),e})()),e.appendChild(document.createElement("main")),e.appendChild((()=>{const e=document.createElement("footer"),t=document.createElement("p");return t.textContent="Copyright © 2022 Martin Ukhanov",e.appendChild(t),e})())})(),e(),document.querySelector("header ul li.home").addEventListener("click",(()=>e())),document.querySelector("header ul li.menu").addEventListener("click",(()=>(()=>{const e=document.querySelector("main");e.innerHTML="",e.appendChild((()=>{const e=document.createElement("div");e.classList.add("menu");const n=document.createElement("div");n.classList.add("container");const o=document.createElement("h1");o.textContent="Pork";const a=document.createElement("div");a.classList.add("grid");const c=t("Pork Original","Sea salt, pork, seasoned egg, nori, scallions."),d=t("Pork Shoyu","Soy sauce, pork, garlic oil, nori, scallions."),i=t("Pork Miso","Soybean paste, pork, corn, garlic oil, scallions."),l=t("Pork Spicy Garlic","Chili pepper, pork, grated garlic, scallions.");a.appendChild(c),a.appendChild(d),a.appendChild(i),a.appendChild(l),n.appendChild(o),n.appendChild(a);const s=document.createElement("div");s.classList.add("container");const r=document.createElement("h1");r.textContent="Chicken";const p=document.createElement("div");p.classList.add("grid");const m=t("Chicken Original","Sea salt, chicken breast, seasoned egg, nori, white onion, scallions."),h=t("Chicken Shoyu","Soy sauce, chicken breast, nori, white onion, scallions."),u=t("Chicken Miso","Soybean paste, chicken breast, nori, white onion, scallions."),C=t("Chicken Spicy Jalapeno","Jalapeno paste, chicken breast, nori, white onion, scallions.");p.appendChild(m),p.appendChild(h),p.appendChild(u),p.appendChild(C),s.appendChild(r),s.appendChild(p);const g=document.createElement("div");g.classList.add("container");const E=document.createElement("h1");E.textContent="Vegetarian";const b=document.createElement("div");b.classList.add("grid");const k=t("Vegetarian Original","Sea salt, fried bean curd, bamboo shoots, wood ear mushrooms, corn, onion ginger oil, scallions."),L=t("Vegetarian Shoyu","Soy sauce, fried bean curd, bamboo shoots, wood ear mushrooms, corn, garlic oil, pickled red ginger, scallions."),y=t("Vegetarian Miso","Soybean paste, fried bean curd, bamboo shoots, wood ear mushrooms, corn, garlic oil, scallions."),S=t("Vegetarian Spicy Garlic","Chili pepper, fried bean curd, bamboo shoots, wood ear mushrooms, corn, onion ginger oil, grated garlic, scallions.");b.appendChild(k),b.appendChild(L),b.appendChild(y),b.appendChild(S),g.appendChild(E),g.appendChild(b),e.appendChild(n);const v=document.createElement("div");v.classList.add("line"),e.appendChild(v),e.appendChild(s);const x=document.createElement("div");return x.classList.add("line"),e.appendChild(x),e.appendChild(g),e})())})())),document.querySelector("header ul li.contact").addEventListener("click",(()=>(()=>{const e=document.querySelector("main");e.innerHTML="",e.appendChild((()=>{const e=document.createElement("div");return e.classList.add("contact"),e})())})()))})();