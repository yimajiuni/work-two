import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import AnimatedMetric from "../components/AnimatedMetric";
import i18n from "i18next";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Lazy load heavy components to reduce initial bundle size
const QAQuote = lazy(() => import("../components/QAQuote"));
const PerformanceReport = lazy(() => import("../components/PerformanceReport"));
import yimajiuniPark from '../assets/images/yimajiuni-park.webp';
import nextEcomShopify from '../assets/images/webmock1.webp';
import waPtnDia from '../assets/images/wa-ptn-dia.webp';
import waPtnWave from '../assets/images/wa-ptn-wave.webp';
import Footer from "../components/Footer";

// Consolidated Tailwind classes for better performance
const classes = {
    // Main container
    mainContainer: "max-container pt-8 -mt-32 sm:-mt-24",

    // Section base styles
    section1: "rounded-[20px] bg-gradient-to-t from-pink-400 to-pink-300/70 pt-10 mt-0 sm:mt-10 mb-20 flex items-center justify-center pb-20 px-4",
    section2: "rounded-[20px] bg-gradient-to-b from-pink-400 to-pink-300/70 pt-10 mt-10 mb-20 flex items-center py-20",
    section3: "rounded-[20px] bg-gradient-to-b from-pink-400 to-pink-300/70 pt-10 mt-10 mb-20 flex items-center py-20",
    section4: "rounded-[20px] bg-gradient-to-t from-pink-400 to-pink-300/70 pt-10 mt-10 mb-10 flex items-center py-20",

    // Section content
    sectionContent: "mx-8 max-w-6xl",
    sectionContent4: "mx-8 max-w-4xl w-full",
    sectionTextCenter: "text-center",
    sectionTextLeft: "text-left",

    // Typography
    title: "tracking-tight text-4xl sm:text-6xl font-bold text-white mb-4 sm:mb-6",
    title2: "tracking-tight text-4xl sm:text-6xl font-bold text-white mb-4 sm:mb-6",
    titleHighlight: "blue-gradient_text text-[36px] sm:text-6xl drop-shadow block",
    subtitle: "text-[28px] sm:text-4xl font-bold text-white mb-6",
    subtitleHighlight: "text-[26px] font-bold sm:text-4xl text-white  block mb-3",
    sectionTitle: "text-4xl font-bold text-white mb-6",
    description: "text-lg text-white/80 max-w-3xl mx-auto mb-4",
    descriptionLarge: "text-xl text-white/80 mb-4 sm:mb-6 max-w-2xl mx-auto",

    // Images
    image: "mx-auto w-[100%] sm:w-full h-60 sm:h-[80%] object-fit rounded-lg transition-transform duration-300",
    imageHover: "w-full h-96 h-[100%] sm:h-max object-cover sm:object-fit rounded-lg hover:scale-105 hover:shadow-pink-400/30 transition-transform duration-300",

    // Buttons
    // NOTE: You can now use octagon buttons! See OCTAGON_BUTTONS_GUIDE.md
    // ctaButton: "inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105",
    // Alternative octagon version ctaButton: "octagon-gradient octagon-blue-gradient octagon-lg font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105",
    ctaButton: "inline-block octagon-gradient octagon-blue-gradient octagon-lg font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105",
    // demoButton: "inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105",
    demoButton: "inline-block octagon-gradient octagon-blue-gradient octagon-md font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105",
    // performanceButton: "inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105",
    performanceButton: "inline-block octagon-gradient octagon-blue-gradient octagon-md font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105",
    // quoteButton: "bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105",
    quoteButton: "inline-block octagon-gradient octagon-blue-gradient octagon-lg font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105",

    // Cards and containers
    card: "bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20",
    cardFlex: "flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20",
    cardCircular: "bg-white/10 backdrop-blur-sm rounded-full p-8 border border-white/20 aspect-square flex flex-col items-center justify-center text-center",

    // Technology cards
    techCard: "bg-white/10 backdrop-blur-sm p-8 border border-white/20 rounded-lg flex flex-col items-center justify-center text-center",
    techTitle: "text-xl font-semibold text-white mb-4",
    techDescription: "text-white/80",

    // Performance section
    performanceContainer: "bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20",
    performanceTitle: "text-2xl font-bold text-white mb-1 text-center",
    performanceSubtitle: "text-md font-bold text-white/80 mb-6 text-center",
    performanceGrid: "grid md:grid-cols-3 gap-8 mb-6",
    performanceButtonContainer: "text-center",

    // Quote section
    quoteContainer: "bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20",
    quoteTitle: "text-2xl font-bold text-white mb-4",
    quoteButtonContainer: "text-center",

    // Navigation
    navigation: "fixed bottom-0 left-0 right-0 flex justify-center items-center h-[90px] sm:h-24 bg-white/10 backdrop-blur-sm border-t border-white/20 z-50",
    navigationContent: "h-full flex items-center justify-center",
    navigationNav: "flex gap-4 sm:gap-8 text-xs sm:text-base",
    navigationButton: "sm:px-6 sm:py-3 px-2 py-4 rounded-lg font-semibold transition-all duration-300",
    navigationButtonActive: "bg-blue-500 text-white shadow-lg",
    navigationButtonInactive: "bg-white/20 border border-white/20 text-blue-500 hover:bg-white/30",
    navigationReset: "px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-white/20 border border-white/20 text-blue-500 hover:bg-white/30",

    // Decorative elements
    decorativeContainer: "fixed inset-0 w-full min-w-[24rem] top-[48%] sm:top-[58%] lg:top-[43%] max-w-[82rem] left-1/2 transform -translate-x-1/2 z-40 pointer-events-none",
    decorativeLeft: "absolute left-0 sm:left-6 transform -translate-y-1/2 w-28 sm:w-44 lg:w-[250px] h-20 sm:h-20 lg:h-24",
    decorativeRight: "absolute right-0 sm:right-6 transform -translate-y-1/2 w-32 sm:w-48 lg:w-[270px] h-24 sm:h-24 lg:h-32",
    decorativeQuoteLink: "absolute text-[15px] sm:text-sm lg:text-lg right-[12%] sm:right-[25%] lg:right-[28%] bottom-[62%] sm:bottom-[60%] lg:bottom-[60%] text-slate-800 font-bold cursor-pointer hover:scale-110 transition-all duration-300 font-handwriting pointer-events-auto z-50 transform -rotate-3 bg-gradient-to-r from-[#00c6ff] via-purple-500 to-pink-500 bg-clip-text text-transparent",
    decorativeContactLink: "absolute text-[15px] sm:text-sm lg:text-lg left-[10%] sm:left-[20%] lg:left-[20%] bottom-[62%] sm:bottom-[65%] lg:bottom-[60%] text-slate-800 font-bold cursor-pointer hover:scale-110 transition-all duration-300 font-handwriting pointer-events-auto z-50 transform rotate-3 bg-gradient-to-r from-[#00c6ff] via-yellow-500 to-red-500 bg-clip-text text-transparent",

    // Spacing
    mb12: "mb-12",
    mb16: "mb-16",
    mb6: "mb-6",
    mb4: "mb-4",
    mb3: "mb-3"
};

