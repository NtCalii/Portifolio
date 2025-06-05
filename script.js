
  window.addEventListener('load', () => {
    // Força scroll para o topo
    window.scrollTo(0, 0);

    // Remove o fragmento da URL (#projetos, etc.)
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  });
