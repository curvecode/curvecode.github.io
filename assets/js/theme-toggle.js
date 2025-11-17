(() => {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('site-theme');
  function apply(theme){
    root.setAttribute('data-theme', theme);
    localStorage.setItem('site-theme', theme);
  }
  if(stored){apply(stored)} else {
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    apply(prefers);
  }
  if(btn){
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
    });
  }
})();