const Service = () => {
    const [activeSection, setActiveSection] = useState(1);
    const [sectionOrder, setSectionOrder] = useState([1, 2, 3, 4]); // Track current visual order of sections
    const [isQAQuoteOpen, setIsQAQuoteOpen] = useState(false); // Q&A form popup state
    const [isPerformanceReportOpen, setIsPerformanceReportOpen] = useState(false); // Performance report popup state
    const { t } = useTranslation();

    // 📍 REFS: Create references to DOM elements for GSAP animations
    // 💡 These refs allow us to control the animations of specific sections
    const section1Ref = useRef(null); // Reference to section 1 (not animated)
    const section2Ref = useRef(null); // Reference to section 2 (animated)
    const section3Ref = useRef(null); // Reference to section 3 (animated)
    const section4Ref = useRef(null); // Reference to section 4 (animated)
    const performanceSectionRef = useRef(null); // Reference to performance section for animation trigger
    const [isPerformanceSectionVisible, setIsPerformanceSectionVisible] = useState(false); // Track performance section visibility

    // 🚀 Performance optimization: Use Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Only animate when section is visible
                        entry.target.style.willChange = 'transform';
                    } else {
                        // Clean up when not visible
                        entry.target.style.willChange = 'auto';
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe all sections
        [section1Ref, section2Ref, section3Ref, section4Ref].forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);





    // 🎯 MAIN FUNCTION: Handles navigation button clicks and decides animation type
    const scrollToSection = (sectionNumber) => {
        setActiveSection(sectionNumber); // Update which section is currently active

        if (sectionNumber === 1) {
            // 🏠 SECTION 1: Just scroll normally (no special animation)
            const element = document.getElementById(`section-${sectionNumber}`);
            if (element) {
                const elementTop = element.offsetTop;
                const offset = 100; // Same offset as other sections for consistency
                window.scrollTo({
                    top: elementTop - offset,
                    behavior: "smooth"
                });
            }
            return;
        }

        // 🎬 SECTIONS 2-4: Use special push-up animation
        animateSectionToSecondRow(sectionNumber);
    };

    // 🔧 SIMPLE SHUFFLING FUNCTION: Sections 2-4 shuffle in order within fixed range
    const animateSectionToSecondRow = (sectionNumber) => {
        // 📍 Get all sections 2-4
        const allSections = [section2Ref.current, section3Ref.current, section4Ref.current];

        if (!allSections[0]) return;

        // 🎬 Create GSAP timeline with performance optimizations
        const tl = gsap.timeline({
            defaults: {
                ease: "power2.out",
                duration: 0.6
            }
        });

        // ✨ STEP 1: Add glow effect to selected section
        const targetSection = document.getElementById(`section-${sectionNumber}`);
        tl.to(targetSection, {
            boxShadow: "0 0 30px rgba(4, 206, 251, 0.51)",
            borderRadius: "20px", // equivalent to rounded-lg
            duration: 0.9,
            ease: "power2.out"
        });

        // 🔄 STEP 2: Simple and stable shuffling with height-based spacing
        // 💡 Get section heights INCLUDING margins for accurate spacing

        // Helper function to get height including margins
        const getSectionHeightWithMargin = (element) => {
            if (!element) return 0;

            // Get the element's height (content + padding + border)
            const elementHeight = element.offsetHeight;

            // Get computed styles to find margins
            const styles = window.getComputedStyle(element);
            const marginTop = parseInt(styles.marginTop) || 0;
            const marginBottom = parseInt(styles.marginBottom) || 0;

            // Return total height including margins
            return elementHeight + marginTop + marginBottom;
        };

        // Get section heights including margins for accurate spacing
        const section2Height = getSectionHeightWithMargin(section2Ref.current);
        const section3Height = getSectionHeightWithMargin(section3Ref.current);
        const section4Height = getSectionHeightWithMargin(section4Ref.current);

        if (sectionNumber === 2) {
            // Reset to original positions
            tl.to(section2Ref.current, { y: 0, duration: 0.8, ease: "power2.out" });
            tl.to(section3Ref.current, { y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6");
            tl.to(section4Ref.current, { y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6");
            setSectionOrder([1, 2, 3, 4]); // Original order
        } else if (sectionNumber === 3) {
            // Reset all sections first, then shuffle
            resetAllSections();

            // Wait for reset to complete, then shuffle
            setTimeout(() => {
                // Create new timeline for the shuffle animation with RAF optimization
                const shuffleTl = gsap.timeline({
                    defaults: {
                        ease: "power2.out",
                        duration: 0.6,
                        force3D: true // Enable hardware acceleration
                    }
                });

                // Section 3 moves to top position (2nd position)
                shuffleTl.to(section3Ref.current, { y: -section2Height + 40, duration: 0.8, ease: "power2.out" });
                // Section 2 moves down by section 3's height
                shuffleTl.to(section2Ref.current, { y: section3Height - 40, duration: 0.8, ease: "power2.out" }, "-=0.6");
                setSectionOrder([1, 3, 2, 4]);
            }, 700); // Wait for reset animation to complete

        } else if (sectionNumber === 4) {
            // Reset all sections first, then shuffle
            resetAllSections();

            // Wait for reset to complete, then shuffle
            setTimeout(() => {
                // Create new timeline for the shuffle animation with RAF optimization
                const shuffleTl = gsap.timeline({
                    defaults: {
                        ease: "power2.out",
                        duration: 0.6,
                        force3D: true // Enable hardware acceleration
                    }
                });

                // Section 4 moves to top position (2nd position)
                shuffleTl.to(section4Ref.current, { y: -(section2Height + section3Height) + 80, duration: 0.8, ease: "power2.out" });
                // Section 2 moves down by section 4's height
                shuffleTl.to(section2Ref.current, { y: section4Height, duration: 0.8, ease: "power2.out" }, "-=0.6");
                // Section 3 moves down by section 4's height
                shuffleTl.to(section3Ref.current, { y: section4Height, duration: 0.8, ease: "power2.out" }, "-=0.6");
                setSectionOrder([1, 4, 2, 3]);
            }, 700); // Wait for reset animation to complete
        }

        // 📏 STEP 3: Add subtle scale effect
        tl.to(targetSection, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
        }, "-=0.5");

        // 📏 STEP 4: Return to normal scale
        tl.to(targetSection, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        }, "-=0.1");

        // ✨ STEP 5: Remove glow effect
        tl.to(targetSection, {
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out"
        }, "-=0.2");

        // 🔄 STEP 6: Shuffle navigation buttons to match new section order
        setTimeout(() => {
            shuffleNavigation(sectionNumber);
        }, 400); // Start navigation shuffle before scroll

        // 📜 STEP 7: Auto-scroll to 2nd section position (where selected section now appears)
        setTimeout(() => {
            // Always scroll to section 2's original position since that's where selected sections move to
            const section2Element = document.getElementById('section-2');
            if (section2Element) {
                const elementTop = section2Element.offsetTop;
                const offset = 50; // Adjust this value to control how far from top (higher = more space from top)
                window.scrollTo({
                    top: elementTop - offset,
                    behavior: "smooth"
                });
            }
        }, 600);
    };

    // 🔄 NAVIGATION SHUFFLING FUNCTION: Reorders navigation buttons to match section order
    const shuffleNavigation = (selectedSection) => {
        const navContainer = document.querySelector('#section-5 nav');
        if (!navContainer) return;

        // Get all navigation buttons (excluding reset button)
        const navButtons = Array.from(navContainer.children).filter(child =>
            child.tagName === 'BUTTON' && !child.textContent.includes('●')
        );

        // Define new order based on selected section
        let newOrder;
        if (selectedSection === 2) {
            newOrder = [1, 2, 3, 4]; // Original order
        } else if (selectedSection === 3) {
            newOrder = [1, 3, 2, 4]; // Section 3 moves to position 2
        } else if (selectedSection === 4) {
            newOrder = [1, 4, 2, 3]; // Section 4 moves to position 2
        }

        // Reorder buttons with smooth animation
        newOrder.forEach((sectionNum, index) => {
            const button = navButtons.find(btn => {
                const buttonText = btn.textContent.trim();
                if (sectionNum === 1) return buttonText === t('service.navigation.main');
                if (sectionNum === 2) return buttonText === t('service.navigation.product');
                if (sectionNum === 3) return buttonText === t('service.navigation.services');
                if (sectionNum === 4) return buttonText === t('service.navigation.quote');
                return false;
            });

            if (button) {
                // 💡 Responsive button spacing based on screen size
                const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
                const buttonSpacing = isMobile ? 80 : 120; // Smaller spacing on mobile

                // Animate button to new position
                gsap.to(button, {
                    x: (index - navButtons.indexOf(button)) * buttonSpacing,
                    duration: 0.6,
                    ease: "power2.out",
                    onComplete: () => {
                        // Move button to new position in DOM
                        // 💡 Insert before the reset button to keep it at the end
                        const resetButton = navContainer.querySelector('button[title*="Reset"]');
                        if (resetButton) {
                            navContainer.insertBefore(button, resetButton);
                        } else {
                            navContainer.appendChild(button);
                        }
                        gsap.set(button, { x: 0 }); // Reset position
                    }
                });
            }
        });

        // 🔄 UPDATE ACTIVE SECTION: After shuffling, the selected section is now visually in position 2
        // 💡 This ensures the navigation button highlighting matches the actual visual layout
        setTimeout(() => {
            setActiveSection(selectedSection); // Keep the selected section as active
        }, 600); // Wait for button animation to complete
    };

    // 🔄 RESET FUNCTION: Reset all sections 2-4 back to their original positions
    // 💡 Call this function if you want to reset all sections manually
    const resetAllSections = () => {
        const allSections = [section2Ref.current, section3Ref.current, section4Ref.current];
        gsap.to(allSections, {
            y: 0, // Move all sections back to original Y position
            duration: 0.6, // Animation duration in seconds
            ease: "power2.out" // Animation curve
        });

        // 🔄 RESTORE ORIGINAL ORDER: Reset section order and active section
        setSectionOrder([1, 2, 3, 4]);
        setActiveSection(1); // Reset to main section

        // 🔄 RESET NAVIGATION BUTTONS: Restore buttons to original order
        resetNavigationButtons();
    };

    // 🔄 NAVIGATION RESET FUNCTION: Restore navigation buttons to original order
    const resetNavigationButtons = () => {
        const navContainer = document.querySelector('#section-5 nav');
        if (!navContainer) return;

        // Get all navigation buttons (excluding reset button)
        const navButtons = Array.from(navContainer.children).filter(child =>
            child.tagName === 'BUTTON' && !child.textContent.includes('▩')
        );

        // Define original button order
        const originalOrder = [
            { text: t('service.navigation.main'), section: 1 },
            { text: t('service.navigation.product'), section: 2 },
            { text: t('service.navigation.services'), section: 3 },
            { text: t('service.navigation.quote'), section: 4 }
        ];

        // Animate buttons back to original positions
        originalOrder.forEach((buttonInfo, index) => {
            const button = navButtons.find(btn => {
                const buttonText = btn.textContent.trim();
                return buttonText === buttonInfo.text;
            });

            if (button) {
                // Find current position of this button
                const currentIndex = navButtons.indexOf(button);
                const targetIndex = index;

                // 💡 Responsive button spacing based on screen size
                const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
                const buttonSpacing = isMobile ? 80 : 120; // Smaller spacing on mobile

                // Calculate movement distance
                const moveDistance = (targetIndex - currentIndex) * buttonSpacing;

                // Animate button to original position
                gsap.to(button, {
                    x: moveDistance,
                    duration: 0.6,
                    ease: "power2.out",
                    onComplete: () => {
                        // Move button to original position in DOM
                        if (targetIndex === 0) {
                            navContainer.insertBefore(button, navContainer.firstChild);
                        } else {
                            const beforeElement = navContainer.children[targetIndex - 1];
                            navContainer.insertBefore(button, beforeElement.nextSibling);
                        }
                        gsap.set(button, { x: 0 }); // Reset position
                    }
                });
            }
        });

        // 🔄 ENSURE RESET BUTTON STAYS AT THE END: Always place reset button last
        setTimeout(() => {
            const resetButton = navContainer.querySelector('button[title*="Reset"]');
            if (resetButton && resetButton !== navContainer.lastChild) {
                navContainer.appendChild(resetButton);
            }
        }, 700); // Wait for button animations to complete
    };

    // 📱 SCROLL DETECTION: Automatically updates active section while scrolling
    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            // Debounce scroll events for better performance
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const scrollPosition = window.scrollY + window.innerHeight / 2; // Calculate middle of viewport

                // 🔍 Find which section is currently in the middle of the screen
                // 💡 Use current visual order and account for GSAP transforms
                for (let i = sectionOrder.length - 1; i >= 0; i--) {
                    const section = document.getElementById(`section-${sectionOrder[i]}`);
                    if (section) {
                        // Get the actual visual position considering GSAP transforms
                        const rect = section.getBoundingClientRect();
                        const sectionTop = rect.top + window.scrollY;
                        const sectionHeight = rect.height;

                        // 📍 Check if current scroll position is within this section
                        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                            // 💡 Don't auto-update active section during shuffling animations
                            // This prevents conflicts with manual navigation selection
                            if (!gsap.isTweening(section2Ref.current) &&
                                !gsap.isTweening(section3Ref.current) &&
                                !gsap.isTweening(section4Ref.current)) {

                                setActiveSection(sectionOrder[i]); // Update active section based on visual order
                            }
                            break;
                        }
                    }
                }
            }, 16); // ~60fps debounce
        };

        // 🎧 Add scroll listener and clean it up when component unmounts
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [sectionOrder]); // Re-run effect when section order changes



    // 📜 SCROLL TO TOP: Always scroll to top when Service component loads
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    // 🚀 INITIALIZATION: Set up GSAP animations when component first loads
    useEffect(() => {
        // 📍 Set initial positions for sections 2-4 (no animation, just positioning)
        gsap.set([section2Ref.current, section3Ref.current, section4Ref.current], {
            y: 0, // Y position (0 = normal position)
            opacity: 1 // Fully visible
        });

        // ✨ ENTRANCE ANIMATION: Animate sections 2-4 when page first loads
        // 💡 MODIFY: Change "y: 50" to control how far sections start from (higher = further down)
        // 💡 MODIFY: Change "opacity: 0" to control starting transparency (0 = invisible, 1 = visible)
        // 💡 MODIFY: Change "duration: 0.8" to control entrance animation speed
        // 💡 MODIFY: Change "stagger: 0.2" to control delay between each section (creates wave effect)
        // 💡 MODIFY: Change "delay: 0.5" to control when entrance animation starts after page load
        gsap.fromTo([section2Ref.current, section3Ref.current, section4Ref.current],
            { y: 50, opacity: 0 }, // Start position: 50px down and invisible
            {
                y: 0, // End position: normal position
                opacity: 1, // End state: fully visible
                duration: 0.8, // Animation duration in seconds
                stagger: 0.2, // Delay between each section (0.2s between each)
                ease: "power2.out", // Animation curve: starts fast, ends slow
                delay: 0.5, // Wait 0.5 seconds after page load before starting

            }
        );



        // 🧹 CLEANUP: Stop all animations when component unmounts (prevents memory leaks)
        return () => {
            gsap.killTweensOf([section2Ref.current, section3Ref.current, section4Ref.current]);
        };
    }, []);

    // 📱 RESPONSIVE SPACING: Handle screen size changes for consistent spacing
    useEffect(() => {
        let resizeTimeout;

        const handleResize = () => {
            // Debounce resize events for better performance
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Reset all sections to original positions when screen size changes
                resetAllSections();
            }, 250); // 250ms debounce
        };

        // Add resize listener
        window.addEventListener('resize', handleResize, { passive: true });

        // Initial call to set correct spacing (only once on mount)
        resetAllSections();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []); // Remove resetAllSections from dependencies to prevent infinite loops

    // 🎯 PERFORMANCE SECTION VISIBILITY: Track when performance section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsPerformanceSectionVisible(entry.isIntersecting);
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (performanceSectionRef.current) {
            observer.observe(performanceSectionRef.current);
        }

        return () => {
            if (performanceSectionRef.current) {
                observer.unobserve(performanceSectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <SEO
                title="Services & Portfolio"
                description="Explore my professional services including web development, graphic design, and creative solutions. View my portfolio of projects and get in touch for collaboration."
                keywords="web development services, graphic design, portfolio, react development, japan designer"
                url="https://yimajiuni.com/service"
            />
            <div className={classes.mainContainer}>
                {/* Section 1: Main Visual + Copy and CTA */}
                <section id="section-1" ref={section1Ref} className={classes.section1}>
                    <div className="text-center max-w-4xl">

                        <h1 className={classes.title}>
                            {t('service.section1.title')}
                            <span className="responsive-br"></span>
                            <span className={classes.title2}>{t('service.section1.title2')}</span>
                            <span className={classes.titleHighlight}>{t('service.section1.titleHighlight')}</span>
                        </h1>

                        {/* Main Image */}
                        <div className="w-full rounded-lg mb-6">
                            <img
                                src={yimajiuniPark}
                                alt="Yimajiuni Park - Creative Workspace"
                                className={classes.image}
                                fetchpriority="high"
                                width="1200"
                                height="949"
                            />
                        </div>
                        <p className="text-xl font-bold text-white mb-4">
                            {t('service.section1.yimajiuni')}</p>


                        <p className={classes.descriptionLarge}>
                            {t('service.section1.description')}
                        </p>

                        <ScrollLink
                            to="section-4"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className={classes.ctaButton}
                        >
                            {t('service.section1.cta')}
                        </ScrollLink>
                    </div>
                </section>

                {/* Section 2: Product Introduction */}
                <section id="section-2" ref={section2Ref} className={classes.section2}>
                    <div className={classes.sectionContent}>
                        <div className={classes.sectionTextCenter}>
                            <div>
                                <h2

                                    className={classes.subtitle}
                                >
                                    {t('service.section2.title')}
                                </h2>
                                <span

                                    className={classes.subtitleHighlight}
                                >
                                    {t('service.section2.titleHighlight')}
                                </span>
                                <div className="w-full rounded-lg mb-6 ">
                                    <img
                                        src={nextEcomShopify}
                                        alt="Next.js E-commerce Shopify Demo Site"
                                        className={classes.imageHover}
                                        loading="lazy"
                                        width="800"
                                        height="400"
                                    />
                                </div>

                                {/*}
                            <p className="text-lg text-white/80 mb-8">
                                {t('service.section2.description')}
                            </p>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                                <h3 className="text-xl font-semibold text-white mb-4">{t('service.section2.features.title')}</h3>
                                <ul className="text-white/80 space-y-2">
                                    {t('service.section2.features.items', { returnObjects: true }).map((item, index) => (
                                        <li key={index}>• {item}</li>
                                    ))}
                                </ul>
                            </div>*/}
                                <div

                                    className={classes.cardFlex}
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4">{t('service.section2.demo.description')}</h3>

                                    <a
                                        href="https://next-shopify.yimajiuni.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.demoButton}
                                    >
                                        {t('service.section2.demo.button')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Service Details */}
                <section id="section-3" ref={section3Ref} className={classes.section3}>
                    <div className={classes.sectionContent}>
                        <div className={classes.sectionTextCenter}>
                            <h2

                                className={classes.sectionTitle}
                            >
                                {t('service.section3.title')}
                            </h2>
                            <p

                                className={classes.description}
                            >
                                {t('service.section3.description')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div
                                className={classes.techCard}
                            >
                                <h3 className={classes.techTitle}>{t('service.section3.technologies.nextjs.title')}</h3>
                                <p className={classes.techDescription}>
                                    {t('service.section3.technologies.nextjs.description')}
                                </p>
                            </div>
                            <div
                                className={classes.techCard}
                            >
                                <h3 className={classes.techTitle}>{t('service.section3.technologies.shopify.title')}</h3>
                                <p className={classes.techDescription}>
                                    {t('service.section3.technologies.shopify.description')}
                                </p>
                            </div>
                            <div
                                className={classes.techCard}
                            >
                                <h3 className={classes.techTitle}>{t('service.section3.technologies.branding.title')}</h3>
                                <p className={classes.techDescription}>
                                    {t('service.section3.technologies.branding.description')}
                                </p>
                            </div>
                        </div>

                        <div
                            ref={performanceSectionRef}
                            className={classes.performanceContainer}
                        >
                            <h3 className={classes.performanceTitle}>{t('service.section3.performance.title')}</h3>
                            <h4 className={classes.performanceSubtitle}>{t('service.section3.performance.subtitle')}</h4>
                            <div className={classes.performanceGrid}>
                                <AnimatedMetric
                                    label={t('service.section3.performance.labels.imageSpeed')}
                                    labelKey="imageSpeed"
                                    startValue="1.2sec"
                                    endValue="0.5sec"
                                    duration={4000}
                                    delay={0}
                                    shouldStart={isPerformanceSectionVisible}
                                />
                                <AnimatedMetric
                                    label={t('service.section3.performance.labels.conversionRate')}
                                    labelKey="conversionRate"
                                    startValue="1.9%"
                                    endValue="1.3%"
                                    duration={4000}
                                    delay={300}
                                    shouldStart={isPerformanceSectionVisible}
                                />
                                <AnimatedMetric
                                    label={t('service.section3.performance.labels.mobileBounce')}
                                    labelKey="mobileBounce"
                                    startValue="65%"
                                    endValue="20%"
                                    duration={4000}
                                    delay={600}
                                    shouldStart={isPerformanceSectionVisible}
                                />
                            </div>
                            <div className={classes.performanceGrid}>
                                <AnimatedMetric
                                    label={t('service.section3.performance.labels.organicTraffic')}
                                    labelKey="organicTraffic"
                                    startValue="rank 22"
                                    endValue="rank 15"
                                    duration={4000}
                                    delay={900}
                                    shouldStart={isPerformanceSectionVisible}
                                />
                                <AnimatedMetric
                                    label={t('service.section3.performance.labels.operationHours')}
                                    labelKey="operationHours"
                                    startValue="25 hours"
                                    endValue="15 hours"
                                    duration={4000}
                                    delay={1200}
                                    shouldStart={isPerformanceSectionVisible}
                                />
                                <AnimatedMetric
                                    label={t('service.section3.performance.labels.serverCost')}
                                    labelKey="serverCost"
                                    startValue={i18n.language === 'jp' ? "43万円" : "$4000"}
                                    endValue={i18n.language === 'jp' ? "20万円" : "$2000"}
                                    duration={4000}
                                    delay={1500}
                                    shouldStart={isPerformanceSectionVisible}
                                />
                            </div>

                            <div className={classes.performanceButtonContainer}>
                                <button
                                    onClick={() => setIsPerformanceReportOpen(true)}
                                    className={classes.performanceButton}
                                >
                                    {t('service.section3.performance.button')}
                                </button>
                            </div>
                        </div>

                    </div>
                </section >

                {/* Section 4: Quotation App */}
                < section id="section-4" ref={section4Ref} className={classes.section4} >
                    <div className={classes.sectionContent4}>
                        <div className={classes.sectionTextCenter}>
                            <h2

                                className={classes.sectionTitle}
                            >
                                {t('service.section4.title')}
                            </h2>
                            <p

                                className={classes.description}
                            >
                                {t('service.section4.description')}
                            </p>
                        </div>

                        <div
                            id="quote"
                            className={classes.quoteContainer}
                        >
                            <div className={classes.quoteButtonContainer}>
                                <h3 className={classes.quoteTitle}>{t('service.section4.calculator.title')}</h3>

                                <button
                                    onClick={() => setIsQAQuoteOpen(true)}
                                    className={classes.quoteButton}
                                >
                                    {t('service.section4.calculator.button')}
                                </button>
                            </div>
                        </div>
                    </div>
                </section >
                {/*
            <section className="mb-10">
                <Footer />
            </section>*/}

                {/* Section 5: Bottom Navigation */}
                <section id="section-5" className={classes.navigation}>
                    <div className={classes.navigationContent}>
                        <nav className={classes.navigationNav}>
                            {[1, 2, 3, 4].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`${classes.navigationButton} ${activeSection === section
                                        ? classes.navigationButtonActive
                                        : classes.navigationButtonInactive
                                        }`}
                                >
                                    {section === 1 && t('service.navigation.main')}
                                    {section === 2 && t('service.navigation.product')}
                                    {section === 3 && t('service.navigation.services')}
                                    {section === 4 && t('service.navigation.quote')}
                                </button>
                            ))}
                            {/* 🔄 RESET BUTTON: Click to reset all sections back to original positions */}
                            {/* 💡 This is useful for testing or if you want to reset the layout */}
                            <button
                                onClick={resetAllSections}
                                className={classes.navigationReset}
                                title="Reset all sections to original positions"
                            >▩
                            </button>
                        </nav>
                    </div>
                </section>

                {/* Q&A Form Popup */}
                <Suspense fallback={<div className="fixed inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>}>
                    <QAQuote
                        isOpen={isQAQuoteOpen}
                        onClose={() => setIsQAQuoteOpen(false)}
                    />
                </Suspense>

                {/* Performance Report Popup */}
                <Suspense fallback={<div className="fixed inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>}>
                    <PerformanceReport
                        isOpen={isPerformanceReportOpen}
                        onClose={() => setIsPerformanceReportOpen(false)}
                    />
                </Suspense>

                {/* Fixed Decorative Buttons */}
                <div className={classes.decorativeContainer}>
                    <div
                        className={classes.decorativeLeft}
                        style={{
                            backgroundImage: `url(${waPtnWave})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <Link
                            to="/contact"
                            className={classes.decorativeContactLink}
                        >
                            {t('service.decorative.contactLink')}
                        </Link>
                    </div>
                    <div
                        className={classes.decorativeRight}
                        style={{
                            backgroundImage: `url(${waPtnDia})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div
                            className={classes.decorativeQuoteLink}
                            onClick={() => setIsQAQuoteOpen(true)}
                        >
                            {t('service.decorative.quoteLink')}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Service; 