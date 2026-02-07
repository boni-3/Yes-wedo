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

        // ===== PRELOADER =====
        const preloader = document.getElementById('preloader');
        const preloaderLetters = document.querySelectorAll('.preloader-letter');
        const preloaderBarFill = document.querySelector('.preloader-bar-fill');

        const preloaderTl = gsap.timeline({
            onComplete: () => {
                gsap.to(preloader, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: 'power3.inOut',
                    onComplete: () => {
                        preloader.style.display = 'none';
                        document.body.style.overflow = '';
                        startHeroAnimation();
                    }
                });
            }
        });

        document.body.style.overflow = 'hidden';

        preloaderTl
            .to(preloaderBarFill, { width: '100%', duration: 1.5, ease: 'power2.inOut' })
            .to(preloaderLetters, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.12,
                ease: 'back.out(1.7)'
            }, 0.3);

        // ===== HERO VIDEO ANIMATION =====
        // Set initial hidden state via GSAP (more reliable than CSS)
        gsap.set('#heroHeadline', { opacity: 0, y: 30 });
        gsap.set('#heroTagline', { opacity: 0, y: 20 });
        gsap.set('#heroCta', { opacity: 0, y: 20 });
        gsap.set('#heroScroll', { opacity: 0 });

        function startHeroAnimation() {
            const tl = gsap.timeline();

            // Headline
            tl.to('#heroHeadline', {
                opacity: 1, y: 0, duration: 1, ease: 'power3.out'
            }, 0.1);

            // Tagline
            tl.to('#heroTagline', {
                opacity: 1, y: 0, duration: 0.8, ease: 'power2.out'
            }, 0.5);

            // CTA buttons
            tl.to('#heroCta', {
                opacity: 1, y: 0, duration: 0.8, ease: 'power2.out'
            }, 0.8);

            // Scroll indicator
            tl.to('#heroScroll', {
                opacity: 1, duration: 0.5, ease: 'power2.out'
            }, 1.3);
        }

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

        // Stagger portfolio items
        ScrollTrigger.create({
            trigger: '.portfolio-grid',
            start: 'top 80%',
            onEnter: () => {
                gsap.to('.portfolio-item', {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.12,
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
            ScrollTrigger.create({
                trigger: statsGrid,
                start: 'top 80%',
                onEnter: () => {
                    document.querySelectorAll('.stat-number').forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-count'));
                        gsap.fromTo(stat, { innerText: 0 }, {
                            innerText: target,
                            duration: 2,
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

        // ===== FORM HANDLING =====
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const btn = contactForm.querySelector('.btn-submit span');
                const originalText = btn.textContent;

                btn.textContent = 'A enviar...';

                // Simulate form submission
                setTimeout(() => {
                    btn.textContent = 'Mensagem enviada!';
                    contactForm.reset();

                    setTimeout(() => {
                        btn.textContent = originalText;
                    }, 3000);
                }, 1500);
            });
        }

        // ===== PORTFOLIO: Horizontal scroll gallery =====
        // Must wait for portfolio images to load so scrollWidth is correct
        function initPortfolioScroll() {
            const portfolioWrapper = document.getElementById('portfolioScrollWrapper');
            const portfolioTrack = document.getElementById('portfolioScrollTrack');
            const portfolioProgressBar = document.getElementById('portfolioProgressBar');
            const portfolioSection = document.getElementById('portfolio');

            if (!portfolioTrack || !portfolioWrapper || !portfolioSection) return;

            function getScrollDistance() {
                return portfolioTrack.scrollWidth - portfolioWrapper.offsetWidth;
            }

            const dist = getScrollDistance();
            if (dist <= 0) return;

            gsap.to(portfolioTrack, {
                x: () => -getScrollDistance(),
                ease: 'none',
                scrollTrigger: {
                    trigger: '#portfolio',
                    start: 'top top',
                    end: () => '+=' + getScrollDistance(),
                    pin: true,
                    pinSpacing: true,
                    scrub: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
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
})();
