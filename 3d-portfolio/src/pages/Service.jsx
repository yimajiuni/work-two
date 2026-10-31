import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import lcpPO from '../assets/images/lcp.webp';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Lazy load heavy components to reduce initial bundle size
const ProjectQuote = lazy(() => import("../components/ProjectQuote"));
const NextJsReport = lazy(() => import("../components/NextJsReport"));
const LcpImprovement = lazy(() => import("../components/LcpImprovement"));
import yimajiuniPark from '../assets/images/yimajiuni-park.webp';
import nextEcomShopify from '../assets/images/webmock1.webp';
import waPtnDia from '../assets/images/wa-ptn-dia.webp';
import waPtnWave from '../assets/images/wa-ptn-wave.webp';
import { useTheme } from "../themes/useTheme";
import ServiceBeigeLayout, { beigeServiceChrome } from "../components/ServiceBeigeLayout";
import ServicePinkLayout, { pinkServiceChrome } from "../components/ServicePinkLayout";

const runLcpImprovementWarmup = () => {
    import("../components/LcpImprovement").then((m) => m.warmupLcpImprovementModal());
};

const Service = () => {
    const { theme } = useTheme();
    const motion = theme.motion;
    const isBeigeLayout = theme.structure === "beige-v1";
    const classes = isBeigeLayout ? beigeServiceChrome : pinkServiceChrome;
    const navSectionIds = classes.navSectionIds || [1, 2, 3, 4];
    const navigationId = classes.navigationId || "section-5";
    const [activeSection, setActiveSection] = useState(1);
    const [sectionOrder, setSectionOrder] = useState([1, 2, 3, 4]);
    /** Modals: URL query (shareable / back button closes) */
    const [searchParams, setSearchParams] = useSearchParams();
    const isProjectQuoteOpen = searchParams.get("quote") === "project";
    const isNextJsReportOpen = searchParams.get("report") === "nextjs";
    const isLcpImprovementOpen = searchParams.get("lcp") === "improvement";

    const setModalParam = (key, value, { replace = false } = {}) => {
        setSearchParams(
            (prev) => {
                const next = new URLSearchParams(prev);
                next.set(key, value);
                return next;
            },
            { replace }
        );
    };
    const clearModalParam = (key) => {
        setSearchParams(
            (prev) => {
                const next = new URLSearchParams(prev);
                next.delete(key);
                return next;
            },
            { replace: true }
        );
    };

    const openProjectQuoteModal = () => setModalParam("quote", "project");
    const closeProjectQuoteModal = () => clearModalParam("quote");
    const openNextJsReportModal = () => setModalParam("report", "nextjs");
    const closeNextJsReportModal = () => clearModalParam("report");
    const openLcpImprovementModal = () => setModalParam("lcp", "improvement");
    const closeLcpImprovementModal = () => clearModalParam("lcp");
    const { t } = useTranslation();

    /** Preload modal images + chunk when deep-linked (?lcp=improvement) */
    useEffect(() => {
        if (isLcpImprovementOpen) runLcpImprovementWarmup();
    }, [isLcpImprovementOpen]);

    // 📍 REFS: Create references to DOM elements for GSAP animations
    // 💡 These refs allow us to control the animations of specific sections
    const section1Ref = useRef(null); // Reference to section 1 (not animated)
    const section2Ref = useRef(null); // Reference to section 2 (animated)
    const section3Ref = useRef(null); // Reference to section 3 (animated)
    const section4Ref = useRef(null); // Reference to section 4 (animated)
    const performanceSectionRef = useRef(null); // Reference to performance section for animation trigger
    const lcpScrollTimeoutRef = useRef(null);

    const scheduleLcpBlockScroll = () => {
        if (lcpScrollTimeoutRef.current) {
            clearTimeout(lcpScrollTimeoutRef.current);
        }
        lcpScrollTimeoutRef.current = setTimeout(() => {
            const lcpBlock = document.getElementById("section-2-lcp");
            if (!lcpBlock) return;
            const top =
                lcpBlock.getBoundingClientRect().top +
                window.scrollY -
                (motion.scrollOffsetLcp ?? motion.scrollOffsetMain);
            window.scrollTo({ top, behavior: "smooth" });
        }, 5000);
    };
    const [isPerformanceSectionVisible, setIsPerformanceSectionVisible] = useState(false); // Track performance section visibility

    const defaultSectionOrder = [1, 2, 3, 4];

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
        setActiveSection(sectionNumber);

        if (lcpScrollTimeoutRef.current) {
            clearTimeout(lcpScrollTimeoutRef.current);
            lcpScrollTimeoutRef.current = null;
        }

        // Beige desktop (hero visible): shuffle selected section under hero
        // Beige mobile + pink: section 1 plain scroll; 2–4 shuffle into 2nd row
        if (isBeigeLayout && isBeigeDesktopShuffle()) {
            animateBeigeSectionBelowHero(sectionNumber);
            return;
        }

        if (sectionNumber === 1) {
            const element = document.getElementById(`section-${sectionNumber}`);
            if (element) {
                const elementTop = element.offsetTop;
                const offset = motion.scrollOffsetMain;
                window.scrollTo({
                    top: elementTop - offset,
                    behavior: "smooth"
                });
            }
            return;
        }

        animateSectionToSecondRow(sectionNumber);
    };

    /** Beige hero (`hidden md:flex`) — desktop-only under-hero shuffle when visible */
    const isBeigeDesktopShuffle = () => {
        const heroEl = document.getElementById("section-hero");
        return Boolean(
            heroEl && window.getComputedStyle(heroEl).display !== "none"
        );
    };

    const getSectionHeightWithMargin = (element) => {
        if (!element) return 0;
        const elementHeight = element.offsetHeight;
        const styles = window.getComputedStyle(element);
        const marginTop = parseInt(styles.marginTop, 10) || 0;
        const marginBottom = parseInt(styles.marginBottom, 10) || 0;
        return elementHeight + marginTop + marginBottom;
    };

    const sectionRefById = {
        1: section1Ref,
        2: section2Ref,
        3: section3Ref,
        4: section4Ref,
    };

    /**
     * Beige desktop: move selected section to the first content slot (directly under hero).
     * 1) Scroll viewport to hero (so shuffle is visible after scrolling down)
     * 2) Keep hero locked under the navbar while 1–4 shuffle
     * (Beige mobile uses pink second-row shuffle instead.)
     */
    const animateBeigeSectionBelowHero = (sectionNumber) => {
        const naturalOrder = [1, 2, 3, 4];
        const refs = naturalOrder.map((id) => sectionRefById[id].current);
        if (!refs.every(Boolean)) return;

        const headerEl = document.querySelector(".header");
        const headerH = headerEl?.offsetHeight ?? 80;
        const heroEl = document.getElementById("section-hero");
        const anchorEl = heroEl;

        // Desired locked position: hero sits just under navbar
        const heroViewportTop = headerH;
        const lockHeroInViewport = () => {
            if (!anchorEl) return;
            const top = anchorEl.getBoundingClientRect().top;
            if (Math.abs(top - heroViewportTop) > 0.5) {
                window.scrollBy(0, top - heroViewportTop);
            }
        };

        const bringAnchorIntoView = () => {
            if (!anchorEl) return;
            const docTop = anchorEl.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: Math.max(0, docTop - headerH),
                behavior: "smooth",
            });
        };

        const heights = {};
        naturalOrder.forEach((id) => {
            heights[id] = getSectionHeightWithMargin(sectionRefById[id].current);
        });

        const naturalOffset = {};
        let running = 0;
        naturalOrder.forEach((id) => {
            naturalOffset[id] = running;
            running += heights[id];
        });

        const targetOrder = [
            sectionNumber,
            ...naturalOrder.filter((id) => id !== sectionNumber),
        ];

        const targetOffset = {};
        running = 0;
        targetOrder.forEach((id) => {
            targetOffset[id] = running;
            running += heights[id];
        });

        const targetSection = document.getElementById(`section-${sectionNumber}`);

        // First: pull viewport back to hero so the shuffle is on-screen
        bringAnchorIntoView();

        const runShuffle = () => {
            lockHeroInViewport();

            const tl = gsap.timeline({
                defaults: {
                    ease: motion.timelineDefaultEase,
                    duration: motion.timelineDefaultDuration,
                },
                onUpdate: lockHeroInViewport,
            });

            if (targetSection) {
                tl.to(targetSection, {
                    boxShadow: motion.glowColor,
                    borderRadius: "0px",
                    duration: motion.glowDuration,
                    ease: motion.timelineDefaultEase,
                });
            }

            resetAllSections({ skipNavReset: true, skipActiveReset: true });
            lockHeroInViewport();

            setTimeout(() => {
                lockHeroInViewport();
                const shuffleTl = gsap.timeline({
                    defaults: {
                        ease: motion.timelineDefaultEase,
                        duration: motion.sectionMoveDuration,
                        force3D: true,
                    },
                    onUpdate: lockHeroInViewport,
                    onComplete: lockHeroInViewport,
                });

                naturalOrder.forEach((id, i) => {
                    const y = targetOffset[id] - naturalOffset[id];
                    const el = sectionRefById[id].current;
                    if (i === 0) {
                        shuffleTl.to(el, { y });
                    } else {
                        shuffleTl.to(el, { y }, "<");
                    }
                });

                setSectionOrder(targetOrder);
            }, motion.resetBeforeShuffleMs);

            if (targetSection) {
                tl.to(
                    targetSection,
                    {
                        scale: 1.02,
                        duration: motion.scaleDuration,
                        ease: motion.timelineDefaultEase,
                    },
                    "-=0.5",
                );
                tl.to(
                    targetSection,
                    {
                        scale: 1,
                        duration: motion.scaleDuration,
                        ease: motion.timelineDefaultEase,
                    },
                    "-=0.1",
                );
                tl.to(
                    targetSection,
                    {
                        boxShadow: "none",
                        duration: motion.scaleDuration,
                        ease: motion.timelineDefaultEase,
                    },
                    "-=0.2",
                );
            }

            setTimeout(() => {
                shuffleNavigation(sectionNumber);
                lockHeroInViewport();
            }, motion.navShuffleDelayMs);
        };

        // Wait for smooth scroll toward hero, then shuffle + lock
        setTimeout(() => {
            runShuffle();
            // Section 2: 5s later, scroll to LCP block within the section
            if (sectionNumber === 2) {
                scheduleLcpBlockScroll();
            }
        }, motion.autoScrollDelayMs);
    };

    // 🔧 Pink: Sections 2-4 shuffle in order within fixed range (2nd row)
    const animateSectionToSecondRow = (sectionNumber) => {
        const allSections = [section2Ref.current, section3Ref.current, section4Ref.current];

        if (!allSections[0]) return;

        const tl = gsap.timeline({
            defaults: {
                ease: motion.timelineDefaultEase,
                duration: motion.timelineDefaultDuration
            }
        });

        const targetSection = document.getElementById(`section-${sectionNumber}`);
        tl.to(targetSection, {
            boxShadow: motion.glowColor,
            borderRadius: motion.sectionBorderRadius,
            duration: motion.glowDuration,
            ease: motion.timelineDefaultEase
        });

        const section2Height = getSectionHeightWithMargin(section2Ref.current);
        const section3Height = getSectionHeightWithMargin(section3Ref.current);
        const section4Height = getSectionHeightWithMargin(section4Ref.current);
        // Pink cards use margin gaps; beige mobile stack needs 0 for flush abutment.
        const shuffleGap = motion.secondRowShuffleGap ?? 40;
        const shuffleGapLong = motion.secondRowShuffleGapLong ?? shuffleGap * 2;

        if (sectionNumber === 2) {
            tl.to(section2Ref.current, { y: 0, duration: motion.sectionMoveDuration, ease: motion.timelineDefaultEase });
            tl.to(section3Ref.current, { y: 0, duration: motion.sectionMoveDuration, ease: motion.timelineDefaultEase }, "-=0.6");
            tl.to(section4Ref.current, { y: 0, duration: motion.sectionMoveDuration, ease: motion.timelineDefaultEase }, "-=0.6");
            setSectionOrder([1, 2, 3, 4]);
        } else if (sectionNumber === 3) {
            resetAllSections();

            setTimeout(() => {
                const shuffleTl = gsap.timeline({
                    defaults: {
                        ease: motion.timelineDefaultEase,
                        duration: motion.timelineDefaultDuration,
                        force3D: true
                    }
                });

                shuffleTl.to(section3Ref.current, { y: -section2Height + shuffleGap, duration: motion.sectionMoveDuration, ease: motion.timelineDefaultEase });
                shuffleTl.to(section2Ref.current, { y: section3Height - shuffleGap, duration: motion.sectionMoveDuration, ease: motion.timelineDefaultEase }, "-=0.6");
                setSectionOrder([1, 3, 2, 4]);
            }, motion.resetBeforeShuffleMs);

        } else if (sectionNumber === 4) {
            resetAllSections();

            setTimeout(() => {
                const shuffleTl = gsap.timeline({
                    defaults: {
                        ease: motion.timelineDefaultEase,
                        duration: motion.timelineDefaultDuration,
                        force3D: true
                    }
                });

                shuffleTl.to(section4Ref.current, { y: -(section2Height + section3Height) + shuffleGapLong, duration: motion.sectionMoveDuration, ease: motion.timelineDefaultEase });
                shuffleTl.to(section2Ref.current, { y: section4Height, duration: motion.sectionMoveDuration, ease: motion.timelineDefaultEase }, "-=0.6");
                shuffleTl.to(section3Ref.current, { y: section4Height, duration: motion.sectionMoveDuration, ease: motion.timelineDefaultEase }, "-=0.6");
                setSectionOrder([1, 4, 2, 3]);
            }, motion.resetBeforeShuffleMs);
        }

        tl.to(targetSection, {
            scale: 1.02,
            duration: motion.scaleDuration,
            ease: motion.timelineDefaultEase
        }, "-=0.5");

        tl.to(targetSection, {
            scale: 1,
            duration: motion.scaleDuration,
            ease: motion.timelineDefaultEase
        }, "-=0.1");

        tl.to(targetSection, {
            boxShadow: "none",
            duration: motion.scaleDuration,
            ease: motion.timelineDefaultEase
        }, "-=0.2");

        setTimeout(() => {
            shuffleNavigation(sectionNumber);
        }, motion.navShuffleDelayMs);

        setTimeout(() => {
            const section2Element = document.getElementById('section-2');
            if (section2Element) {
                const elementTop = section2Element.offsetTop;
                const offset = motion.scrollOffsetShuffle;
                window.scrollTo({
                    top: elementTop - offset,
                    behavior: "smooth"
                });
            }

            // Pink section 2: 5s later, scroll to LCP block within the section
            if (sectionNumber === 2) {
                scheduleLcpBlockScroll();
            }
        }, motion.autoScrollDelayMs);
    };

    // 🔄 NAVIGATION SHUFFLING FUNCTION: Reorders navigation buttons to match section order
    const shuffleNavigation = (selectedSection) => {
        const navContainer = document.querySelector(`#${navigationId} nav`);
        if (!navContainer) return;

        // Get all navigation buttons (excluding reset button)
        const navButtons = Array.from(navContainer.children).filter(child =>
            child.tagName === 'BUTTON' && !child.textContent.includes('●')
        );

        // Define new order based on selected section (content shuffle order)
        let newOrder;
        if (isBeigeLayout && isBeigeDesktopShuffle()) {
            // Selected rises to first slot (under hero); others keep relative order
            const rest = [1, 2, 3, 4].filter((id) => id !== selectedSection);
            newOrder = [selectedSection, ...rest];
        } else if (selectedSection === 2) {
            newOrder = [1, 2, 3, 4];
        } else if (selectedSection === 3) {
            newOrder = [1, 3, 2, 4];
        } else if (selectedSection === 4) {
            newOrder = [1, 4, 2, 3];
        } else {
            return;
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
                    duration: motion.navButtonDuration,
                    ease: motion.timelineDefaultEase,
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

    // 🔄 RESET FUNCTION: Reset shuffleable sections to original Y positions
    const resetAllSections = ({ skipNavReset = false, skipActiveReset = false } = {}) => {
        // Beige desktop shuffles 1–4; beige mobile + pink keep section 1 fixed
        const allSections =
            isBeigeLayout && isBeigeDesktopShuffle()
                ? [section1Ref.current, section2Ref.current, section3Ref.current, section4Ref.current]
                : [section2Ref.current, section3Ref.current, section4Ref.current];
        gsap.to(allSections, {
            y: 0,
            duration: motion.resetDuration,
            ease: motion.timelineDefaultEase
        });

        setSectionOrder(defaultSectionOrder);
        if (!skipActiveReset) {
            setActiveSection(1);
        }

        if (!skipNavReset) {
            resetNavigationButtons();
        }
    };

    // 🔄 NAVIGATION RESET FUNCTION: Restore navigation buttons to original order
    const resetNavigationButtons = () => {
        const navContainer = document.querySelector(`#${navigationId} nav`);
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
                    duration: motion.navButtonDuration,
                    ease: motion.timelineDefaultEase,
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
                            if (!gsap.isTweening(section1Ref.current) &&
                                !gsap.isTweening(section2Ref.current) &&
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
        return () => {
            if (lcpScrollTimeoutRef.current) {
                clearTimeout(lcpScrollTimeoutRef.current);
            }
        };
    }, []);

    // 🚀 INITIALIZATION: Set up GSAP animations when component first loads
    useEffect(() => {
        // Beige desktop shuffles section 1; beige mobile + pink keep section 1 fixed
        const entranceTargets =
            isBeigeLayout && isBeigeDesktopShuffle()
                ? [section1Ref.current, section2Ref.current, section3Ref.current, section4Ref.current]
                : [section2Ref.current, section3Ref.current, section4Ref.current];

        gsap.set(entranceTargets, {
            y: 0,
            opacity: 1
        });

        gsap.fromTo(entranceTargets,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                delay: 0.5,

            }
        );



        // 🧹 CLEANUP: Stop all animations when component unmounts (prevents memory leaks)
        return () => {
            gsap.killTweensOf([
                section1Ref.current,
                section2Ref.current,
                section3Ref.current,
                section4Ref.current,
            ]);
        };
    }, [isBeigeLayout]);

    // 📱 RESPONSIVE: on breakpoint cross, clear leftover shuffle Y (not opacity)
    useEffect(() => {
        let resizeTimeout;
        let wasBeigeDesktopShuffle =
            isBeigeLayout && isBeigeDesktopShuffle();

        const clearSectionShuffleY = () => {
            const targets = [
                section1Ref.current,
                section2Ref.current,
                section3Ref.current,
                section4Ref.current,
            ].filter(Boolean);
            // Kill only Y tweens so entrance opacity animations are not frozen at 0
            gsap.killTweensOf(targets, "y");
            gsap.set(targets, { y: 0 });
        };

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const nowBeigeDesktopShuffle =
                    isBeigeLayout && isBeigeDesktopShuffle();

                // Desktop→mobile: section1 may still hold beige-desktop shuffle Y
                if (wasBeigeDesktopShuffle && !nowBeigeDesktopShuffle) {
                    clearSectionShuffleY();
                }

                wasBeigeDesktopShuffle = nowBeigeDesktopShuffle;
                resetAllSections();
            }, 250);
        };

        window.addEventListener("resize", handleResize, { passive: true });
        resetAllSections();

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []); // resetAllSections omitted to avoid re-binding loop

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
                {isBeigeLayout ? (
                    <ServiceBeigeLayout
                        refs={{
                            section1Ref,
                            section2Ref,
                            section3Ref,
                            section4Ref,
                            performanceSectionRef,
                        }}
                        images={{ yimajiuniPark, nextEcomShopify, lcpPO }}
                        handlers={{
                            openLcpImprovementModal,
                            openNextJsReportModal,
                            openProjectQuoteModal,
                            runLcpImprovementWarmup,
                        }}
                        isPerformanceSectionVisible={isPerformanceSectionVisible}
                    />
                ) : (
                    <ServicePinkLayout
                        refs={{
                            section1Ref,
                            section2Ref,
                            section3Ref,
                            section4Ref,
                            performanceSectionRef,
                        }}
                        images={{ yimajiuniPark, nextEcomShopify, lcpPO }}
                        handlers={{
                            openLcpImprovementModal,
                            openNextJsReportModal,
                            openProjectQuoteModal,
                            runLcpImprovementWarmup,
                        }}
                        isPerformanceSectionVisible={isPerformanceSectionVisible}
                    />
                )}
                {/*
            <section className="mb-10">
                <Footer />
            </section>*/}

                {/* Bottom Navigation */}
                <section id={navigationId} className={classes.navigation}>
                    <div className={classes.navigationContent}>
                        <nav className={classes.navigationNav}>
                            {navSectionIds.map((sectionId, index) => {
                                return (
                                    <button
                                        key={sectionId}
                                        type="button"
                                        onClick={() => scrollToSection(sectionId)}
                                        className={`${classes.navigationButton} ${activeSection === sectionId
                                            ? classes.navigationButtonActive
                                            : classes.navigationButtonInactive
                                            }`}
                                    >
                                        {index === 0 && t('service.navigation.main')}
                                        {index === 1 && t('service.navigation.product')}
                                        {index === 2 && t('service.navigation.services')}
                                        {index === 3 && t('service.navigation.quote')}
                                    </button>
                                );
                            })}
                            {/* 🔄 RESET BUTTON: Click to reset all sections back to original positions */}
                            {/* 💡 This is useful for testing or if you want to reset the layout */}
                            <button
                                type="button"
                                onClick={resetAllSections}
                                className={classes.navigationReset}
                                title="Reset all sections to original positions"
                            >▩
                            </button>
                        </nav>
                    </div>
                </section>

                {/* Project quote popup — `/?quote=project` */}
                <Suspense fallback={<div className="fixed inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>}>
                    <ProjectQuote
                        isOpen={isProjectQuoteOpen}
                        onClose={closeProjectQuoteModal}
                    />
                </Suspense>

                {/* Next.js report popup — `/?report=nextjs` */}
                <Suspense fallback={<div className="fixed inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>}>
                    <NextJsReport
                        isOpen={isNextJsReportOpen}
                        onClose={closeNextJsReportModal}
                    />
                </Suspense>

                <Suspense fallback={<div className="fixed inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>}>
                    <LcpImprovement
                        isOpen={isLcpImprovementOpen}
                        onClose={closeLcpImprovementModal}
                    />
                </Suspense>

                {/* Fixed Decorative Buttons — pink only (beige: ServiceBeigeLayout) */}
                {!isBeigeLayout && (
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
                                onClick={openProjectQuoteModal}
                            >
                                {t('service.decorative.quoteLink')}
                            </div>
                        </div>
                    </div>
                )}
            </div >
        </>
    );
};

export default Service; 