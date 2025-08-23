import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import QAQuote from "../components/QAQuote";
import PerformanceReport from "../components/PerformanceReport";
import yimajiuniPark from '../assets/images/yimajiuni-park.png';
import nextEcomShopify from '../assets/images/next-ecom-shopify.png';

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

        // 🎬 Create GSAP timeline
        const tl = gsap.timeline();

        // ✨ STEP 1: Add glow effect to selected section
        const targetSection = document.getElementById(`section-${sectionNumber}`);
        tl.to(targetSection, {
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
            borderRadius: "20px", // equivalent to rounded-lg
            duration: 0.3,
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
                // Create new timeline for the shuffle animation
                const shuffleTl = gsap.timeline();

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
                // Create new timeline for the shuffle animation
                const shuffleTl = gsap.timeline();

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
                const offset = 0; // Adjust this value to control how far from top (higher = more space from top)
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
        const handleScroll = () => {
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
        };

        // 🎧 Add scroll listener and clean it up when component unmounts
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionOrder]); // Re-run effect when section order changes

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
                delay: 0.5 // Wait 0.5 seconds after page load before starting
            }
        );

        // 🧹 CLEANUP: Stop all animations when component unmounts (prevents memory leaks)
        return () => {
            gsap.killTweensOf([section2Ref.current, section3Ref.current, section4Ref.current]);
        };
    }, []);

    // 📱 RESPONSIVE SPACING: Handle screen size changes for consistent spacing
    useEffect(() => {
        const handleResize = () => {
            // Reset all sections to original positions when screen size changes
            resetAllSections();
        };

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Initial call to set correct spacing
        handleResize();

        // Reset all sections when component mounts
        resetAllSections();

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="max-container pt-8 -mt-0 sm:-mt-14">
            {/* Section 1: Main Visual + Copy and CTA */}
            <section id="section-1" ref={section1Ref} className="rounded-[20px] bg-pink-300/80 pt-10 mt-0 sm:mt-10 mb-20 flex items-center justify-center pb-20 px-4">
                <div className="text-center max-w-4xl">
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8">
                        {t('service.section1.title')}
                        <span className="blue-gradient_text block">{t('service.section1.titleHighlight')}</span>
                    </h1>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        {t('service.section1.description')}
                    </p>

                    {/* Main Image */}
                    <div className="w-full rounded-lg mb-12 overflow-hidden">
                        <img
                            src={yimajiuniPark}
                            alt="Yimajiuni Park - Creative Workspace"
                            className="shadow-lg w-full h-64 sm:h-80 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <ScrollLink
                        to="section-4"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105"
                    >
                        {t('service.section1.cta')}
                    </ScrollLink>
                </div>
            </section>

            {/* Section 2: Product Introduction */}
            <section id="section-2" ref={section2Ref} className="rounded-[20px] bg-pink-300/80 pt-10 mt-10 mb-20 flex items-center py-20">
                <div className="mx-8 max-w-6xl">
                    <div className="text-center">
                        <div>
                            <h2 className="text-left text-[28px] sm:text-4xl font-bold text-white mb-6">
                                {t('service.section2.title')}
                            </h2>
                            <span className="text-left text-[26px] font-bold sm:text-4xl blue-gradient_text block mb-3">
                                {t('service.section2.titleHighlight')}
                            </span>
                            <div className="w-full rounded-lg mb-6 ">
                                <img
                                    src={nextEcomShopify}
                                    alt="Next.js E-commerce Shopify Demo Site"
                                    className="w-full h-96 sm:h-max object-cover rounded-lg hover:scale-105 hover:shadow-pink-400/30 transition-transform duration-300"
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
                            <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-4">{t('service.section2.demo.description')}</h3>

                                <a
                                    href="https://next-shopify.yimajiuni.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105"
                                >
                                    {t('service.section2.demo.button')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Service Details */}
            <section id="section-3" ref={section3Ref} className="rounded-[20px] bg-pink-300/80 pt-10 mt-10 mb-20 flex items-center py-20">
                <div className="mx-8 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            {t('service.section3.title')}
                        </h2>
                        <p className="text-lg text-white/80 max-w-3xl mx-auto">
                            {t('service.section3.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                            <h3 className="text-xl font-semibold text-white mb-4">{t('service.section3.technologies.nextjs.title')}</h3>
                            <p className="text-white/80">
                                {t('service.section3.technologies.nextjs.description')}
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                            <h3 className="text-xl font-semibold text-white mb-4">{t('service.section3.technologies.shopify.title')}</h3>
                            <p className="text-white/80">
                                {t('service.section3.technologies.shopify.description')}
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                            <h3 className="text-xl font-semibold text-white mb-4">{t('service.section3.technologies.branding.title')}</h3>
                            <p className="text-white/80">
                                {t('service.section3.technologies.branding.description')}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('service.section3.performance.title')}</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4">{t('service.section3.performance.subtitle')}</h4>
                                <ul className="text-white/80 space-y-2">
                                    {t('service.section3.performance.metrics', { returnObjects: true }).map((metric, index) => (
                                        <li key={index}>• {metric}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="items-left grid grid-rows-2 text-left gap-4">
                                <div>
                                    <button
                                        onClick={() => setIsPerformanceReportOpen(true)}
                                        className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105"
                                    >
                                        {t('service.section3.performance.button')}
                                    </button>
                                </div>
                                <div>
                                    <a
                                        href="/about"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105"
                                    >
                                        {t('service.section3.aboutme.button')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Quotation App */}
            <section id="section-4" ref={section4Ref} className="rounded-[20px] bg-pink-300/80 pt-10 mt-10 mb-10 flex items-center py-20">
                <div className="mx-8 max-w-4xl w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            {t('service.section4.title')}
                        </h2>
                        <p className="text-lg text-white/80">
                            {t('service.section4.description')}
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">{t('service.section4.calculator.title')}</h3>
                            <p className="text-white/80 mb-8">
                                {t('service.section4.calculator.description')}
                            </p>
                            <button
                                onClick={() => setIsQAQuoteOpen(true)}
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105"
                            >
                                {t('service.section4.calculator.button')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Bottom Navigation */}
            <section id="section-5" className="fixed bottom-0 left-0 right-0 flex justify-center items-center h-[90px] sm:h-24 bg-white/10 backdrop-blur-sm border-t border-white/20 z-50">
                <div className="h-full flex items-center justify-center">
                    <nav className="flex gap-4 sm:gap-8 text-xs sm:text-base">
                        {[1, 2, 3, 4].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`sm:px-6 sm:py-3 px-2 py-4 rounded-lg font-semibold transition-all duration-300 ${activeSection === section
                                    ? "bg-blue-500 text-white shadow-lg"
                                    : "bg-white/20 text-white hover:bg-white/30"
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
                            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-white/20 text-blue-500 hover:bg-white/30"
                            title="Reset all sections to original positions"
                        >▩
                        </button>
                    </nav>
                </div>
            </section>

            {/* Q&A Form Popup */}
            <QAQuote
                isOpen={isQAQuoteOpen}
                onClose={() => setIsQAQuoteOpen(false)}
            />

            {/* Performance Report Popup */}
            <PerformanceReport
                isOpen={isPerformanceReportOpen}
                onClose={() => setIsPerformanceReportOpen(false)}
            />
        </div>
    );
};

export default Service; 