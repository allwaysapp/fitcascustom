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
      
      // Stil ayarları
      fitcasTVButton.style.display = 'block';
      fitcasTVButton.style.width = '100%';
      fitcasTVButton.style.backgroundColor = '#ffc107';
      fitcasTVButton.style.color = '#fff';
      fitcasTVButton.style.textAlign = 'center';
      fitcasTVButton.style.padding = '14px 0';
      fitcasTVButton.style.marginTop = '10px';
      fitcasTVButton.style.borderRadius = '10px';
      fitcasTVButton.style.cursor = 'pointer';
      fitcasTVButton.style.fontWeight = 'bold';
      fitcasTVButton.style.fontSize = '16px';

      sidebarLinks.appendChild(fitcasTVButton);
      console.log('FitCas TV butonu eklendi:', fitcasTVButton);
    }

    // 2) FitCas ÇARK butonu
    if (!sidebarLinks.querySelector('a[href="https://api.fitcark.com/wheel/"]')) {
      const fitcasCarkButton = document.createElement('a');
      fitcasCarkButton.href = 'https://api.fitcark.com/wheel/';
      fitcasCarkButton.textContent = 'FITCAS ÇARK';

      // Stil ayarları
      fitcasCarkButton.style.display = 'block';
      fitcasCarkButton.style.width = '100%';
      fitcasCarkButton.style.backgroundColor = '#28a745'; // Yeşil renk
      fitcasCarkButton.style.color = '#fff';
      fitcasCarkButton.style.textAlign = 'center';
      fitcasCarkButton.style.padding = '14px 0';
      fitcasCarkButton.style.marginTop = '10px';
      fitcasCarkButton.style.borderRadius = '10px';
      fitcasCarkButton.style.cursor = 'pointer';
      fitcasCarkButton.style.fontWeight = 'bold';
      fitcasCarkButton.style.fontSize = '16px';

      sidebarLinks.appendChild(fitcasCarkButton);
      console.log('FitCas ÇARK butonu eklendi:', fitcasCarkButton);
    }

    // 3) Promosyonlar butonu (Arkaplan görseli)
    if (!sidebarLinks.querySelector('a[href="/promotions"]')) {
      const promoButton = document.createElement('a');
      promoButton.href = '/tr/promotions';
      promoButton.textContent = 'PROMOSYONLAR';
      
      // Arkaplan resmi ayarları
      promoButton.style.display = 'block';
      promoButton.style.width = '100%';
      promoButton.style.backgroundImage = 'url("https://raw.githubusercontent.com/allwaysapp/fitcascustom/refs/heads/main/promosyonlar.png")';
      promoButton.style.backgroundPosition = 'center';
      promoButton.style.backgroundSize = 'cover';
      promoButton.style.backgroundRepeat = 'no-repeat';
      
      // Diğer stil ayarları
      promoButton.style.color = '#fff';
      promoButton.style.textAlign = 'center';
      promoButton.style.padding = '14px 0';
      promoButton.style.marginTop = '10px';
      promoButton.style.borderRadius = '10px';
      promoButton.style.cursor = 'pointer';
      promoButton.style.fontWeight = 'bold';
      promoButton.style.fontSize = '16px';

      sidebarLinks.appendChild(promoButton);
      console.log('Promosyonlar butonu eklendi:', promoButton);
    }
  }

  // 2) HEADER BUTONLARINI EKLEYEN FONKSİYON
  function addHeaderLinks() {
    const headerActions = document.querySelector('.header__actions');
    if (!headerActions) return;

    // Giriş butonunu bul (hedef referans noktası)
    const signInBtn = headerActions.querySelector('.header__signin');

    // 1) Fit TV linki
    if (!headerActions.querySelector('.header__fitTv')) {
      const fitTvLink = document.createElement('a');
      fitTvLink.className = 'header__fitTv';
      fitTvLink.href = 'https://fitcastv.com/';
      fitTvLink.target = '_blank'; // Yeni sekmede açmak istersen
      // Stil
      fitTvLink.style.display = 'inline-flex';
      fitTvLink.style.alignItems = 'center';
      fitTvLink.style.backgroundImage =
        'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)';
      fitTvLink.style.borderRadius = '8px';
      fitTvLink.style.color = '#fff';
      fitTvLink.style.padding = '8px 12px';
      fitTvLink.style.fontWeight = 'bold';
      fitTvLink.style.textDecoration = 'none';
      fitTvLink.style.cursor = 'pointer';
      // Butonlar arası boşluk eklemek istersen:
      // fitTvLink.style.marginRight = '8px';

      // İçerik: İkon + Metin
      fitTvLink.innerHTML = `
        <img 
          src="https://github.com/allwaysapp/fitcascustom/blob/main/tv.png?raw=true" 
          alt="Fit TV Icon" 
          style="width: 20px; height: auto; margin-right: 8px;"
        />
        <span>Fit TV</span>
      `;

      // Eğer Giriş butonu varsa, ondan önce ekle; yoksa en sona ekle
      if (signInBtn) {
        headerActions.insertBefore(fitTvLink, signInBtn);
      } else {
        headerActions.appendChild(fitTvLink);
      }
      console.log('Fit TV linki eklendi:', fitTvLink);
    }

    // 2) Fit ÇARK linki
    if (!headerActions.querySelector('.header__fitCark')) {
      const fitCarkLink = document.createElement('a');
      fitCarkLink.className = 'header__fitCark';
      fitCarkLink.href = 'https://api.fitcark.com/wheel/';
      fitCarkLink.target = '_blank';
      // Stil
      fitCarkLink.style.display = 'inline-flex';
      fitCarkLink.style.alignItems = 'center';
      fitCarkLink.style.backgroundImage =
        'linear-gradient(to right, #ff0844 0%, #ffb199 100%)';
      fitCarkLink.style.borderRadius = '8px';
      fitCarkLink.style.color = '#fff';
      fitCarkLink.style.padding = '8px 12px';
      fitCarkLink.style.fontWeight = 'bold';
      fitCarkLink.style.textDecoration = 'none';
      fitCarkLink.style.cursor = 'pointer';

      fitCarkLink.innerHTML = `
        <img 
          src="https://github.com/allwaysapp/fitcascustom/blob/main/wheel.png?raw=true" 
          alt="Fit ÇARK Icon" 
          style="width: 20px; height: auto; margin-right: 8px;"
        />
        <span>Fit ÇARK</span>
      `;

      if (signInBtn) {
        headerActions.insertBefore(fitCarkLink, signInBtn);
      } else {
        headerActions.appendChild(fitCarkLink);
      }
      console.log('Fit ÇARK linki eklendi:', fitCarkLink);
    }
  }


const bannersWrapper = document.getElementById('banners-wrapper');

const topGamesWrapper = document.getElementById('top-games-wrapper');

const parent = topGamesWrapper.parentNode;


parent.insertBefore(bannersWrapper, topGamesWrapper);

  // 3) SAYFA YÜKLENİRKEN İLK ÇAĞRI
  addCustomButtons();
  addHeaderLinks();

  // 4) SIDEBAR İÇİN MUTATIONOBSERVER
  const sidebarObserver = new MutationObserver((mutations, obs) => {
    if (document.querySelector('.sidebar__links')) {
      addCustomButtons();
      obs.disconnect(); // Butonlar eklenince observer'ı kapat
    }
  });
  sidebarObserver.observe(document.body, { childList: true, subtree: true });

  // 5) HEADER İÇİN MUTATIONOBSERVER
  const headerObserver = new MutationObserver((mutations, obs) => {
    if (document.querySelector('.header__actions')) {
      addHeaderLinks();
      obs.disconnect(); // Linkler eklenince observer'ı kapat
    }
  });
  headerObserver.observe(document.body, { childList: true, subtree: true });
})();
