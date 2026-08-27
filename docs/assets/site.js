(() => {
  const switcher = document.querySelector('.track-switch');
  const tabs = [...document.querySelectorAll('[data-track]')];
  const panels = [...document.querySelectorAll('[data-track-panel]')];
  if (!switcher || tabs.length !== 2 || panels.length !== 2) return;

  const activate = (track, updateHash = true) => {
    switcher.dataset.active = track;
    tabs.forEach((tab) => {
      const selected = tab.dataset.track === track;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.trackPanel === track);
    });
    if (updateHash) history.replaceState(null, '', `#${track}`);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab.dataset.track));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const next = tabs[index === 0 ? 1 : 0];
      activate(next.dataset.track);
      next.focus();
    });
  });

  window.addEventListener('hashchange', () => {
    if (location.hash === '#agent' || location.hash === '#prompt') {
      activate(location.hash.slice(1), false);
    }
  });

  activate(location.hash === '#agent' ? 'agent' : 'prompt', false);
})();
