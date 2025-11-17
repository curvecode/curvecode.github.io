document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const stored = (() => { try { return localStorage.getItem('site-theme') } catch (e) { return null }})();

  function apply(theme){
    if(!theme) return;
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('site-theme', theme) } catch(e) {}
    const status = document.getElementById('theme-status');
    if(status) status.textContent = theme;
    if(window.console && console.debug) console.debug('[theme-toggle] applied', theme);
  }

  if(stored){ apply(stored) }
  else {
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    apply(prefers);
  }

  if(!btn){
    // no button found; nothing else to do
    return;
  }

  const toggle = () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
  };

  // initialize status text
  const statusInit = document.getElementById('theme-status');
  if(statusInit) statusInit.textContent = root.getAttribute('data-theme') || (stored || 'light');

  btn.addEventListener('click', toggle);
  btn.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle() } });

  // page fade-in: remove class shortly after load to trigger CSS transition
  try {
    const main = document.getElementById('page-main');
    if(main){
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(!prefersReduced){
        window.setTimeout(() => { main.classList.remove('page-fade-enter'); main.classList.add('page-fade-enter-active') }, 25);
      } else {
        main.classList.remove('page-fade-enter');
        main.classList.add('page-fade-enter-active');
      }
    }
  } catch(e) { /* ignore */ }
});

