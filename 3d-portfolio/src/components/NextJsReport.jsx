import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Component to render text with horizontal mirror reflection on hover
const TitleWithReflection = ({ children }) => (
    <span className="reflection-wrapper relative inline-block">
        {children}
        <span
            className="reflection-text absolute left-0 opacity-0 transition-opacity duration-400 pointer-events-none"
            style={{
                transform: 'scaleY(-1)',
                transformOrigin: 'top center'
            }}
        >
            {children}
        </span>
    </span>
);
// Component to render text with horizontal mirror reflection on hover
const TitleWithReflectionMedium = ({ children }) => (
    <span className="reflection-wrapper relative inline-block">
        {children}
        <span
            className="reflection-text-medium absolute left-0 opacity-0 transition-opacity duration-400 pointer-events-none"
            style={{
                transform: 'scaleY(-1)',
                transformOrigin: 'top center'
            }}
        >
            {children}
        </span>
    </span>
);
// Component to render text with horizontal mirror reflection on hover
const TitleWithReflectionBig = ({ children }) => (
    <span className="reflection-wrapper relative inline-block">
        {children}
        <span
            className="reflection-text-big absolute left-0 opacity-0 transition-opacity duration-400 pointer-events-none"
            style={{
                transform: 'scaleY(-1)',
                transformOrigin: 'top center'
            }}
        >
            {children}
        </span>
    </span>
);

// Component to render text with horizontal mirror reflection on hover
const TitleWithReflectionSmall = ({ children }) => (
    <span className="reflection-wrapper relative inline-block">
        {children}
        <span
            className="reflection-text-small absolute left-0 opacity-0 transition-opacity duration-400 pointer-events-none"
            style={{
                transform: 'scaleY(-1)',
                transformOrigin: 'top center'
            }}
        >
            {children}
        </span>
    </span>
);
// Consolidated Tailwind classes for better performance
const classes = {
    // Modal overlay
    modalOverlay: "fixed inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center p-4",

    // Main container
    mainContainer: "border border-gray-500 bg-[#f9c6e1] backdrop-blur-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg",

    // Header
    header: "overflow-hidden sticky top-0 bg-white/20 backdrop-blur-sm border-b border-gray-500 text-blue-600 p-6 rounded-t-lg z-10",
    headerContent: "flex justify-between items-center",
    headerTitle: "text-2xl font-bold mb-4",
    closeButton: "text-blue-600 hover:text-white text-2xl transition-colors",

    // Content wrapper
    content: "p-6 space-y-8 relative z-0",

    // Section styles
    section: "space-y-4",
    sectionTitle: "text-3xl font-bold text-gray-800 mb-4 sm:mb-12 font-title",
    sectionSubtitle: "text-xl text-gray-800 mb-4",

    // Card styles with gradient
    card: " border-b border-gray-500 p-4",
    cardWithMargin: " border-b border-gray-500 p-4 mb-4",

    // Text styles
    textGray: "text-gray-700",
    textGrayLeading: "text-gray-700 leading-relaxed pb-4 border-b border-gray-500",
    textGrayMargin: "text-gray-700 mb-4",

    // Grid layouts
    grid3Col: "grid md:grid-cols-3 gap-6",
    grid2Col: "grid md:grid-cols-2 gap-6",

    // Rounded cards with gradient
    roundedCard: "p-6 border-b border-r bg-white/30 border-gray-500 flex flex-col items-center justify-center text-center",
    roundedCardSmall: "p-6 border-b border-r bg-white/30 border-gray-500 flex flex-col items-center justify-center text-center",

    // Benefit cards with gradient
    benefitCard: "p-6 border-b border-r bg-white/30 border-gray-500 flex flex-col items-center justify-center text-center",
    benefitTitle: "font-semibold text-blue-600 mb-3",
    benefitText: "text-gray-700 text-sm",

    // Section 3 specific cards with gradient
    section3Card: "border-b border-gray-500 p-4",
    section3Title: "font-semibold mb-2",
    section3Text: "text-gray-700",

    // Problem list
    problemList: "space-y-3",
    problemItem: "flex items-start space-x-3",
    problemBullet: "text-black text-xl",
    problemText: "text-gray-700",

    // Table styles with gradient
    TablecardWithMargin: " border-b border-gray-500 pt-4 sm:pt-0 p-0 sm:p-4 mb-4",
    tableContainer: "overflow-x-auto bg-white/30",
    table: "min-w-full",
    tableHeader: "bg-white/50",
    tableHeaderCell: "px-4 py-2 text-left text-gray-700 font-semibold",
    tableRow: "border-b border-gray-500",
    tableCell: "px-4 py-2 text-gray-700",
    tableCellGray: "px-4 py-2 text-gray-600",
    tableCellPink: "px-4 py-2 text-pink-600 font-semibold",

    // Checklist with gradient
    checklistContainer: "border-b border-gray-500 p-4",
    checklistList: "space-y-3",
    checklistItem: "flex items-start space-x-3",
    checklistCheckbox: "mt-1 text-blue-600",
    checklistText: "text-gray-700",

    // Section 10 special styling
    section10Container: "border border-gray-500 bg-white/30 p-6",

    // Footer
    footer: "bg-white/20 backdrop-blur-sm border-t border-gray-500 p-6 rounded-b-lg",
    footerContainer: "flex justify-between items-center",
    footerButtonContainer: "max-w-screen-lg mx-auto flex justify-left gap-4 items-center",
    footerButton: "bg-white text-blue-600 px-2 sm:px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 rounded-lg",
    footerButtonContact: "bg-blue-500 bg-white text-blue-600 px-2 sm:px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 rounded-lg",
    footerButtonClose: "bg-white text-blue-600 px-2 sm:px-6 py-3 min-w-10 font-semibold transition-all duration-300 hover:scale-105 rounded-lg",


    // Colors for section 3 cards
    colors: {
        pink: "text-pink-800",
        yellow: "text-yellow-800",
        purple: "text-purple-800",
        blue: "text-blue-600"
    }
};

