import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Service = () => {
    const [activeSection, setActiveSection] = useState(1);
    const { t } = useTranslation();

    const scrollToSection = (sectionNumber) => {
        setActiveSection(sectionNumber);
        const element = document.getElementById(`section-${sectionNumber}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = [1, 2, 3, 4];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(`section-${sections[i]}`);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-pink-300/40 pt-8">
            {/* Section 1: Main Visual + Copy and CTA */}
            <section id="section-1" className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-6xl font-bold text-white mb-8">
                        {t('service.section1.title')}
                        <span className="blue-gradient_text block">{t('service.section1.titleHighlight')}</span>
                    </h1>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        {t('service.section1.description')}
                    </p>
                    <Link
                        to="section-4"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        {t('service.section1.cta')}
                    </Link>
                </div>
            </section>

            {/* Section 2: Product Introduction */}
            <section id="section-2" className="min-h-screen flex items-center px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                {t('service.section2.title')}
                            </h2>
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
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-4">{t('service.section2.demo.title')}</h3>
                                <p className="text-white/80 mb-6">
                                    {t('service.section2.demo.description')}
                                </p>
                                <a
                                    href="https://next-shopify.yimajiuni.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                                >
                                    {t('service.section2.demo.button')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Service Details */}
            <section id="section-3" className="min-h-screen flex items-center px-4 py-20">
                <div className="max-w-6xl mx-auto">
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
                            <div className="text-center">
                                <a
                                    href="https://qiita.com/YushiYamamoto/items/87310f85b9dc5d6f2767#%E6%9C%80%E5%BE%8C%E3%81%AB%E6%A5%AD%E5%8B%99%E5%A7%94%E8%A8%97%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87%E3%82%92%E6%89%BF%E3%82%8A%E3%81%BE%E3%81%99"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                                >
                                    {t('service.section3.performance.button')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Quotation App */}
            <section id="section-4" className="min-h-screen flex items-center px-4 py-20">
                <div className="max-w-4xl mx-auto w-full">
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
                            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                                {t('service.section4.calculator.button')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Bottom Navigation */}
            <section id="section-5" className="fixed bottom-0 left-0 right-0 h-24 bg-white/10 backdrop-blur-sm border-t border-white/20 z-50">
                <div className="h-full flex items-center justify-center">
                    <nav className="flex gap-8">
                        {[1, 2, 3, 4].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeSection === section
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
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default Service; 