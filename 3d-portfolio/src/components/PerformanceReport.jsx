import React from 'react';
import { useTranslation } from 'react-i18next';

// Consolidated Tailwind classes for better performance
const classes = {
    // Modal overlay
    modalOverlay: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4",

    // Main container
    mainContainer: "bg-[#f9c6e1] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto",

    // Header
    header: "sticky top-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-t-lg z-10",
    headerContent: "flex justify-between items-center",
    headerTitle: "text-2xl font-bold",
    closeButton: "text-white/80 hover:text-white text-2xl transition-colors",

    // Content wrapper
    content: "p-6 space-y-8 relative z-0",

    // Section styles
    section: "space-y-4",
    sectionTitle: "text-xl font-bold text-gray-800 mb-4",
    sectionSubtitle: "text-xl text-gray-800 mb-4",

    // Card styles with gradient
    card: "bg-gradient-to-r from-white/20 to-white/50 border border-white/20 p-4 rounded-lg",
    cardWithMargin: "bg-gradient-to-r from-white/20 to-white/50 border border-white/20 p-4 rounded-lg mb-4",

    // Text styles
    textGray: "text-gray-700",
    textGrayLeading: "text-gray-700 leading-relaxed",
    textGrayMargin: "text-gray-700 mb-4",

    // Grid layouts
    grid3Col: "grid md:grid-cols-3 gap-6",
    grid2Col: "grid md:grid-cols-2 gap-6",

    // Rounded cards with gradient
    roundedCard: "bg-gradient-to-r from-white/20 to-white/50 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex flex-col items-center justify-center text-center",
    roundedCardSmall: "bg-gradient-to-r from-white/20 to-white/50 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex flex-col items-center justify-center text-center",

    // Benefit cards with gradient
    benefitCard: "bg-gradient-to-r from-white/20 to-white/50 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex flex-col items-center justify-center text-center",
    benefitTitle: "font-semibold text-blue-500 mb-3",
    benefitText: "text-gray-700 text-sm",

    // Section 3 specific cards with gradient
    section3Card: "bg-gradient-to-r from-white/50 to-white/80 p-4 rounded-lg",
    section3Title: "font-semibold mb-2",
    section3Text: "text-gray-700",

    // Problem list
    problemList: "space-y-3",
    problemItem: "flex items-start space-x-3",
    problemBullet: "text-red-500 text-xl",
    problemText: "text-gray-700",

    // Table styles with gradient
    tableContainer: "overflow-x-auto",
    table: "min-w-full bg-gradient-to-r from-white/50 to-white/70 rounded-lg",
    tableHeader: "bg-blue-50",
    tableHeaderCell: "px-4 py-2 text-left text-gray-700 font-semibold",
    tableRow: "border-b border-gray-200",
    tableCell: "px-4 py-2 text-gray-700",
    tableCellGray: "px-4 py-2 text-gray-600",
    tableCellPink: "px-4 py-2 text-pink-600 font-semibold",

    // Checklist with gradient
    checklistContainer: "bg-gradient-to-r from-white/20 to-white/50 border border-white/20 p-4 rounded-lg",
    checklistList: "space-y-3",
    checklistItem: "flex items-start space-x-3",
    checklistCheckbox: "mt-1 text-blue-600",
    checklistText: "text-gray-700",

    // Footer
    footer: "gradient-to-r from-white to bg-pink-100 p-6 rounded-b-lg text-center",
    footerButton: "bg-white to-blue-600 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105",

    // Section 10 special styling
    section10Container: "bg-gradient-to-r from-white to-blue-100 p-6 rounded-lg",

    // Colors for section 3 cards
    colors: {
        pink: "text-pink-800",
        yellow: "text-yellow-800",
        purple: "text-purple-800",
        blue: "text-blue-500"
    }
};

