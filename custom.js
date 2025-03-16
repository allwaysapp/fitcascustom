(function() {
  // Promosyon butonunu ekleyen fonksiyon
  function addPromoButton() {
    const sidebarLinks = document.querySelector('.sidebar__links');
    if (!sidebarLinks) return;
    
    // Eğer buton zaten eklenmişse, tekrardan eklemeyelim
    if (sidebarLinks.querySelector('a[href="/tr/promotions"]')) return;
    
    const promoButton = document.createElement('a');
    promoButton.href = '/tr/promotions';
    promoButton.textContent = 'Promosyonlar';
    
    // Stil ayarları
    promoButton.style.display = 'block';
    promoButton.style.width = '100%';
    promoButton.style.backgroundColor = '#007BFF';
    promoButton.style.color = '#fff';
    promoButton.style.textAlign = 'center';
    promoButton.style.padding = '10px 0';
    promoButton.style.marginTop = '10px';
    promoButton.style.borderRadius = '4px';
    promoButton.style.cursor = 'pointer';
    promoButton.style.fontWeight = 'bold';
    promoButton.style.fontSize = '14px';
    
    sidebarLinks.appendChild(promoButton);
    console.log("Promosyonlar butonu eklendi:", promoButton);
  }
  
  // Sayfa yüklenirken çalıştırmayı deneyelim
  addPromoButton();
  
  // DOM’da değişiklik olduğunda kontrol etmek için MutationObserver kullanalım
  const observer = new MutationObserver((mutations, obs) => {
    if (document.querySelector('.sidebar__links')) {
      addPromoButton();
      obs.disconnect(); // Buton eklendiyse observer'ı kapatıyoruz
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
