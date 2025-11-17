document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const from = params.get('from');
  if(from === null) return;
  // create a small back button and insert at top of main content
  const main = document.getElementById('page-main');
  if(!main) return;
  const back = document.createElement('a');
  back.href = `/?from=${encodeURIComponent(from)}`;
  back.className = 'post-back';
  back.textContent = '← Back';
  back.style.display = 'inline-block';
  back.style.marginBottom = '1rem';
  back.style.color = 'var(--link)';
  main.insertBefore(back, main.firstChild);
});
