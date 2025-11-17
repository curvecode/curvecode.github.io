document.addEventListener('DOMContentLoaded', () => {
  const POSTS_PER_PAGE = 3;
  const postsDataEl = document.getElementById('posts-data');
  if(!postsDataEl) return;
  let posts = [];
  try { posts = JSON.parse(postsDataEl.textContent) } catch(e){ return }

  const total = posts.length;
  const pages = Math.ceil(total / POSTS_PER_PAGE);
  const container = document.getElementById('posts-list');
  const pager = document.getElementById('posts-pager');
  if(!container || !pager) return;

  // allow reading initial page from ?from=N
  const urlParams = new URLSearchParams(window.location.search);
  let current = parseInt(urlParams.get('from') || '0', 10) || 0;

  function renderPage(idx){
    // circular index
    const page = ((idx % pages) + pages) % pages;
    current = page;
    container.innerHTML = '';
    const start = page * POSTS_PER_PAGE;
    for(let i=0;i<POSTS_PER_PAGE;i++){
      const p = posts[(start + i) % total];
      if(!p) continue;
      const el = document.createElement('article');
      el.className = 'card post-excerpt';
      // append `from` so post pages can go back to the same page
      const sep = p.url.includes('?') ? '&' : '?';
      const href = `${p.url}${sep}from=${page}`;
      el.innerHTML = `<h2><a href="${href}">${p.title}</a></h2><p class="post-meta">${p.date}</p><p>${p.excerpt || ''}</p>`;
      container.appendChild(el);
    }
    pager.querySelector('.page-current').textContent = `${page+1} / ${pages}`;
  }

  pager.querySelector('.prev').addEventListener('click', (e)=>{ e.preventDefault(); renderPage(current-1) });
  pager.querySelector('.next').addEventListener('click', (e)=>{ e.preventDefault(); renderPage(current+1) });

  renderPage(0);
});
