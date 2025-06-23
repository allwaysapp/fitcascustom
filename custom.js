(function () {
    // Geçiş sırasında özel bölümlerin görünmesini engellemek için flag
    let isNavigating = false;

    // Observer'ları saklamak için
    const observers = [];

    // Anasayfa olup olmadığını kontrol eden fonksiyon
    function isHomePage() {
        const url = window.location.pathname;
        return url === '/' || 
               url === '/tr/' || 
               url === '/tr' || 
               url === '/en/' || 
               url === '/en';
    }

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
        }
    }

    // --- CUSTOM SECTIONS'İ OLARAK EKLEYEN FONKSİYON ---
    function createCustomSections() {
        // Navigasyon sırasında veya anasayfa değilse ekleme
        if (isNavigating || !isHomePage()) {
            removeCustomSections();
            return;
        }

        try {
            const parent = document.querySelector('#top-games-wrapper')?.parentNode;
            if (!parent) return;

            // 1) Eğer daha önce eklenmemişse custom-section1
            if (!document.querySelector('.custom-section1')) {
                const sec1 = document.createElement('div');
                sec1.className = 'container custom-section1 section';
                sec1.innerHTML = `<img src="https://github.com/allwaysapp/fitcascustom/blob/main/homepage-banner.gif?raw=true" alt="">`;
                parent.insertBefore(sec1, document.getElementById('top-games-wrapper'));
            }

            // 2) Eğer daha önce eklenmemişse custom-section2
            if (!document.querySelector('.custom-section2')) {
                const sec2 = document.createElement('div');
                sec2.className = 'container custom-section2 section';
                sec2.innerHTML = `
                    <div class="custom-section2-item">
                        <img src="https://github.com/allwaysapp/fitcascustom/blob/main/nasil-yatirim-yapilir.png?raw=true" alt="">
                    </div>
                    <a class="custom-section2-item" href="/blog">
                        <img src="https://github.com/allwaysapp/fitcascustom/blob/main/blog-yazilarini-kesfet.png?raw=true" alt="">
                    </a>
                    <a class="custom-section2-item" href="/promotions">
                        <img src="https://github.com/allwaysapp/fitcascustom/blob/main/bonuslara-goz-at.png?raw=true" alt="">
                    </a>
                    <div class="custom-section2-item">
                        <img src="https://github.com/allwaysapp/fitcascustom/blob/main/buyuk-kazanclar.png?raw=true" alt="">
                    </div>`;
                parent.insertBefore(sec2, document.getElementById('top-games-wrapper'));
            }
        } catch (error) {
            console.error('Custom sections oluşturulamadı:', error);
        }
    }

    // Custom section'ları kaldıran fonksiyon
    function removeCustomSections() {
        const sections = document.querySelectorAll('.custom-section1, .custom-section2');
        sections.forEach(section => {
            if (section?.parentNode) {
                section.remove();
            }
        });
    }

    // --- SIRALAMA ---  
    function reorderSections() {
        // Navigasyon sırasında veya anasayfa değilse sıralamayı değiştirme
        if (isNavigating || !isHomePage()) return;

        const parent = document.querySelector('#top-games-wrapper')?.parentNode;
        const banners = document.getElementById('banners-wrapper');
        const sec1 = document.querySelector('.custom-section1');
        const sec2 = document.querySelector('.custom-section2');
        const topGames = document.getElementById('top-games-wrapper');
        
        if (parent && banners && sec1 && sec2 && topGames) {
            parent.insertBefore(banners, topGames);
            parent.insertBefore(sec1, topGames);
            parent.insertBefore(sec2, topGames);
        }
    }

    // --- YATIRIM POPUP FONKSİYONLARI ---
    function setupInvestmentPopup() {
        const trigger = document.querySelector('.custom-section2-item img[src*="nasil-yatirim-yapilir"]');
        if (!trigger) return;
        if (document.getElementById('investmentModal')) return;

        const modal = document.createElement('div');
        modal.id = 'investmentModal';
        modal.className = 'investment-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;
        
        modal.innerHTML = `
            <div class="investment-modal-content" style="
                background: white;
                border-radius: 10px;
                padding: 20px;
                max-width: 90%;
                max-height: 90%;
                overflow-y: auto;
                position: relative;
            ">
                <span class="investment-close" style="
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    font-size: 28px;
                    font-weight: bold;
                    cursor: pointer;
                    color: #aaa;
                ">&times;</span>
                <div class="investment-tabs" style="
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 20px;
                ">
                    ${createTabButtons()}
                </div>
                <div class="investment-tab-content">
                    ${createTabContents()}
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Tab butonları için event listener'lar
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const tabName = btn.dataset.tab;
                document.querySelectorAll('.tab-content').forEach(c => {
                    c.classList.remove('active');
                    const iframe = c.querySelector('iframe');
                    if (iframe) iframe.src = iframe.src;
                });
                document.getElementById('tab-' + tabName).classList.add('active');
            });
        });

        // Kapatma butonu
        document.querySelector('.investment-close').addEventListener('click', function () {
            modal.style.display = 'none';
            modal.querySelectorAll('iframe').forEach(iframe => {
                iframe.src = iframe.src;
            });
        });

        // Trigger'a click event ekle
        trigger.style.cursor = 'pointer';
        trigger.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    }

    function createTabButtons() {
        const tabs = [
            { key: 'havale', label: 'Anında Havale' },
            { key: 'hizli', label: 'Hızlı Havale' },
            { key: 'papara', label: 'Anında Papara' },
            { key: 'poppy', label: 'Anında Poppy' },
            { key: 'parola', label: 'Anında Parola' },
            { key: 'mefete', label: 'Anında Mefete' }
        ];
        return tabs.map((tab, i) => `
            <button class="tab-btn ${i === 0 ? 'active' : ''}" data-tab="${tab.key}" style="
                padding: 10px 15px;
                border: none;
                background: ${i === 0 ? '#007bff' : '#f8f9fa'};
                color: ${i === 0 ? 'white' : '#333'};
                border-radius: 5px;
                cursor: pointer;
                font-weight: bold;
            ">${tab.label}</button>
        `).join('');
    }

    function createTabContents() {
        const contents = {
            havale: '1095573512?h=aecb26f437',
            hizli: '1095573418?h=5b4b499045',
            papara: '1095573326?h=48c4f0b531',
            poppy: '1095573257?h=cf80f9abc5',
            parola: '1095573163?h=ffe8b76574',
            mefete: '1095573079?h=bc40448e04'
        };
        return Object.entries(contents).map(([key, video], i) => `
            <div class="tab-content ${i === 0 ? 'active' : ''}" id="tab-${key}" style="
                display: ${i === 0 ? 'block' : 'none'};
            ">
                <div class="video-wrapper" style="
                    position: relative;
                    padding-bottom: 56.25%;
                    height: 0;
                    overflow: hidden;
                ">
                    <iframe src="https://player.vimeo.com/video/${video}" 
                        frameborder="0" 
                        allowfullscreen 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        style="
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                        "></iframe>
                </div>
            </div>
        `).join('');
    }

    function waitForTrigger(maxRetries = 20, delay = 500) {
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            const trigger = document.querySelector('.custom-section2-item img[src*="nasil-yatirim-yapilir"]');
            if (trigger) {
                clearInterval(interval);
                setupInvestmentPopup();
            } else if (attempts >= maxRetries) {
                clearInterval(interval);
            }
        }, delay);
    }

    // --- Sayfa içeriğini güncelleyen ana fonksiyon --- 
    function initializePage() {
        try {
            // URL kontrolü
            const currentIsHomePage = isHomePage();
            
            // Butonlar ve linkler her sayfada gösterilir
            addCustomButtons();
            addHeaderLinks();
            
            // Custom sections sadece anasayfada gösterilir
            if (currentIsHomePage) {
                createCustomSections();
                reorderSections();
                
                // Yatırım popup'ı başlat
                setTimeout(() => {
                    waitForTrigger();
                }, 1000);
            } else {
                removeCustomSections();
            }

            // Başlık değiştirme
            setTimeout(() => {
                const titleEl = document.querySelector('#popular-games-wrapper h2.section__title');
                if (titleEl) {
                    for (let i = 0; i < titleEl.childNodes.length; i++) {
                        const node = titleEl.childNodes[i];
                        if (node.nodeType === Node.TEXT_NODE) {
                            node.textContent = 'BELL LINK';
                            return;
                        }
                    }
                    titleEl.appendChild(document.createTextNode('BELL LINK'));
                }
            }, 1000);

        } catch (error) {
            console.error('Sayfa başlatılırken hata:', error);
        }
    }

    // İç sayfa linklerine tıklandığında önleyici işlem
    function setupLinkInterceptors() {
        document.body.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;
            
            // Promotions link özel işlemi
            if (link.getAttribute('href') === '/tr/promotions') {
                e.preventDefault();
                isNavigating = true;
                removeCustomSections();
                const path = link.getAttribute('href');
                window.history.pushState({}, '', path);
                window.dispatchEvent(new PopStateEvent('popstate'));
                return;
            }
            
            // Link mevcut sayfada açılacaksa (target="_blank" değilse)
            if (!link.target || link.target === '_self') {
                const href = link.getAttribute('href');
                // Eğer site içi link ise
                if (href && href.startsWith('/')) {
                    // Navigasyon başlıyor, flag'i set et
                    isNavigating = true;
                    // Custom section'ları hemen kaldır
                    removeCustomSections();
                    
                    // Navigasyon tamamlandıktan sonra flag'i resetle
                    setTimeout(() => {
                        isNavigating = false;
                        initializePage();
                    }, 500);
                }
            }
        });
    }

    // BANNER ve ORDER DÜZENİ
    function setupInitialOrder() {
        if (isHomePage()) {
            const bannersWrapper = document.getElementById('banners-wrapper');
            const topGamesWrapper = document.getElementById('top-games-wrapper');
            if (bannersWrapper && topGamesWrapper && topGamesWrapper.parentNode) {
                topGamesWrapper.parentNode.insertBefore(bannersWrapper, topGamesWrapper);
            }
        }
    }

    // Observer'ları temizleme fonksiyonu
    function cleanupObservers() {
        observers.forEach(observer => {
            if (observer && typeof observer.disconnect === 'function') {
                observer.disconnect();
            }
        });
        observers.length = 0;
    }

    // URL değişikliklerini izle (SPA'lar için)
    function handleUrlChange() {
        // Navigasyon başlıyor, flag'i set et
        isNavigating = true;
        // Custom section'ları hemen kaldır
        removeCustomSections();
        
        // URL değişikliği tamamlandıktan sonra initialize et
        setTimeout(() => {
            isNavigating = false;
            initializePage();
        }, 500);
    }

    // İlk sayfa yüklenmesi
    function initialize() {
        try {
            setupInitialOrder();
            initializePage();
            setupLinkInterceptors();
            setupObservers();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    // Observer'ları kurma
    function setupObservers() {
        // Sidebar observer  
        const sidebarObserver = new MutationObserver((mutations, obs) => {
            if (document.querySelector('.sidebar__links')) {
                addCustomButtons();
                obs.disconnect();
            }
        });
        sidebarObserver.observe(document.body, { childList: true, subtree: true });
        observers.push(sidebarObserver);
    
        // Header observer
        const headerObserver = new MutationObserver((mutations, obs) => {
            if (document.querySelector('.header__actions')) {
                addHeaderLinks();
                obs.disconnect();
            }
        });
        headerObserver.observe(document.body, { childList: true, subtree: true });
        observers.push(headerObserver);
        
        // Genel içerik değişikliklerini izleyen observer
        const contentObserver = new MutationObserver((mutations, observer) => {
            // Navigasyon sırasında observer'ı dikkate alma
            if (isNavigating) return;
            
            // Önemli DOM değişikliklerinde sayfayı tekrar kontrol et
            const hasImportantChanges = mutations.some(mutation => {
                return Array.from(mutation.addedNodes).some(node => 
                    node.nodeType === 1 && 
                    (node.id === 'top-games-wrapper' || 
                     (node.querySelector && node.querySelector('#top-games-wrapper')))
                );
            });

            if (hasImportantChanges) {
                initializePage();
            }
        });
        contentObserver.observe(document.body, { childList: true, subtree: true });
        observers.push(contentObserver);
    }

    // Event listener'lar
    window.addEventListener('popstate', handleUrlChange);
    
    // SPA route değişikliklerini yakalamak için history API'larını override et
    const originalPushState = history.pushState;
    history.pushState = function() {
        originalPushState.apply(this, arguments);
        handleUrlChange();
    };
    
    const originalReplaceState = history.replaceState;
    history.replaceState = function() {
        originalReplaceState.apply(this, arguments);
        handleUrlChange();
    };

    // Sayfa kapatılırken cleanup
    window.addEventListener('beforeunload', cleanupObservers);

    // Sayfa yüklendiğinde ilk çalıştırma
    initialize();

})();
