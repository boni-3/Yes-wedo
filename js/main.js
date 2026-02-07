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

        // ===== HERO CANVAS PARTICLES =====
        const canvas = document.getElementById('heroCanvas');
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animFrameId;
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
                // Brand colors: orange, blue, magenta
                const colorRoll = Math.random();
                if (colorRoll > 0.6) this.colorType = 'orange';
                else if (colorRoll > 0.3) this.colorType = 'blue';
                else this.colorType = 'magenta';
            }

            update() {
                // Mouse attraction
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) {
                    this.x += dx * 0.002;
                    this.y += dy * 0.002;
                }

                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                if (this.colorType === 'orange') {
                    ctx.fillStyle = `rgba(240, 67, 32, ${this.opacity})`;
                } else if (this.colorType === 'blue') {
                    ctx.fillStyle = `rgba(82, 155, 202, ${this.opacity})`;
                } else {
                    ctx.fillStyle = `rgba(186, 4, 106, ${this.opacity * 0.7})`;
                }
                ctx.fill();
            }
        }

        // Create particles
        const particleCount = Math.min(120, Math.floor(window.innerWidth / 15));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const opacity = (1 - dist / 150) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        if (particles[i].colorType === 'orange' || particles[j].colorType === 'orange') {
                            ctx.strokeStyle = `rgba(240, 67, 32, ${opacity})`;
                        } else if (particles[i].colorType === 'blue' || particles[j].colorType === 'blue') {
                            ctx.strokeStyle = `rgba(82, 155, 202, ${opacity})`;
                        } else {
                            ctx.strokeStyle = `rgba(186, 4, 106, ${opacity * 0.6})`;
                        }
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            drawConnections();
            animFrameId = requestAnimationFrame(animateCanvas);
        }

        animateCanvas();

        // Track mouse for canvas
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // ===== HERO ANIMATION =====
        function startHeroAnimation() {
            const tl = gsap.timeline();

            // Flash service images
            const heroImages = document.querySelectorAll('.hero-image-item');
            if (window.innerWidth > 1024) {
                heroImages.forEach((img, i) => {
                    tl.to(img, {
                        opacity: 0.25,
                        duration: 0.15,
                        ease: 'power2.in'
                    }, 0.3 + i * 0.15)
                    .to(img, {
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power2.out'
                    }, 0.55 + i * 0.15);
                });

                // Keep some images visible subtly
                tl.to([heroImages[0], heroImages[3]], {
                    opacity: 0.12,
                    duration: 0.6,
                    ease: 'power2.out'
                }, 1.5);
            }

            // === VINYL TRANSFER PEEL ANIMATION ===
            const vinylTransfer = document.getElementById('vinylTransfer');
            const vinylWall = document.getElementById('vinylWall');
            const vinylShine = document.getElementById('vinylShine');

            // Step 1: Show the logo with transfer paper on top (logo dimmed)
            tl.to('#heroLogo', {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out'
            }, 1);

            // Step 2: Squeegee press
            tl.to('#vinylWrapper', {
                scale: 1.01,
                duration: 0.3,
                ease: 'power2.in'
            }, 2)
            .to('#vinylWrapper', {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            }, 2.3);

            // Step 3: Peel the transfer from top-left to bottom-right
            tl.call(() => {
                if (vinylTransfer) vinylTransfer.classList.add('peeling');
            }, null, 2.7);

            // Reveal the full-color logo as transfer peels
            tl.to('.hero-logo-img', {
                opacity: 1,
                duration: 2,
                ease: 'power2.in'
            }, 3);

            // Mark as fully revealed
            tl.call(() => {
                if (vinylWall) vinylWall.classList.add('revealed');
            }, null, 5);

            // Step 4: Shine flash
            tl.call(() => {
                if (vinylShine) vinylShine.classList.add('active');
            }, null, 5.2);

            // Glow pulse
            tl.to('.hero-logo-img', {
                filter: 'drop-shadow(0 4px 60px rgba(240, 67, 32, 0.5))',
                duration: 0.4,
                ease: 'power2.out'
            }, 5.2)
            .to('.hero-logo-img', {
                filter: 'drop-shadow(0 4px 40px rgba(240, 67, 32, 0.3))',
                duration: 0.8,
                ease: 'power2.out'
            }, 5.6);

            // Particle burst
            tl.call(() => {
                createParticleBurst();
            }, null, 5.3);

            // Subtitle
            tl.to('#heroSubtitle', {
                opacity: 1, y: 0, duration: 0.6, ease: 'power2.out'
            }, 5.6);

            // CTA
            tl.to('#heroCta', {
                opacity: 1, y: 0, duration: 0.6, ease: 'power2.out'
            }, 5.9);

            // Scroll indicator
            tl.to('#heroScroll', {
                opacity: 1, duration: 0.5, ease: 'power2.out'
            }, 6.2);
        }

        // Particle burst effect
        function createParticleBurst() {
            const container = document.getElementById('heroParticles');
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const burstCount = 30;

            for (let i = 0; i < burstCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = centerX + 'px';
                particle.style.top = centerY + 'px';
                particle.style.width = (Math.random() * 6 + 2) + 'px';
                particle.style.height = particle.style.width;
                container.appendChild(particle);

                const angle = (Math.PI * 2 * i) / burstCount;
                const distance = Math.random() * 300 + 100;
                const endX = Math.cos(angle) * distance;
                const endY = Math.sin(angle) * distance;

                gsap.to(particle, {
                    x: endX,
                    y: endY,
                    opacity: 1,
                    duration: 0.1,
                    ease: 'power2.out',
                    onComplete: () => {
                        gsap.to(particle, {
                            opacity: 0,
                            scale: 0,
                            duration: 0.8 + Math.random() * 0.5,
                            ease: 'power2.out',
                            onComplete: () => particle.remove()
                        });
                    }
                });
            }
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
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));

            ScrollTrigger.create({
                trigger: stat,
                start: 'top 85%',
                onEnter: () => {
                    gsap.to(stat, {
                        innerText: target,
                        duration: 2,
                        ease: 'power2.out',
                        snap: { innerText: 1 },
                        onUpdate: function () {
                            stat.textContent = Math.round(parseFloat(stat.textContent));
                        }
                    });
                },
                once: true
            });
        });

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
        gsap.to('.hero-content', {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: -100,
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

        // ===== HERO IMAGE FLOATING (on desktop) =====
        if (window.innerWidth > 1024) {
            const heroImages = document.querySelectorAll('.hero-image-item');
            heroImages.forEach((img, i) => {
                gsap.to(img, {
                    y: `${(i % 2 === 0 ? -1 : 1) * (15 + Math.random() * 10)}px`,
                    duration: 3 + Math.random() * 2,
                    ease: 'sine.inOut',
                    repeat: -1,
                    yoyo: true,
                    delay: i * 0.5
                });
            });
        }

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
        const portfolioWrapper = document.getElementById('portfolioScrollWrapper');
        const portfolioTrack = document.getElementById('portfolioScrollTrack');
        const portfolioProgressBar = document.getElementById('portfolioProgressBar');
        if (portfolioTrack && portfolioWrapper) {
            function getScrollDistance() {
                return portfolioTrack.scrollWidth - portfolioWrapper.offsetWidth;
            }

            const dist = getScrollDistance();
            if (dist > 0) {
                gsap.to(portfolioTrack, {
                    x: () => -getScrollDistance(),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '#portfolio',
                        start: 'top top',
                        end: () => '+=' + Math.max(getScrollDistance(), 600),
                        pin: true,
                        scrub: 1,
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

            // Recalculate all ScrollTrigger positions after pin is created
            ScrollTrigger.refresh();
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

        // ===== PERFORMANCE: Stop canvas animation when not visible =====
        const heroSection = document.getElementById('hero');
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    cancelAnimationFrame(animFrameId);
                } else {
                    animateCanvas();
                }
            });
        }, { threshold: 0 });

        heroObserver.observe(heroSection);
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
