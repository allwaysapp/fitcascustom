(function() {
  // Butonları ekleyen fonksiyon
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
      console.log("FitCas TV butonu eklendi:", fitcasTVButton);
    }

    // 2) FitCas ÇARK butonu
    if (!sidebarLinks.querySelector('a[href="https://api.fitcark.com/wheel/"]')) {
      const fitcasCarkButton = document.createElement('a');
      fitcasCarkButton.href = 'https://api.fitcark.com/wheel/';
      fitcasCarkButton.textContent = 'FITCAS ÇARK';

      // Stil ayarları (Promosyonlar butonu ile benzer, farklı renk tercih edebilirsiniz)
      fitcasCarkButton.style.display = 'block';
      fitcasCarkButton.style.width = '100%';
      fitcasCarkButton.style.backgroundColor = '#28a745';  // Yeşil renk
      fitcasCarkButton.style.color = '#fff';
      fitcasCarkButton.style.textAlign = 'center';
      fitcasCarkButton.style.padding = '14px 0';
      fitcasCarkButton.style.marginTop = '10px';
      fitcasCarkButton.style.borderRadius = '10px';
      fitcasCarkButton.style.cursor = 'pointer';
      fitcasCarkButton.style.fontWeight = 'bold';
      fitcasCarkButton.style.fontSize = '16px';

      sidebarLinks.appendChild(fitcasCarkButton);
      console.log("FitCas ÇARK butonu eklendi:", fitcasCarkButton);
    }

    // 3) Promosyonlar butonu
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
  }

  // Sayfa yüklenirken butonları eklemeyi deneyelim
  addCustomButtons();

  // DOM’da değişiklik olduğunda tekrar kontrol etmek için MutationObserver kullanalım
  const observer = new MutationObserver((mutations, obs) => {
    if (document.querySelector('.sidebar__links')) {
      addCustomButtons();
      obs.disconnect(); // Butonlar eklendiyse observer'ı kapatıyoruz
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
