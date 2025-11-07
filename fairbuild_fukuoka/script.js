// Service News Auto Scroll Module
const AutoScrollManager = {
    scrollContainer: null,

    init() {
        this.scrollContainer = document.querySelector('.service-inner-scroll');

        if (this.scrollContainer) {
            this.autoScroll();
        }
    },

    autoScroll() {
        this.scrollContainer.scrollLeft += 1;

        if (this.scrollContainer.scrollLeft >= this.scrollContainer.scrollWidth - this.scrollContainer.clientWidth) {
            this.scrollContainer.scrollLeft = 0;
        }

        requestAnimationFrame(() => this.autoScroll());
    }
};
// Property List Toggle Module
const PropertyListManager = {
    init() {
        this.toggleBtn = document.getElementById("toggleBtn");
        this.toggleBtnText = document.getElementById("toggleBtnText");
        this.property1 = document.getElementById("property1"); // Added
        this.property2 = document.getElementById("property2");
        this.moreBtnArea = document.getElementById("toggleBtn");
        this.isOpen = false;

        if (this.toggleBtn) {
            this.toggleBtn.addEventListener("click", () => this.togglePropertyList());
        }
    },

    togglePropertyList() {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            this.property2.classList.remove("hidden");
            toggleBtnText.textContent = "CLOSE";
            this.property2.after(this.moreBtnArea);
        } else {
            this.property2.classList.add("hidden");
            toggleBtnText.textContent = "MORE";
            this.property1.after(this.moreBtnArea);
        }
    }
};


// WeChat Popup Module
const WeChatPopupManager = {
    init() {
        this.popupButtons = document.querySelectorAll('.openPopup');
        this.popup = document.getElementById('wechat-qr-popup');
        this.closePopup = document.getElementById('closePopup');

        if (this.popupButtons.length > 0 && this.popup) {
            this.bindEvents();
        }
    },

    bindEvents() {
        // Open popup when clicking any button with openPopup class
        this.popupButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.popup.classList.remove('hidden');
            });
        });

        // Close popup when clicking the close button
        if (this.closePopup) {
            this.closePopup.addEventListener('click', () => {
                this.popup.classList.add('hidden');
            });
        }

        // Close popup when clicking outside
        if (this.popup) {
            this.popup.addEventListener('click', (e) => {
                if (e.target === this.popup) {
                    this.popup.classList.add('hidden');
                }
            });
        }
    }
};

// WeChat Banner Module
const WeChatBannerManager = {
    init() {
        this.banner = document.getElementById('wechat-banner');
        this.closeBtn = document.getElementById('close-banner');

        if (this.banner && this.closeBtn) {
            this.closeBtn.addEventListener('click', () => {
                this.banner.style.display = 'none';
            });
        }
    }
};

// Image Slider Module
const ImageSliderManager = {
    init() {
        this.track = document.querySelector('.slider-track');
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.currentSlide = 0;
        this.autoplayInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;

        if (this.track && this.slides.length > 0) {
            this.bindEvents();
            this.startAutoplay();
        }
    },

    bindEvents() {
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.updateSlide(index);
                this.resetAutoplay();
            });
        });

        // Touch events for mobile swipe
        this.track.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
            this.track.style.transition = 'none';
        });

        this.track.addEventListener('touchmove', (e) => {
            this.touchEndX = e.touches[0].clientX;
            const diff = this.touchStartX - this.touchEndX;
            const offset = -this.currentSlide * 33.333 + (diff / this.track.offsetWidth) * 33.333;
            this.track.style.transform = `translateX(${offset}%)`;
        });

        this.track.addEventListener('touchend', () => {
            const diff = this.touchStartX - this.touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0 && this.currentSlide < this.slides.length - 1) {
                    this.currentSlide++;
                } else if (diff < 0 && this.currentSlide > 0) {
                    this.currentSlide--;
                }
            }
            this.updateSlide(this.currentSlide);
            this.resetAutoplay();
        });

        // Pause autoplay on hover
        this.track.addEventListener('mouseenter', () => {
            clearInterval(this.autoplayInterval);
        });

        this.track.addEventListener('mouseleave', () => {
            this.startAutoplay();
        });
    },

    updateSlide(index) {
        this.track.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        this.track.style.transform = `translateX(-${index * 33.333}%)`;
        this.dots.forEach(dot => dot.classList.remove('active'));
        this.dots[index].classList.add('active');
        this.currentSlide = index;
    },

    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.updateSlide(this.currentSlide);
        }, 5000);
    },

    resetAutoplay() {
        clearInterval(this.autoplayInterval);
        this.startAutoplay();
    }
};

// Fade Animation Module
const FadeAnimationManager = {
    init() {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade_in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.fade, .fade_left, .fade_right').forEach(el => {
            observer.observe(el);
        });
    }
};

// Mobile Navigation Module
const MobileNavigationManager = {
    init() {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
        const body = document.body;

        if (hamburgerMenu && mobileNavOverlay) {
            // Toggle menu on hamburger button click
            hamburgerMenu.addEventListener('click', function () {
                this.classList.toggle('active');
                mobileNavOverlay.classList.toggle('active');
                body.classList.toggle('menu-open');
            });

            // Close menu when clicking navigation items
            document.querySelectorAll('.mobile-nav-item').forEach(item => {
                item.addEventListener('click', () => {
                    hamburgerMenu.classList.remove('active');
                    mobileNavOverlay.classList.remove('active');
                    body.classList.remove('menu-open');
                });
            });

            // Close menu when clicking outside
            mobileNavOverlay.addEventListener('click', function (e) {
                if (e.target === this) {
                    hamburgerMenu.classList.remove('active');
                    mobileNavOverlay.classList.remove('active');
                    body.classList.remove('menu-open');
                }
            });
        }
    }
};

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    AutoScrollManager.init();
    PropertyListManager.init();
    WeChatPopupManager.init();
    WeChatBannerManager.init();
    ImageSliderManager.init();
    FadeAnimationManager.init();
    MobileNavigationManager.init();
});