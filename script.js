const totalPages = 21;
let current = 1;
const mainPage = document.getElementById('mainPage');
const pageLabel = document.getElementById('pageLabel');
const thumbs = [...document.querySelectorAll('.thumb')];

function showPage(n, scroll=false){
  current = Math.max(1, Math.min(totalPages, n));
  mainPage.src = `assets/page-${String(current).padStart(2,'0')}.webp`;
  mainPage.alt = `JK Enterprises catalogue page ${current}`;
  pageLabel.textContent = `Page ${current} / ${totalPages}`;
  thumbs.forEach(t => t.classList.toggle('active', Number(t.dataset.page) === current));
  if(scroll) document.getElementById('catalogue').scrollIntoView({behavior:'smooth', block:'start'});
}
document.getElementById('prev').addEventListener('click',()=>showPage(current-1));
document.getElementById('next').addEventListener('click',()=>showPage(current+1));
thumbs.forEach(t=>t.addEventListener('click',()=>showPage(Number(t.dataset.page))));
document.querySelectorAll('.nav-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    showPage(Number(btn.dataset.page), true);
  });
});
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight') showPage(current+1);
  if(e.key==='ArrowLeft') showPage(current-1);
});
showPage(1);