const NextJsReport = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();

    // Inline style for font-family to ensure proper language-specific font loading
    // Utsukushi for Japanese, IrvinHeading for English (same pattern as Crimson Pro/YuGothic)
    const titleFontStyle = i18n.language === 'jp'
        ? { fontFamily: '"Utsukushi", "YuGothic", "游ゴシック", sans-serif' }
        : { fontFamily: '"IrvinHeading", "Crimson Pro", sans-serif' };

    // Refs for each section to apply parallax effect
    const mainContainerRef = useRef(null);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const section7Ref = useRef(null);
    const section8Ref = useRef(null);
    const section9Ref = useRef(null);
    const section10Ref = useRef(null);

    // Apply parallax effect to all sections
    useEffect(() => {
        if (!isOpen) return;

        const sections = [
            section1Ref.current,
            section2Ref.current,
            section3Ref.current,
            section4Ref.current,
            section5Ref.current,
            section6Ref.current,
            section7Ref.current,
            section8Ref.current,
            section9Ref.current,
            section10Ref.current
        ];

        sections.forEach((section) => {
            if (!section || !mainContainerRef.current) return;

            gsap.fromTo(section,
                { scale: 0.75 },
                {
                    scale: 1,
                    scrollTrigger: {
                        trigger: section,
                        scroller: mainContainerRef.current,
                        start: "top 80%",
                        end: "top 10%",
                        scrub: 1,
                    }
                }
            );
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Helper function to safely get translation with fallback
    const safeTranslate = (key, fallback = key) => {
        try {
            const translation = t(key);
            return translation === key ? fallback : translation;
        } catch (error) {
            console.warn(`Translation error for key "${key}":`, error);
            return fallback;
        }
    };

    return (
        <div className={classes.modalOverlay}>
            <div ref={mainContainerRef} className={classes.mainContainer}>
                {/* Header */}
                <div className={classes.header}>
                    <div className={classes.headerContent}>
                        <h2 className={classes.headerTitle} style={titleFontStyle}>
                            <TitleWithReflection>
                                {safeTranslate('service.section3.performanceReport.title', 'Performance Report')}
                            </TitleWithReflection>
                        </h2>
                        <button
                            onClick={onClose}
                            className={classes.closeButton}
                        >
                            ×
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className={classes.content}>
                    {/* Section 1 */}
                    <section ref={section1Ref}>
                        <h3 className={classes.sectionTitle} style={titleFontStyle}>
                            <TitleWithReflection>
                                {safeTranslate('service.section3.performanceReport.content.section1.title', 'Section 1 Title')}
                            </TitleWithReflection>
                        </h3>
                        <p className={classes.textGrayLeading}>
                            {safeTranslate('service.section3.performanceReport.content.section1.description', 'Section 1 description placeholder')}
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section ref={section2Ref}>
                        <TitleWithReflectionMedium>
                            <h3 className={classes.sectionTitle} style={titleFontStyle}>
                                {safeTranslate('service.section3.performanceReport.content.section2.title', 'Section 2 Title')}
                            </h3>
                        </TitleWithReflectionMedium>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section2.description', 'Section 2 description placeholder')}
                        </p>
                        <div className={classes.grid3Col}>
                            <div className={classes.roundedCard}>
                                <h4 className={classes.benefitTitle} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.speed.title', 'Speed Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.speed.description', 'Speed benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.roundedCard}>
                                <h4 className={classes.benefitTitle} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.design.title', 'Design Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.design.description', 'Design benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.roundedCard}>
                                <h4 className={classes.benefitTitle} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.stability.title', 'Stability Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.stability.description', 'Stability benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section ref={section3Ref}>
                        <TitleWithReflectionSmall>
                            <h3 className={classes.sectionTitle} style={titleFontStyle}>
                                {safeTranslate('service.section3.performanceReport.content.section3.title', 'Section 3 Title')}
                            </h3>
                        </TitleWithReflectionSmall>
                        <div className={classes.section}>
                            <div className={classes.section3Card}>
                                <h4 className={`${classes.section3Title} ${classes.colors.blue}`} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.isr.title', 'ISR Benefit Title')}
                                </h4>
                                <p className={classes.section3Text}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.isr.description', 'ISR benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.section3Card}>
                                <h4 className={`${classes.section3Title} ${classes.colors.blue}`} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.conversion.title', 'Conversion Benefit Title')}
                                </h4>
                                <p className={classes.section3Text}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.conversion.description', 'Conversion benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.section3Card}>
                                <h4 className={`${classes.section3Title} ${classes.colors.blue}`} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.performance.title', 'Performance Benefit Title')}
                                </h4>
                                <p className={classes.section3Text}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.performance.description', 'Performance benefit description placeholder')}
                                </p>
                            </div>

                            <div className={classes.section3Card}>
                                <h4 className={`${classes.section3Title} ${classes.colors.blue}`} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.ssg.title', 'SSG Title')}
                                </h4>
                                <p className={classes.section3Text}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.ssg.description', 'SSG description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section ref={section4Ref}>
                        <TitleWithReflectionMedium>
                            <h3 className={classes.sectionTitle} style={titleFontStyle}>
                                {safeTranslate('service.section3.performanceReport.content.section4.title', 'Section 4 Title')}
                            </h3>
                        </TitleWithReflectionMedium>
                        <div className={classes.problemList}>
                            {(() => {
                                try {
                                    const problems = t('service.section3.performanceReport.content.section4.problems', { returnObjects: true });
                                    if (Array.isArray(problems)) {
                                        return problems.map((problem, index) => (
                                            <div key={index} className={classes.problemItem}>
                                                <span className={classes.problemBullet}>•</span>
                                                <p className={classes.problemText}>{problem}</p>
                                            </div>
                                        ));
                                    } else {
                                        console.warn('Problems is not an array:', problems);
                                        return <p className={classes.textGray}>Problems data not available</p>;
                                    }
                                } catch (error) {
                                    console.warn('Error loading problems:', error);
                                    return <p className={classes.textGray}>Problems data not available</p>;
                                }
                            })()}
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section ref={section5Ref} className='font-bold space-y-4'>
                        <TitleWithReflectionSmall>
                            <h3 className={classes.sectionTitle} style={titleFontStyle}>
                                {safeTranslate('service.section3.performanceReport.content.section5.title', 'Section 6 Title')}
                            </h3>
                        </TitleWithReflectionSmall>
                        <div className={classes.card}>
                            <p className={classes.textGrayMargin}>
                                {safeTranslate('service.section3.performanceReport.content.section5.case1', 'Section 6 case 1')}
                            </p>
                        </div>
                        <div className={classes.card}>
                            <p className={classes.textGrayMargin}>
                                {safeTranslate('service.section3.performanceReport.content.section5.case2', 'Section 6 case 2')}
                            </p>
                        </div>

                        {/* Simple Table */}
                        <div className={classes.TablecardWithMargin}>
                            <h4 className="px-4 font-semibold text-blue-600 mb-3" style={titleFontStyle}>
                                {safeTranslate('service.section3.performanceReport.content.section5.table.title', 'Performance Comparison Table')}
                            </h4>
                            <div className={classes.tableContainer}>
                                <table className={classes.table}>
                                    <thead>
                                        <tr className={classes.tableHeader}>
                                            <th className={classes.tableHeaderCell}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.headers.metric', 'Metric')}
                                            </th>
                                            <th className={classes.tableHeaderCell}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.headers.traditional', 'Traditional')}
                                            </th>
                                            <th className={classes.tableHeaderCell}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.headers.nextjs', 'Next.js + Shopify')}
                                            </th>
                                            <th className={classes.tableHeaderCell}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.headers.improvement', 'Improvement')}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={classes.tableRow}>
                                            <td className={classes.tableCell}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.loadingSpeed.label', 'Loading Speed')}
                                            </td>
                                            <td className={classes.tableCellGray}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.loadingSpeed.traditional', '3-5 seconds')}
                                            </td>
                                            <td className={classes.tableCellPink}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.loadingSpeed.nextjs', '0.5-1 second')}
                                            </td>
                                            <td className={classes.tableCellPink}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.loadingSpeed.improvement', '+80%')}
                                            </td>
                                        </tr>
                                        <tr className={classes.tableRow}>
                                            <td className={classes.tableCell}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.conversionRate.label', 'Conversion Rate')}
                                            </td>
                                            <td className={classes.tableCellGray}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.conversionRate.traditional', '1.9%')}
                                            </td>
                                            <td className={classes.tableCellPink}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.conversionRate.nextjs', '3.2%')}
                                            </td>
                                            <td className={classes.tableCellPink}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.conversionRate.improvement', '+68%')}
                                            </td>
                                        </tr>
                                        <tr className={classes.tableRow}>
                                            <td className={classes.tableCell}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.mobileBounce.label', 'Mobile Bounce')}
                                            </td>
                                            <td className={classes.tableCellGray}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.mobileBounce.traditional', '65%')}
                                            </td>
                                            <td className={classes.tableCellPink}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.mobileBounce.nextjs', '45%')}
                                            </td>
                                            <td className={classes.tableCellPink}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.mobileBounce.improvement', '-31%')}
                                            </td>
                                        </tr>
                                        <tr className={classes.tableRow}>
                                            <td className={classes.tableCell}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.seoRanking.label', 'SEO Ranking')}
                                            </td>
                                            <td className={classes.tableCellGray}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.seoRanking.traditional', 'Rank 22')}
                                            </td>
                                            <td className={classes.tableCellPink}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.seoRanking.nextjs', 'Rank 7')}
                                            </td>
                                            <td className={classes.tableCellPink}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.seoRanking.improvement', '+15 positions')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.tableCell}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.serverCost.label', 'Server Cost')}
                                            </td>
                                            <td className={classes.tableCellGray}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.serverCost.traditional', '$4,500/month')}
                                            </td>
                                            <td className={classes.tableCellPink}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.serverCost.nextjs', '$2,800/month')}
                                            </td>
                                            <td className={classes.tableCellPink}>
                                                {safeTranslate('service.section3.performanceReport.content.section5.table.metrics.serverCost.improvement', '-38%')}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={classes.card}>
                            <p className={classes.textGrayMargin}>
                                {safeTranslate('service.section3.performanceReport.content.section5.return', 'Section 6 return')}
                            </p>
                        </div>
                        <div className={classes.card}>
                            <p className={classes.textGrayMargin}>
                                {safeTranslate('service.section3.performanceReport.content.section5.comparison', 'Section 6 comparison')}
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section ref={section6Ref}>
                        <h3 className={classes.sectionTitle} style={titleFontStyle}>
                            <TitleWithReflection>
                                {safeTranslate('service.section3.performanceReport.content.section6.title', 'Section 6 Title')}
                            </TitleWithReflection>
                        </h3>
                        <div className={classes.checklistContainer}>
                            <div className={classes.checklistList}>
                                {(() => {
                                    try {
                                        const items = t('service.section3.performanceReport.content.section6.items', { returnObjects: true });
                                        if (Array.isArray(items)) {
                                            return items.map((item, index) => (
                                                <div key={index} className={classes.checklistItem}>
                                                    <input type="checkbox" className={classes.checklistCheckbox} />
                                                    <p className={classes.checklistText}>{item}</p>
                                                </div>
                                            ));
                                        } else {
                                            console.warn('Items is not an array:', items);
                                            return <p className={classes.textGray}>Checklist items not available</p>;
                                        }
                                    } catch (error) {
                                        console.warn('Error loading items:', error);
                                        return <p className={classes.textGray}>Checklist items not available</p>;
                                    }
                                })()}
                            </div>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section ref={section7Ref}>
                        <h3 className={classes.sectionTitle} style={titleFontStyle}>
                            <TitleWithReflection>
                                {safeTranslate('service.section3.performanceReport.content.section7.title', 'Section 7 Title')}
                            </TitleWithReflection>
                        </h3>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section7.description1', 'Section 7 description 1 placeholder')}
                        </p>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section7.description2', 'Section 7 description 2 placeholder')}
                        </p>
                        <div className={classes.grid2Col}>
                            <div className={classes.benefitCard}>
                                <h4 className={classes.benefitTitle} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section7.benefits.design.title', 'Design Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section7.benefits.design.description', 'Design benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.benefitCard}>
                                <h4 className={classes.benefitTitle} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section7.benefits.marketing.title', 'Marketing Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section7.benefits.marketing.description', 'Marketing benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section ref={section8Ref}>
                        <h3 className={classes.sectionTitle} style={titleFontStyle}>
                            <TitleWithReflection>
                                {safeTranslate('service.section3.performanceReport.content.section8.title', 'Section 8 Title')}
                            </TitleWithReflection>
                        </h3>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section8.description', 'Section 8 description placeholder')}
                        </p>
                        <div className={classes.grid3Col}>
                            <div className={classes.roundedCardSmall}>
                                <h4 className={classes.benefitTitle} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.seo.title', 'SEO Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.seo.description', 'SEO benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.roundedCardSmall}>
                                <h4 className={classes.benefitTitle} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.scalability.title', 'Scalability Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.scalability.description', 'Scalability benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.roundedCardSmall}>
                                <h4 className={classes.benefitTitle} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.efficiency.title', 'Efficiency Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.efficiency.description', 'Efficiency benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section ref={section9Ref}>
                        <h3 className={classes.sectionTitle} style={titleFontStyle}>
                            <TitleWithReflection>
                                {safeTranslate('service.section3.performanceReport.content.section9.title', 'Section 9 Title')}
                            </TitleWithReflection>
                        </h3>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section9.description', 'Section 9 description placeholder')}
                        </p>
                        <div className={classes.grid3Col}>
                            <div className={classes.roundedCardSmall}>
                                <h4 className={classes.benefitTitle} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.stressfree.title', 'Stress-Free Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.stressfree.description', 'Stress-free benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.roundedCardSmall}>
                                <h4 className={classes.benefitTitle} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.immersion.title', 'Immersion Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.immersion.description', 'Immersion benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.roundedCardSmall}>
                                <h4 className={classes.benefitTitle} style={titleFontStyle}>
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.trust.title', 'Trust Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.trust.description', 'Trust benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section ref={section10Ref} className={classes.section10Container}>
                        <h3 className={classes.sectionTitle} style={titleFontStyle}>
                            {safeTranslate('service.section3.performanceReport.content.section10.title', 'Section 10 Title')}
                        </h3>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section10.description1', 'Section 10 description 1 placeholder')}
                        </p>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section10.description2', 'Section 10 description 2 placeholder')}
                        </p>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section10.description3', 'Section 10 description 3 placeholder')}
                        </p>
                    </section>
                </div>

                {/* Footer */}
                <div className={classes.footer}>
                    <div className={classes.footerContainer}>
                        <div className={classes.footerButtonContainer}>

                            {/* Ask Quote Button */}
                            <a
                                // The link will navigate to the service page quote section
                                href="/?quote=project"
                                onClick={() => {
                                    // Close the NextJsReport modal
                                    onClose();
                                }}
                                className={classes.footerButton}
                                style={titleFontStyle}
                            >
                                {safeTranslate('service.section3.performanceReport.content.footer.askQuote', 'Ask Quote')}
                            </a>
                            {/* Contact Us Button */}
                            <a
                                href="/contact"
                                className={classes.footerButtonContact}
                                style={titleFontStyle}
                            >
                                {safeTranslate('service.section3.performanceReport.content.footer.contactUs')}
                            </a>


                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className={classes.footerButtonClose}
                                style={titleFontStyle}
                            >
                                {safeTranslate('service.section3.performanceReport.content.footer.close')}
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default NextJsReport; 