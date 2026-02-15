/* =====================================================
   YES, WE DO — Main JavaScript
   GSAP Animations, Canvas Particles, Interactions
   ===================================================== */

(function () {
    'use strict';

    // Wait for GSAP to load
    function init() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            setTimeout(init, 100);
            return;
        }

        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        // ===== HERO ENTRANCE ANIMATION =====
        gsap.set('#heroHeadline', { opacity: 0, y: 30 });
        gsap.set('#heroTagline', { opacity: 0, y: 20 });
        gsap.set('#heroCta', { opacity: 0, y: 20 });
        gsap.set('#heroScroll', { opacity: 0 });

        const heroTl = gsap.timeline({ delay: 0.2 });
        heroTl.to('#heroHeadline', {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out'
        }, 0);
        heroTl.to('#heroTagline', {
            opacity: 1, y: 0, duration: 0.8, ease: 'power2.out'
        }, 0.4);
        heroTl.to('#heroCta', {
            opacity: 1, y: 0, duration: 0.8, ease: 'power2.out'
        }, 0.7);
        heroTl.to('#heroScroll', {
            opacity: 1, duration: 0.5, ease: 'power2.out'
        }, 1.2);

        // ===== CUSTOM CURSOR =====
        const cursorDot = document.getElementById('cursorDot');
        const cursorOutline = document.getElementById('cursorOutline');

        if (window.matchMedia('(pointer: fine)').matches) {
            let curX = 0, curY = 0;
            let outX = 0, outY = 0;

            document.addEventListener('mousemove', (e) => {
                curX = e.clientX;
                curY = e.clientY;
            });

            function updateCursor() {
                cursorDot.style.left = curX + 'px';
                cursorDot.style.top = curY + 'px';

                outX += (curX - outX) * 0.15;
                outY += (curY - outY) * 0.15;
                cursorOutline.style.left = outX + 'px';
                cursorOutline.style.top = outY + 'px';

                requestAnimationFrame(updateCursor);
            }
            updateCursor();

            // Hover effect on interactive elements
            const hoverTargets = document.querySelectorAll('a, button, .service-card, .portfolio-item-inner');
            hoverTargets.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
            });
        }

        // ===== NAVIGATION =====
        const nav = document.getElementById('nav');
        const navToggle = document.getElementById('navToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileLinks = document.querySelectorAll('.mobile-menu-link');

        // Scroll detection for nav
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            if (currentScroll > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        });

        // Mobile toggle
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');

            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Smooth scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: target, offsetY: 80 },
                        ease: 'power3.inOut'
                    });
                }
            });
        });

        // ===== SCROLL ANIMATIONS =====

        // Reveal up animations
        gsap.utils.toArray('.reveal-up').forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
        });

        // Reveal text animations
        gsap.utils.toArray('.reveal-text').forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        });

        // Stagger service cards
        ScrollTrigger.create({
            trigger: '.services-grid',
            start: 'top 80%',
            onEnter: () => {
                gsap.to('.service-card', {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out'
                });
            },
            once: true
        });

        // Process steps stagger
        ScrollTrigger.create({
            trigger: '.process-grid',
            start: 'top 80%',
            onEnter: () => {
                gsap.to('.process-step', {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'power2.out'
                });
            },
            once: true
        });

        // ===== ANIMATED COUNTERS =====
        const statsGrid = document.querySelector('.stats-grid');
        if (statsGrid) {
            // Keep numbers at 0 until visible
            document.querySelectorAll('.stat-number').forEach(stat => {
                stat.textContent = '0';
            });

            ScrollTrigger.create({
                trigger: statsGrid,
                start: 'top bottom',
                onEnter: () => {
                    document.querySelectorAll('.stat-number').forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-count'));
                        gsap.fromTo(stat, { innerText: 0 }, {
                            innerText: target,
                            duration: 2.5,
                            ease: 'power2.out',
                            snap: { innerText: 1 },
                            onUpdate: function () {
                                stat.textContent = Math.round(parseFloat(stat.textContent));
                            }
                        });
                    });
                },
                once: true
            });
        }

        // ===== CTA SECTION ANIMATION =====
        ScrollTrigger.create({
            trigger: '.section-cta',
            start: 'top 70%',
            onEnter: () => {
                gsap.from('.cta-title', {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
                gsap.from('.cta-text', {
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    delay: 0.2
                });
                gsap.from('.cta-answer span', {
                    y: 30,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                    delay: 0.4
                });
                gsap.from('.section-cta .btn', {
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    delay: 0.8
                });
            },
            once: true
        });

        // ===== PARALLAX HERO =====
        gsap.to('#heroContent', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: -80,
            opacity: 0.3,
            ease: 'none'
        });

        // ===== MAGNETIC BUTTONS =====
        if (window.matchMedia('(pointer: fine)').matches) {
            document.querySelectorAll('.magnetic').forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(btn, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                });

                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, {
                        x: 0,
                        y: 0,
                        duration: 0.6,
                        ease: 'elastic.out(1, 0.5)'
                    });
                });
            });
        }

        // ===== TESTIMONIALS SLIDER =====
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        let currentTestimonial = 0;
        let testimonialInterval;

        function showTestimonial(index) {
            testimonialItems.forEach(item => item.classList.remove('active'));
            testimonialDots.forEach(dot => dot.classList.remove('active'));

            testimonialItems[index].classList.add('active');
            testimonialDots[index].classList.add('active');
            currentTestimonial = index;
        }

        function nextTestimonial() {
            const next = (currentTestimonial + 1) % testimonialItems.length;
            showTestimonial(next);
        }

        testimonialDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                showTestimonial(index);
                clearInterval(testimonialInterval);
                testimonialInterval = setInterval(nextTestimonial, 5000);
            });
        });

        testimonialInterval = setInterval(nextTestimonial, 5000);

        // Dynamic testimonial height — measure tallest item
        const testimonialsSlider = document.getElementById('testimonialsSlider');
        function setTestimonialHeight() {
            if (!testimonialsSlider || testimonialItems.length === 0) return;
            var maxH = 0;
            testimonialItems.forEach(function (item) {
                item.style.position = 'relative';
                item.style.opacity = '1';
                item.style.visibility = 'hidden';
                var h = item.offsetHeight;
                if (h > maxH) maxH = h;
                item.style.position = '';
                item.style.opacity = '';
                item.style.visibility = '';
            });
            if (maxH > 0) {
                testimonialsSlider.style.minHeight = maxH + 'px';
            }
        }
        setTestimonialHeight();
        window.addEventListener('resize', setTestimonialHeight);

        // ===== FORM HANDLING =====
        const contactForm = document.getElementById('contactForm');
        const formSuccess = document.getElementById('formSuccess');
        const formSuccessBtn = document.getElementById('formSuccessBtn');

        if (contactForm && formSuccess) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const btn = contactForm.querySelector('.btn-submit span');
                const originalText = btn.textContent;
                btn.textContent = 'A enviar...';

                fetch('https://formspree.io/f/mzdaewqk', {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                }).then((response) => {
                    if (response.ok) {
                        contactForm.reset();
                        contactForm.style.display = 'none';
                        formSuccess.classList.add('active');
                    } else {
                        btn.textContent = 'Erro ao enviar';
                        setTimeout(() => { btn.textContent = originalText; }, 3000);
                    }
                }).catch(() => {
                    btn.textContent = 'Erro ao enviar';
                    setTimeout(() => { btn.textContent = originalText; }, 3000);
                });
            });

            if (formSuccessBtn) {
                formSuccessBtn.addEventListener('click', () => {
                    formSuccess.classList.remove('active');
                    contactForm.style.display = '';
                    contactForm.querySelector('.btn-submit span').textContent = 'Enviar Mensagem';
                });
            }
        }

        // ===== PORTFOLIO: Horizontal scroll gallery =====
        // Desktop: CSS position:sticky + GSAP scrub
        // Mobile: native overflow-x scroll with CSS snap
        let portfolioInitialized = false;
        const isMobilePortfolio = window.matchMedia('(max-width: 768px)');

        function initPortfolioScroll() {
            if (portfolioInitialized) return;
            portfolioInitialized = true;

            const portfolioWrapper = document.getElementById('portfolioScrollWrapper');
            const portfolioTrack = document.getElementById('portfolioScrollTrack');
            const portfolioProgressBar = document.getElementById('portfolioProgressBar');
            const portfolioSection = document.getElementById('portfolio');

            if (!portfolioTrack || !portfolioWrapper || !portfolioSection) return;

            // Mobile: skip GSAP, use native scroll with progress bar
            if (isMobilePortfolio.matches) {
                portfolioSection.style.height = 'auto';
                if (portfolioProgressBar) {
                    gsap.set(portfolioProgressBar, { scaleX: 0 });
                }
                portfolioWrapper.addEventListener('scroll', function () {
                    var maxScroll = portfolioWrapper.scrollWidth - portfolioWrapper.offsetWidth;
                    if (maxScroll > 0 && portfolioProgressBar) {
                        var progress = portfolioWrapper.scrollLeft / maxScroll;
                        gsap.set(portfolioProgressBar, { scaleX: progress });
                    }
                }, { passive: true });
                return;
            }

            // Desktop: GSAP horizontal scroll
            function getScrollDistance() {
                return portfolioTrack.scrollWidth - portfolioWrapper.offsetWidth;
            }

            const dist = getScrollDistance();
            if (dist <= 0) return;

            // Make section tall enough to provide scroll room for the horizontal movement
            portfolioSection.style.height = (window.innerHeight + dist) + 'px';

            gsap.to(portfolioTrack, {
                x: () => -getScrollDistance(),
                ease: 'none',
                scrollTrigger: {
                    trigger: portfolioSection,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                    invalidateOnRefresh: true,
                    onRefresh: () => {
                        // Recalculate section height on resize
                        const d = getScrollDistance();
                        portfolioSection.style.height = (window.innerHeight + d) + 'px';
                    },
                    onUpdate: (self) => {
                        if (portfolioProgressBar) {
                            gsap.set(portfolioProgressBar, { scaleX: self.progress });
                        }
                    }
                }
            });
        }

        // Wait for ALL portfolio images to load before initializing scroll
        const portfolioImages = document.querySelectorAll('#portfolioScrollTrack img');
        if (portfolioImages.length > 0) {
            let loaded = 0;
            const total = portfolioImages.length;
            portfolioImages.forEach(img => {
                if (img.complete) {
                    loaded++;
                    if (loaded === total) initPortfolioScroll();
                } else {
                    img.addEventListener('load', () => {
                        loaded++;
                        if (loaded === total) initPortfolioScroll();
                    });
                    img.addEventListener('error', () => {
                        loaded++;
                        if (loaded === total) initPortfolioScroll();
                    });
                }
            });
            // Fallback: if images take too long, init after 3s anyway
            setTimeout(() => {
                if (loaded < total) initPortfolioScroll();
            }, 3000);
        } else {
            initPortfolioScroll();
        }

        // ===== PORTFOLIO GALLERY PAGE =====
        var portfolioGrid = document.getElementById('portfolioGrid');
        if (portfolioGrid) {
            var pgState = {
                projects: [],
                filtered: [],
                activeCategory: 'Todos',
                lightboxIndex: -1,
                touchStartX: 0,
                touchEndX: 0
            };

            // Fetch portfolio data
            fetch('data/portfolio-data.json')
                .then(function (res) { return res.json(); })
                .then(function (data) {
                    pgState.projects = data.projects;
                    pgState.filtered = data.projects;
                    renderFilters(data.categories);
                    renderGrid(data.projects);
                })
                .catch(function () {
                    portfolioGrid.innerHTML = '<div class="pg-empty">Erro ao carregar os projetos. Tente novamente mais tarde.</div>';
                });

            function renderFilters(categories) {
                var bar = document.getElementById('pgFilterBar');
                if (!bar) return;
                bar.innerHTML = '';
                categories.forEach(function (cat) {
                    var btn = document.createElement('button');
                    btn.className = 'pg-filter-btn' + (cat === 'Todos' ? ' active' : '');
                    btn.textContent = cat;
                    btn.setAttribute('type', 'button');
                    btn.addEventListener('click', function () {
                        pgState.activeCategory = cat;
                        bar.querySelectorAll('.pg-filter-btn').forEach(function (b) { b.classList.remove('active'); });
                        btn.classList.add('active');
                        var filtered = cat === 'Todos' ? pgState.projects : pgState.projects.filter(function (p) { return p.category === cat; });
                        pgState.filtered = filtered;
                        renderGrid(filtered);
                    });
                    bar.appendChild(btn);
                });
            }

            function renderGrid(projects) {
                var countEl = document.getElementById('pgResultsCount');
                if (countEl) {
                    countEl.textContent = projects.length + (projects.length === 1 ? ' projeto' : ' projetos');
                }

                portfolioGrid.innerHTML = '';
                if (projects.length === 0) {
                    portfolioGrid.innerHTML = '<div class="pg-empty">Nenhum projeto encontrado nesta categoria.</div>';
                    return;
                }

                projects.forEach(function (project, index) {
                    var card = document.createElement('article');
                    card.className = 'pg-card';
                    card.setAttribute('role', 'button');
                    card.setAttribute('tabindex', '0');
                    card.setAttribute('aria-label', 'Ver ' + project.title);
                    card.innerHTML =
                        '<div class="pg-card-img">' +
                            '<img src="' + project.image + '" alt="' + project.alt + '" loading="lazy" width="1536" height="1024">' +
                        '</div>' +
                        '<div class="pg-card-info">' +
                            '<span class="pg-card-category">' + project.category + '</span>' +
                            '<h3 class="pg-card-title">' + project.title + '</h3>' +
                            '<p class="pg-card-desc">' + project.description + '</p>' +
                        '</div>';

                    card.addEventListener('click', function () { openLightbox(index); });
                    card.addEventListener('keydown', function (e) {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            openLightbox(index);
                        }
                    });

                    portfolioGrid.appendChild(card);
                });

                // GSAP stagger animation
                gsap.fromTo('.pg-card', {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.06,
                    ease: 'power2.out'
                });
            }

            // Lightbox
            var lightbox = document.getElementById('pgLightbox');
            var lbImg = document.getElementById('pgLightboxImg');
            var lbTitle = document.getElementById('pgLightboxTitle');
            var lbDesc = document.getElementById('pgLightboxDesc');
            var lbCounter = document.getElementById('pgLightboxCounter');

            function openLightbox(index) {
                pgState.lightboxIndex = index;
                updateLightbox();
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closeLightbox() {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
                pgState.lightboxIndex = -1;
            }

            function updateLightbox() {
                var p = pgState.filtered[pgState.lightboxIndex];
                if (!p) return;
                lbImg.src = p.image;
                lbImg.alt = p.alt;
                lbTitle.textContent = p.title;
                lbDesc.textContent = p.description;
                lbCounter.textContent = (pgState.lightboxIndex + 1) + ' / ' + pgState.filtered.length;
            }

            function lightboxNav(dir) {
                var len = pgState.filtered.length;
                if (len === 0) return;
                pgState.lightboxIndex = (pgState.lightboxIndex + dir + len) % len;
                updateLightbox();
            }

            // Lightbox event listeners
            if (lightbox) {
                document.getElementById('pgLightboxClose').addEventListener('click', closeLightbox);
                document.getElementById('pgLightboxPrev').addEventListener('click', function () { lightboxNav(-1); });
                document.getElementById('pgLightboxNext').addEventListener('click', function () { lightboxNav(1); });

                // Close on backdrop click
                lightbox.addEventListener('click', function (e) {
                    if (e.target === lightbox) closeLightbox();
                });

                // Keyboard navigation
                document.addEventListener('keydown', function (e) {
                    if (!lightbox.classList.contains('active')) return;
                    if (e.key === 'Escape') closeLightbox();
                    if (e.key === 'ArrowLeft') lightboxNav(-1);
                    if (e.key === 'ArrowRight') lightboxNav(1);
                });

                // Touch swipe
                lightbox.addEventListener('touchstart', function (e) {
                    pgState.touchStartX = e.changedTouches[0].screenX;
                }, { passive: true });

                lightbox.addEventListener('touchend', function (e) {
                    pgState.touchEndX = e.changedTouches[0].screenX;
                    var diff = pgState.touchStartX - pgState.touchEndX;
                    if (Math.abs(diff) > 50) {
                        lightboxNav(diff > 0 ? 1 : -1);
                    }
                }, { passive: true });
            }
        }

        // ===== MARQUEE: Infinite auto-scroll CSS animation =====
        // No GSAP pin — uses CSS animation for smooth infinite loop
        // (The duplicated content in HTML makes the loop seamless)

        // ===== TEXT SCRAMBLE ON NAV LINKS =====
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        document.querySelectorAll('.nav-link:not(.cta-link)').forEach(link => {
            const originalText = link.textContent;

            link.addEventListener('mouseenter', () => {
                let iterations = 0;
                const interval = setInterval(() => {
                    link.textContent = originalText
                        .split('')
                        .map((char, index) => {
                            if (index < iterations) return originalText[index];
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('');
                    iterations += 1 / 2;
                    if (iterations >= originalText.length) {
                        clearInterval(interval);
                        link.textContent = originalText;
                    }
                }, 30);
            });
        });

    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ===== COOKIE CONSENT (outside GSAP init) =====
    function initCookieBanner() {
        var banner = document.getElementById('cookieBanner');
        var acceptBtn = document.getElementById('cookieAccept');
        var rejectBtn = document.getElementById('cookieReject');
        if (!banner) return;

        var consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            banner.classList.add('active');
        }

        if (acceptBtn) {
            acceptBtn.addEventListener('click', function () {
                localStorage.setItem('cookie_consent', 'accepted');
                banner.classList.remove('active');
            });
        }
        if (rejectBtn) {
            rejectBtn.addEventListener('click', function () {
                localStorage.setItem('cookie_consent', 'rejected');
                banner.classList.remove('active');
            });
        }
    }

    // ===== WHATSAPP FLOATING BUTTON (outside GSAP init) =====
    function initWhatsApp() {
        var toggle = document.getElementById('whatsappToggle');
        var popup = document.getElementById('whatsappPopup');
        var close = document.getElementById('whatsappClose');
        if (!toggle || !popup) return;

        toggle.addEventListener('click', function () {
            popup.classList.toggle('active');
        });

        if (close) {
            close.addEventListener('click', function () {
                popup.classList.remove('active');
            });
        }

        document.addEventListener('click', function (e) {
            var float = document.getElementById('whatsappFloat');
            if (float && !float.contains(e.target)) {
                popup.classList.remove('active');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initCookieBanner();
            initWhatsApp();
        });
    } else {
        initCookieBanner();
        initWhatsApp();
    }
})();
