import React from 'react';
import { useTranslation } from 'react-i18next';

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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#f9c6e1] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-t-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">
                            {safeTranslate('service.section3.performanceReport.title', 'Performance Report')}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-white/80 hover:text-white text-2xl transition-colors"
                        >
                            ×
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                    {/* Section 1 */}
                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section1.title', 'Section 1 Title')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {safeTranslate('service.section3.performanceReport.content.section1.description', 'Section 1 description placeholder')}
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section2.title', 'Section 2 Title')}
                        </h3>
                        <p className="text-gray-700 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section2.description', 'Section 2 description placeholder')}
                        </p>
                        <div className="space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.speed.title', 'Speed Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.speed.description', 'Speed benefit description placeholder')}
                                </p>
                            </div>
                            <div className="bg-pink-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-pink-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.design.title', 'Design Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.design.description', 'Design benefit description placeholder')}
                                </p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.stability.title', 'Stability Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section2.benefits.stability.description', 'Stability benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section3.title', 'Section 3 Title')}
                        </h3>
                        <div className="space-y-3">
                            {(() => {
                                try {
                                    const problems = t('service.section3.performanceReport.content.section3.problems', { returnObjects: true });
                                    if (Array.isArray(problems)) {
                                        return problems.map((problem, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <span className="text-red-500 text-xl">•</span>
                                                <p className="text-gray-700">{problem}</p>
                                            </div>
                                        ));
                                    } else {
                                        console.warn('Problems is not an array:', problems);
                                        return <p className="text-gray-700">Problems data not available</p>;
                                    }
                                } catch (error) {
                                    console.warn('Error loading problems:', error);
                                    return <p className="text-gray-700">Problems data not available</p>;
                                }
                            })()}
                        </div>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            {safeTranslate('service.section3.performanceReport.content.section3.explanation1', 'Explanation 1 placeholder')}
                        </p>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            {safeTranslate('service.section3.performanceReport.content.section3.explanation2', 'Explanation 2 placeholder')}
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section4.title', 'Section 4 Title')}
                        </h3>
                        <p className="text-gray-700 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section4.description', 'Section 4 description placeholder')}
                        </p>
                        <div className="space-y-4">
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-yellow-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section4.benefits.conversion.title', 'Conversion Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section4.benefits.conversion.description', 'Conversion benefit description placeholder')}
                                </p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-purple-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section4.benefits.performance.title', 'Performance Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section4.benefits.performance.description', 'Performance benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section5.title', 'Section 5 Title')}
                        </h3>
                        <p className="text-gray-700 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section5.description', 'Section 5 description placeholder')}
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">
                                {safeTranslate('service.section3.performanceReport.content.section5.ssg.title', 'SSG Title')}
                            </h4>
                            <p className="text-gray-700">
                                {safeTranslate('service.section3.performanceReport.content.section5.ssg.description', 'SSG description placeholder')}
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section6.title', 'Section 6 Title')}
                        </h3>
                        <p className="text-gray-700 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section6.description', 'Section 6 description placeholder')}
                        </p>
                        <div className="space-y-3">
                            {(() => {
                                try {
                                    const items = t('service.section3.performanceReport.content.section6.items', { returnObjects: true });
                                    if (Array.isArray(items)) {
                                        return items.map((item, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <input type="checkbox" className="mt-1 text-blue-600" />
                                                <p className="text-gray-700">{item}</p>
                                            </div>
                                        ));
                                    } else {
                                        console.warn('Items is not an array:', items);
                                        return <p className="text-gray-700">Checklist items not available</p>;
                                    }
                                } catch (error) {
                                    console.warn('Error loading items:', error);
                                    return <p className="text-gray-700">Checklist items not available</p>;
                                }
                            })()}
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section7.title', 'Section 7 Title')}
                        </h3>
                        <p className="text-gray-700 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section7.description1', 'Section 7 description 1 placeholder')}
                        </p>
                        <p className="text-gray-700 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section7.description2', 'Section 7 description 2 placeholder')}
                        </p>
                        <div className="space-y-4">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-indigo-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section7.benefits.design.title', 'Design Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section7.benefits.design.description', 'Design benefit description placeholder')}
                                </p>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-teal-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section7.benefits.marketing.title', 'Marketing Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section7.benefits.marketing.description', 'Marketing benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section8.title', 'Section 8 Title')}
                        </h3>
                        <p className="text-gray-700 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section8.description', 'Section 8 description placeholder')}
                        </p>
                        <div className="space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.seo.title', 'SEO Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.seo.description', 'SEO benefit description placeholder')}
                                </p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.scalability.title', 'Scalability Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.scalability.description', 'Scalability benefit description placeholder')}
                                </p>
                            </div>
                            <div className="bg-cyan-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-cyan-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.efficiency.title', 'Efficiency Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section8.benefits.efficiency.description', 'Efficiency benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section9.title', 'Section 9 Title')}
                        </h3>
                        <p className="text-gray-700 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section9.description', 'Section 9 description placeholder')}
                        </p>
                        <div className="space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.stressfree.title', 'Stress-Free Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.stressfree.description', 'Stress-free benefit description placeholder')}
                                </p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-purple-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.immersion.title', 'Immersion Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.immersion.description', 'Immersion benefit description placeholder')}
                                </p>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-indigo-800 mb-2">
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.trust.title', 'Trust Benefit Title')}
                                </h4>
                                <p className="text-gray-700">
                                    {safeTranslate('service.section3.performanceReport.content.section9.benefits.trust.description', 'Trust benefit description placeholder')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section10.title', 'Section 10 Title')}
                        </h3>
                        <p className="text-gray-700 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section10.description1', 'Section 10 description 1 placeholder')}
                        </p>
                        <p className="text-gray-700 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section10.description2', 'Section 10 description 2 placeholder')}
                        </p>
                        <p className="text-gray-700 mb-4">
                            {safeTranslate('service.section3.performanceReport.content.section10.description3', 'Section 10 description 3 placeholder')}
                        </p>
                        <p className="text-gray-700">
                            {safeTranslate('service.section3.performanceReport.content.section10.description4', 'Section 10 description 4 placeholder')}
                        </p>
                    </section>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 p-6 rounded-b-lg text-center">
                    <button
                        onClick={onClose}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        {safeTranslate('common.close', 'Close')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PerformanceReport; 