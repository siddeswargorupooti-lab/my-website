const links=[...document.querySelectorAll('.dots a')];
const sections=[...document.querySelectorAll('.slide')];
const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const i=sections.indexOf(e.target);
      links.forEach((l,n)=>l.classList.toggle('active',n===i));
    }
  })
},{threshold:.55});
sections.forEach(s=>sectionObserver.observe(s));

const data={
  aurelia:{kicker:'01 / BRAND IDENTITY',title:'AURELIA',desc:'A refined identity direction with warm editorial tones, elegant typography and campaign-ready poster language.',images:['assets/aurelia-sale.png','assets/aurelia-love.png','assets/aurelia-portrait.png']},
  caffeine:{kicker:'02 / COFFEE BRAND',title:'CAFFEINE GRAVE',desc:'A darker coffee universe built around late nights, bold type and a little bit of beautiful chaos.',images:['assets/caffeine-grave-brand.png','assets/caffeine-grave-menu.png','assets/caffeine-grave-contact.png']},
  valeron:{kicker:'03 / LIFESTYLE BRAND',title:'VALERON',desc:'A premium, restrained visual language designed to feel modern, confident and tactile.',images:['assets/valeron-logo.png','assets/valeron-watch.png','assets/valeron-portrait.png']}
};
const modal=document.getElementById('posterModal');
const wall=document.getElementById('posterWall');
document.querySelectorAll('.brand-card').forEach(card=>{
  card.addEventListener('click',()=>{
    const d=data[card.dataset.brand];
    document.getElementById('modalKicker').textContent=d.kicker;
    document.getElementById('modalTitle').textContent=d.title;
    document.getElementById('modalDesc').textContent=d.desc;
    wall.innerHTML=d.images.map((src,i)=>`
      <figure class="poster-image">
        <img src="${src}" alt="${d.title} project ${i+1}" loading="lazy">
        <figcaption>SELECTED WORK 0${i+1} · CREATIVE ARCHIVE · 2026</figcaption>
      </figure>`).join('');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  });
});
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
document.querySelector('.modal-close').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

document.querySelector('.menu').addEventListener('click',()=>{
  const nav=document.querySelector('.nav nav');
  nav.style.display=nav.style.display==='flex'?'none':'flex';
  if(nav.style.display==='flex'){
    nav.style.position='absolute';nav.style.top='78px';nav.style.left='0';nav.style.right='0';
    nav.style.padding='22px 7vw';nav.style.background='#f4f1ec';nav.style.flexDirection='column';
  }
});
