(function () {
    // Geçiş sırasında özel bölümlerin görünmesini engellemek için flag
    let isNavigating = false;

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
            fitcasTVButton.className = 'sidebar-fitcas-tv';
            sidebarLinks.appendChild(fitcasTVButton);
            console.log('FitCas TV butonu eklendi:', fitcasTVButton);
        }
    
        // 2) FitCas ÇARK butonu
        if (!sidebarLinks.querySelector('a[href="https://api.fitcark.com/wheel/"]')) {
            const fitcasCarkButton = document.createElement('a');
            fitcasCarkButton.href = 'https://api.fitcark.com/wheel/';
            fitcasCarkButton.textContent = 'FITCAS ÇARK';
            fitcasCarkButton.className = 'sidebar-fitcas-cark';
            sidebarLinks.appendChild(fitcasCarkButton);
            console.log('FitCas ÇARK butonu eklendi:', fitcasCarkButton);
        }
    
        // 3) Promosyonlar butonu
        if (!sidebarLinks.querySelector('a[href="/tr/promotions"]')) {
            const promoButton = document.createElement('a');
            promoButton.href = '/tr/promotions';
            promoButton.textContent = 'PROMOSYONLAR';
            promoButton.className = 'sidebar-promosyonlar';
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
            fitTvLink.innerHTML = `
                <img 
                    src="https://github.com/allwaysapp/fitcascustom/blob/main/tv.png?raw=true" 
                    alt="Fit TV Icon"
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
            fitCarkLink.innerHTML = `
                <img 
                    src="https://github.com/allwaysapp/fitcascustom/blob/main/wheel.png?raw=true" 
                    alt="Fit ÇARK Icon"
                />
                <span>Fit ÇARK</span>`;
            if (signInBtn) headerActions.insertBefore(fitCarkLink, signInBtn);
            else headerActions.appendChild(fitCarkLink);
            console.log('Fit ÇARK linki eklendi:', fitCarkLink);
        }
    }

    // 3) CUSTOM SECTIONS'İ EKLEYEN FONKSİYON
    function createCustomSections() {
        // Navigasyon sırasında veya anasayfa değilse ekleme
        if (isNavigating || !isHomePage()) {
            removeCustomSections();
            return;
        }

        const parent = document.querySelector('#top-games-wrapper')?.parentNode;
        if (!parent) return;

        // 1) Custom-section1 ekleme
        if (!document.querySelector('.custom-section1')) {
            const sec1 = document.createElement('div');
            sec1.className = 'container custom-section1 section';
            sec1.innerHTML = `<img src="https://github.com/allwaysapp/fitcascustom/blob/main/homepage-banner.gif?raw=true" alt="">`;
            parent.insertBefore(sec1, document.getElementById('top-games-wrapper'));
        }

        // 2) Custom-section2 ekleme
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
    }

    // Custom section'ları kaldıran fonksiyon
    function removeCustomSections() {
        const sections = document.querySelectorAll('.custom-section1, .custom-section2');
        sections.forEach(section => {
            if (section && section.parentNode) {
                section.parentNode.removeChild(section);
            }
        });
    }

    // 4) SIRALAMA FONKSİYONU
    function reorderSections() {
        // Navigasyon sırasında veya anasayfa değilse sıralamayı değiştirme
        if (isNavigating || !isHomePage()) return;

        const parent = document.querySelector('#top-games-wrapper')?.parentNode;
        const banners = document.getElementById('banners-wrapper');
        const sec1 = document.querySelector('.custom-section1');
        const sec2 = document.querySelector('.custom-section2');
        const miniSlider = document.getElementById('mini-slider-wrapper');
        const topGames = document.getElementById('top-games-wrapper');
        
        if (parent && banners && sec1 && sec2 && topGames) {
            // Sıralama: banners -> sec1 -> sec2 -> miniSlider -> topGames
            parent.insertBefore(banners, topGames);
            parent.insertBefore(sec1, topGames);
            parent.insertBefore(sec2, topGames);
            
            // Mini slider'ı custom-section2'nin altına ekle
            if (miniSlider) {
                parent.insertBefore(miniSlider, topGames);
            }
        }
    }

    // 5) SAYFA İÇERİĞİNİ GÜNCELLEYEN ANA FONKSİYON
    function initializePage() {
        const currentIsHomePage = isHomePage();
        
        // Butonlar ve linkler her sayfada gösterilir
        addCustomButtons();
        addHeaderLinks();
        
        // Custom sections sadece anasayfada gösterilir
        if (currentIsHomePage) {
            createCustomSections();
            reorderSections();
        } else {
            removeCustomSections();
        }

        // Title değiştirme
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
    }

    // 6) LİNK İNTERCEPTORS
    function setupLinkInterceptors() {
        document.body.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;
            
            if (!link.target || link.target === '_self') {
                const href = link.getAttribute('href');
                if (href && href.startsWith('/')) {
                    isNavigating = true;
                    removeCustomSections();
                    
                    setTimeout(() => {
                        isNavigating = false;
                        initializePage();
                    }, 500);
                }
            }
        });
    }

    // 7) BAŞLANGIÇ SIRALAMASI
    function setupInitialOrder() {
        if (isHomePage()) {
            const bannersWrapper = document.getElementById('banners-wrapper');
            const topGamesWrapper = document.getElementById('top-games-wrapper');
            if (bannersWrapper && topGamesWrapper && topGamesWrapper.parentNode) {
                topGamesWrapper.parentNode.insertBefore(bannersWrapper, topGamesWrapper);
            }
        }
    }

    // 8) ANA İNİTİALİZE FONKSİYONU
    function initialize() {
        setupInitialOrder();
        initializePage();
        setupLinkInterceptors();
    }

    // 9) URL DEĞİŞİKLİKLERİNİ İZLEME
    function handleUrlChange() {
        isNavigating = true;
        removeCustomSections();
        
        setTimeout(() => {
            isNavigating = false;
            initializePage();
        }, 500);
    }

    // Event listeners
    window.addEventListener('popstate', handleUrlChange);
    
    // SPA route değişikliklerini yakalamak için history API override
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

    // Promosyonlar linki için özel navigation
    document.body.addEventListener('click', function(e) {
        const promoLink = e.target.closest('a[href="/tr/promotions"]');
        if (!promoLink) return;
        e.preventDefault();
        
        isNavigating = true;
        removeCustomSections();
        
        const path = promoLink.getAttribute('href');
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
    });

    // 10) OBSERVER'LAR
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
    
    const contentObserver = new MutationObserver((mutations, observer) => {
        if (isNavigating) return;
        
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
    
    // 11) INVESTMENT POPUP SETUP
    (function () {
        function setupInvestmentPopup() {
            const trigger = document.querySelector('.custom-section2-item img[src*="nasil-yatirim-yapilir"]');
            if (!trigger) return;
            if (document.getElementById('investmentModal')) return;

            const modal = document.createElement('div');
            modal.id = 'investmentModal';
            modal.className = 'investment-modal';
            modal.style.display = 'none';
            modal.innerHTML = `
                <div class="investment-modal-content">
                    <span class="investment-close">&times;</span>
                    <div class="investment-tabs">
                        ${createTabButtons()}
                    </div>
                    <div class="investment-tab-content">
                        ${createTabContents()}
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            // Tab button event listeners
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

            // Close button event listener
            document.querySelector('.investment-close').addEventListener('click', function () {
                modal.style.display = 'none';
                modal.querySelectorAll('iframe').forEach(iframe => {
                    iframe.src = iframe.src;
                });
            });

            // Trigger click event listener
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
            return tabs.map((tab, i) =>
                `<button class="tab-btn ${i === 0 ? 'active' : ''}" data-tab="${tab.key}">${tab.label}</button>`
            ).join('');
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
                <div class="tab-content ${i === 0 ? 'active' : ''}" id="tab-${key}">
                    <div class="video-wrapper">
                        <iframe src="https://player.vimeo.com/video/${video}" frameborder="0" allowfullscreen allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"></iframe>
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

        waitForTrigger();
    })();

    // İlk çalıştırma
    initialize();
    
})();
