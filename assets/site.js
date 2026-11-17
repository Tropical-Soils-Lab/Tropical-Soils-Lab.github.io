'use strict';
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-items');
if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});}
document.querySelectorAll('.nav-items details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.nav-items details').forEach(other=>{if(other!==d)other.open=false;});}));
document.addEventListener('click',e=>{if(!e.target.closest('.nav-items'))document.querySelectorAll('.nav-items details').forEach(d=>d.open=false);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.nav-items details').forEach(d=>d.open=false);if(menu?.getAttribute('aria-expanded')==='true'){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.focus();}}});
document.querySelectorAll('[data-news-feed]').forEach(feed=>{
 const cards=[...feed.querySelectorAll('.news-card')],size=Number(feed.dataset.pageSize)||3,status=feed.querySelector('[data-page-status]'),previous=feed.querySelector('[data-previous]'),next=feed.querySelector('[data-next]'),empty=feed.querySelector('[data-empty]');let page=0,category='All';
 function render(){const filtered=cards.filter(c=>category==='All'||c.dataset.category===category),pages=Math.max(1,Math.ceil(filtered.length/size));page=Math.min(Math.max(0,page),pages-1);const visible=new Set(filtered.slice(page*size,(page+1)*size));cards.forEach(c=>c.hidden=!visible.has(c));status.textContent=filtered.length?`Page ${page+1} of ${pages}`:'No announcements in this category';previous.disabled=page===0;next.disabled=page===pages-1;if(empty)empty.hidden=filtered.length>0;}
 previous.addEventListener('click',()=>{page--;render();});next.addEventListener('click',()=>{page++;render();});
 feed.querySelectorAll('[data-category-filter]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.categoryFilter;page=0;feed.querySelectorAll('[data-category-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render();}));render();
});
