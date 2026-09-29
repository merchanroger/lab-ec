const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#mainNav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
const sections=[...document.querySelectorAll('main section[id]')], links=[...document.querySelectorAll('#mainNav>a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));
