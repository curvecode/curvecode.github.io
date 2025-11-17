document.addEventListener('DOMContentLoaded', () => {
  const POSTS_PER_LOAD = 3;
  const postsDataEl = document.getElementById('posts-data');
  if(!postsDataEl) return;
  let posts = [];
  try { posts = JSON.parse(postsDataEl.textContent) } catch(e){ return }

  const container = document.getElementById('posts-list');
  const loader = document.getElementById('load-more');
  if(!container || !loader) return;

  let offset = 0;

  function renderMore(){
    const total = posts.length;
    const end = Math.min(offset + POSTS_PER_LOAD, total);
    for(let i=offset;i<end;i++){
      const p = posts[i];
      const el = document.createElement('article');
      el.className = 'card post-excerpt';
      el.innerHTML = `<h2><a href="${p.url}">${p.title}</a></h2><p class="post-meta">${p.date}</p><p>${p.excerpt || ''}</p>`;
      container.appendChild(el);
    }
    offset = end;
    if(offset >= posts.length) loader.style.display = 'none';
  }

  loader.addEventListener('click', (e) => { e.preventDefault(); renderMore(); });

  // initial load
  renderMore();
});
