(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("img");n.src="img/mikita-yo-oJUiZL2M2aA-unsplash.jpg",n.height="300",t.appendChild(n);const c=document.createElement("h1");c.textContent="welcome to our restaurant!",t.appendChild(c);const d=document.createElement("p");d.textContent="we serve the best food in town. come check it out",t.appendChild(d),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{alert("hello");const n=document.querySelector("#content"),c=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div");c.setAttribute("id","home-btn"),d.setAttribute("id","home-btn"),o.setAttribute("id","home-btn"),c.classList.add("tab"),d.classList.add("tab"),o.classList.add("tab"),c.textContent="Home",d.textContent="Menu",o.textContent="Contact",n.appendChild(c),n.appendChild(d),n.appendChild(o),c.addEventListener("click",(()=>{t(),e()})),d.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="our menu";const c=document.createElement("ul"),d=document.createElement("li");d.textContent="Pomodoro";const o=document.createElement("li");o.textContent="Bolognesa";const a=document.createElement("li");a.textContent="Alfredo",c.appendChild(d),c.appendChild(o),c.appendChild(a),t.appendChild(n),t.appendChild(c),e.appendChild(t)})()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.classList.add("contact-form");const c=document.createElement("input");c.type="text",c.placeholder="Enter heading",n.appendChild(c);const d=document.createElement("input");d.type="text",d.placeholder="Enter address",n.appendChild(d);const o=document.createElement("input");o.type="text",o.placeholder="Enter phone",n.appendChild(o);const a=document.createElement("input");a.type="submit",a.value="submit",n.appendChild(a),t.appendChild(n),e.appendChild(t)})()}))})(),e()})();