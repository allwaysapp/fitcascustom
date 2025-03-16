(function() {
  // Butonları ekleyen fonksiyon
  function addCustomButtons() {
    const sidebarLinks = document.querySelector('.sidebar__links');
    if (!sidebarLinks) return;

    // 1) Promosyonlar butonu
    if (!sidebarLinks.querySelector('a[href="/tr/promotions"]')) {
      const promoButton = document.createElement('a');
      promoButton.href = '/tr/promotions';
      promoButton.textContent = 'PROMOSYONLAR';
      
      // Stil ayarları
      promoButton.style.display = 'block';
      promoButton.style.width = '100%';
      promoButton.style.backgroundColor = '#007BFF';
      promoButton.style.color = '#fff';
      promoButton.style.textAlign = 'center';
      promoButton.style.padding = '14px 0';
      promoButton.style.marginTop = '10px';
      promoButton.style.borderRadius = '10px';
      promoButton.style.cursor = 'pointer';
      promoButton.style.fontWeight = 'bold';
      promoButton.style.fontSize = '16px';

      sidebarLinks.appendChild(promoButton);
      console.log("Promosyonlar butonu eklendi:", promoButton);
    }

    // 2) FitCas TV butonu
    if (!sidebarLinks.querySelector('a[href="https://fitcastv.com/"]')) {
      const fitcasButton = document.createElement('a');
      fitcasButton.href = 'https://fitcastv.com/';
      fitcasButton.textContent = 'FITCAS TV';

      // Stil ayarları (Promosyonlar ile aynı, isterseniz renk vb. değiştirebilirsiniz)
      fitcasButton.style.display = 'block';
      fitcasButton.style.width = '100%';
      fitcasButton.style.backgroundColor = '#ffc107';
      fitcasButton.style.color = '#fff';
      fitcasButton.style.textAlign = 'center';
      fitcasButton.style.padding = '14px 0';
      fitcasButton.style.marginTop = '10px';
      fitcasButton.style.borderRadius = '10px';
      fitcasButton.style.cursor = 'pointer';
      fitcasButton.style.fontWeight = 'bold';
      fitcasButton.style.fontSize = '16px';

      sidebarLinks.appendChild(fitcasButton);
      console.log("FitCas TV butonu eklendi:", fitcasButton);
    }
  }

  // Sayfa yüklenirken butonları eklemeyi deneyelim
  addCustomButtons();

  // DOM’da değişiklik olduğunda tekrar kontrol etmek için MutationObserver
  const observer = new MutationObserver((mutations, obs) => {
    if (document.querySelector('.sidebar__links')) {
      addCustomButtons();
      obs.disconnect(); // Butonlar eklenmişse observer'ı kapatıyoruz
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