const PerformanceReport = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();

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
            <div className={classes.mainContainer}>
                {/* Header */}
                <div className={classes.header}>
                    <div className={classes.headerContent}>
                        <h2 className={classes.headerTitle}>
                            {safeTranslate('service.section3.performanceReport.title', 'Performance Report')}
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
                    <section>
                        <h3 className={classes.sectionTitle}>
                            {safeTranslate('service.section3.performanceReport.content.section1.title', 'Section 1 Title')}
                        </h3>
                        <p className={classes.textGrayLeading}>
                            {safeTranslate('service.section3.performanceReport.content.section1.description', 'Section 1 description placeholder')}
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h3 className={classes.sectionTitle}>
                            {safeTranslate('service.section3.performanceReport.content.section2.title', 'Section 2 Title')}
                        </h3>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section2.description', 'Section 2 description placeholder')}
                        </p>
                        <div className={classes.grid3Col}>
                            <div className={classes.roundedCard}>
                                <h4 className={classes.benefitTitle}>
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.speed.title', 'Speed Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.speed.description', 'Speed benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.roundedCard}>
                                <h4 className={classes.benefitTitle}>
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.design.title', 'Design Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.design.description', 'Design benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.roundedCard}>
                                <h4 className={classes.benefitTitle}>
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.stability.title', 'Stability Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.stability.description', 'Stability benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h3 className={classes.sectionTitle}>
                            {safeTranslate('service.section3.performanceReport.content.section3.title', 'Section 3 Title')}
                        </h3>
                        <div className={classes.section}>
                            <div className={classes.section3Card}>
                                <h4 className={`${classes.section3Title} ${classes.colors.blue}`}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.isr.title', 'ISR Benefit Title')}
                                </h4>
                                <p className={classes.section3Text}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.isr.description', 'ISR benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.section3Card}>
                                <h4 className={`${classes.section3Title} ${classes.colors.blue}`}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.conversion.title', 'Conversion Benefit Title')}
                                </h4>
                                <p className={classes.section3Text}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.conversion.description', 'Conversion benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.section3Card}>
                                <h4 className={`${classes.section3Title} ${classes.colors.blue}`}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.performance.title', 'Performance Benefit Title')}
                                </h4>
                                <p className={classes.section3Text}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.performance.description', 'Performance benefit description placeholder')}
                                </p>
                            </div>

                            <div className={classes.section3Card}>
                                <h4 className={`${classes.section3Title} ${classes.colors.blue}`}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.ssg.title', 'SSG Title')}
                                </h4>
                                <p className={classes.section3Text}>
                                    {safeTranslate('service.section3.performanceReport.content.section3.benefits.ssg.description', 'SSG description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h3 className={classes.sectionTitle}>
                            {safeTranslate('service.section3.performanceReport.content.section4.title', 'Section 4 Title')}
                        </h3>

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
                    <section className='font-bold space-y-4'>
                        <h3 className={classes.sectionSubtitle}>
                            {safeTranslate('service.section3.performanceReport.content.section5.title', 'Section 6 Title')}
                        </h3>
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
                        <div className={classes.cardWithMargin}>
                            <h4 className="font-semibold text-gray-800 mb-3">
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
                    <section>
                        <h3 className={classes.sectionTitle}>
                            {safeTranslate('service.section3.performanceReport.content.section6.title', 'Section 6 Title')}
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
                    <section>
                        <h3 className={classes.sectionTitle}>
                            {safeTranslate('service.section3.performanceReport.content.section7.title', 'Section 7 Title')}
                        </h3>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section7.description1', 'Section 7 description 1 placeholder')}
                        </p>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section7.description2', 'Section 7 description 2 placeholder')}
                        </p>
                        <div className={classes.grid2Col}>
                            <div className={classes.benefitCard}>
                                <h4 className={classes.benefitTitle}>
                                    {safeTranslate('service.section3.performanceReport.content.section7.benefits.design.title', 'Design Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section7.benefits.design.description', 'Design benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.benefitCard}>
                                <h4 className={classes.benefitTitle}>
                                    {safeTranslate('service.section3.performanceReport.content.section7.benefits.marketing.title', 'Marketing Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section7.benefits.marketing.description', 'Marketing benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h3 className={classes.sectionTitle}>
                            {safeTranslate('service.section3.performanceReport.content.section8.title', 'Section 8 Title')}
                        </h3>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section8.description', 'Section 8 description placeholder')}
                        </p>
                        <div className={classes.grid3Col}>
                            <div className={classes.roundedCardSmall}>
                                <h4 className={classes.benefitTitle}>
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.seo.title', 'SEO Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.seo.description', 'SEO benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.roundedCardSmall}>
                                <h4 className={classes.benefitTitle}>
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.scalability.title', 'Scalability Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.scalability.description', 'Scalability benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.roundedCardSmall}>
                                <h4 className={classes.benefitTitle}>
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.efficiency.title', 'Efficiency Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.efficiency.description', 'Efficiency benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h3 className={classes.sectionTitle}>
                            {safeTranslate('service.section3.performanceReport.content.section9.title', 'Section 9 Title')}
                        </h3>
                        <p className={classes.textGrayMargin}>
                            {safeTranslate('service.section3.performanceReport.content.section9.description', 'Section 9 description placeholder')}
                        </p>
                        <div className={classes.grid3Col}>
                            <div className={classes.roundedCardSmall}>
                                <h4 className={classes.benefitTitle}>
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.stressfree.title', 'Stress-Free Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.stressfree.description', 'Stress-free benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.roundedCardSmall}>
                                <h4 className={classes.benefitTitle}>
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.immersion.title', 'Immersion Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.immersion.description', 'Immersion benefit description placeholder')}
                                </p>
                            </div>
                            <div className={classes.roundedCardSmall}>
                                <h4 className={classes.benefitTitle}>
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.trust.title', 'Trust Benefit Title')}
                                </h4>
                                <p className={classes.benefitText}>
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.trust.description', 'Trust benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section className={classes.section10Container}>
                        <h3 className={classes.sectionTitle}>
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
                        <p className={classes.textGray}>
                            {safeTranslate('service.section3.performanceReport.content.section10.description4', 'Section 10 description 4 placeholder')}
                        </p>
                    </section>
                </div>

                {/* Footer */}
                <div className={classes.footer}>
                    <button
                        onClick={onClose}
                        className={classes.footerButton}
                    >
                        {safeTranslate('common.close', 'Close')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PerformanceReport; 