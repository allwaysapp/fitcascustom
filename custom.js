(function () {
  // 1) SIDEBAR BUTONLARINI EKLEYEN FONKSİYON
  function addCustomButtons() {
    const sidebarLinks = document.querySelector('.sidebar__links');
    if (!sidebarLinks) return;

    // 1) FitCas TV butonu
    if (!sidebarLinks.querySelector('a[href="https://fitcastv.com/"]')) {
      const fitcasTVButton = document.createElement('a');
      fitcasTVButton.href = 'https://fitcastv.com/';
      fitcasTVButton.textContent = 'FITCAS TV';
      Object.assign(fitcasTVButton.style, {
        display: 'block',
        width: '100%',
        backgroundColor: '#ffc107',
        color: '#fff',
        textAlign: 'center',
        padding: '14px 0',
        marginTop: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px'
      });
      sidebarLinks.appendChild(fitcasTVButton);
      console.log('FitCas TV butonu eklendi:', fitcasTVButton);
    }

    // 2) FitCas ÇARK butonu
    if (!sidebarLinks.querySelector('a[href="https://api.fitcark.com/wheel/"]')) {
      const fitcasCarkButton = document.createElement('a');
      fitcasCarkButton.href = 'https://api.fitcark.com/wheel/';
      fitcasCarkButton.textContent = 'FITCAS ÇARK';
      Object.assign(fitcasCarkButton.style, {
        display: 'block',
        width: '100%',
        backgroundColor: '#28a745',
        color: '#fff',
        textAlign: 'center',
        padding: '14px 0',
        marginTop: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px'
      });
      sidebarLinks.appendChild(fitcasCarkButton);
      console.log('FitCas ÇARK butonu eklendi:', fitcasCarkButton);
    }

    // 3) Promosyonlar butonu (Arkaplan görseli)
    if (!sidebarLinks.querySelector('a[href="/tr/promotions"]')) {
      const promoButton = document.createElement('a');
      promoButton.href = '/tr/promotions';
      promoButton.textContent = 'PROMOSYONLAR';
      Object.assign(promoButton.style, {
        display: 'block',
        width: '100%',
        backgroundImage: 'url("https://raw.githubusercontent.com/allwaysapp/fitcascustom/refs/heads/main/promosyonlar.png")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        textAlign: 'center',
        padding: '14px 0',
        marginTop: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px'
      });
      sidebarLinks.appendChild(promoButton);
      console.log('Promosyonlar butonu eklendi:', promoButton);
    }
  }

  // 2) HEADER BUTONLARINI EKLEYEN FONKSİYON
  function addHeaderLinks() {
    const headerActions = document.querySelector('.header__actions');
    if (!headerActions) return;
    const signInBtn = headerActions.querySelector('.header__signin');

    // 1) Fit TV linki
    if (!headerActions.querySelector('.header__fitTv')) {
      const fitTvLink = document.createElement('a');
      fitTvLink.className = 'header__fitTv';
      fitTvLink.href = 'https://fitcastv.com/';
      fitTvLink.target = '_blank';
      Object.assign(fitTvLink.style, {
        display: 'inline-flex',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)',
        borderRadius: '8px',
        color: '#fff',
        padding: '8px 12px',
        fontWeight: 'bold',
        textDecoration: 'none',
        cursor: 'pointer',
        marginRight: '8px'
      });
      fitTvLink.innerHTML = `
        <img 
          src="https://github.com/allwaysapp/fitcascustom/blob/main/tv.png?raw=true" 
          alt="Fit TV Icon" 
          style="width:20px;height:auto;margin-right:8px;"
        />
        <span>Fit TV</span>`;
      if (signInBtn) headerActions.insertBefore(fitTvLink, signInBtn);
      else headerActions.appendChild(fitTvLink);
      console.log('Fit TV linki eklendi:', fitTvLink);
    }

    // 2) Fit ÇARK linki
    if (!headerActions.querySelector('.header__fitCark')) {
      const fitCarkLink = document.createElement('a');
      fitCarkLink.className = 'header__fitCark';
      fitCarkLink.href = 'https://api.fitcark.com/wheel/';
      fitCarkLink.target = '_blank';
      Object.assign(fitCarkLink.style, {
        display: 'inline-flex',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(to right, #ff0844 0%, #ffb199 100%)',
        borderRadius: '8px',
        color: '#fff',
        padding: '8px 12px',
        fontWeight: 'bold',
        textDecoration: 'none',
        cursor: 'pointer'
      });
      fitCarkLink.innerHTML = `
        <img 
          src="https://github.com/allwaysapp/fitcascustom/blob/main/wheel.png?raw=true" 
          alt="Fit ÇARK Icon" 
          style="width:20px;height:auto;margin-right:8px;"
        />
        <span>Fit ÇARK</span>`;
      if (signInBtn) headerActions.insertBefore(fitCarkLink, signInBtn);
      else headerActions.appendChild(fitCarkLink);
      console.log('Fit ÇARK linki eklendi:', fitCarkLink);
    }
  }

  // 3) BANNER ve ORDER DÜZENİ
  const bannersWrapper = document.getElementById('banners-wrapper');
  const topGamesWrapper = document.getElementById('top-games-wrapper');
  if (bannersWrapper && topGamesWrapper && topGamesWrapper.parentNode) {
    topGamesWrapper.parentNode.insertBefore(bannersWrapper, topGamesWrapper);
  }

  // 4) SAYFA YÜKLENİRKEN İLK ÇAĞRI
  addCustomButtons();
  addHeaderLinks();

  // 5) MUTATIONOBSERVER’LAR
  const sidebarObserver = new MutationObserver((mutations, obs) => {
    if (document.querySelector('.sidebar__links')) {
      addCustomButtons();
      obs.disconnect();
    }
  });
  sidebarObserver.observe(document.body, { childList: true, subtree: true });

  const headerObserver = new MutationObserver((mutations, obs) => {
    if (document.querySelector('.header__actions')) {
      addHeaderLinks();
      obs.disconnect();
    }
  });
  headerObserver.observe(document.body, { childList: true, subtree: true });

  // 6) CLIENT‐SIDE NAVIGATION: sadece "/tr/promotions" linkinin tam reload yapmasını engelle
  document.body.addEventListener('click', function(e) {
    const promoLink = e.target.closest('a[href="/tr/promotions"]');
    if (!promoLink) return;
    e.preventDefault();
    const path = promoLink.getAttribute('href');
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  });

})();
