import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    author = 'Yuko Imai'
}) => {
    const siteName = 'Yimajiuni - Next.js Headless Commerce & Branding';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultDescription = 'Next.js developer and branding specialist based in Japan. Expert in building headless commerce solutions, e-commerce platforms, and brand identity design. Specializing in modern web architecture and creative digital experiences.';
    const defaultDescriptionJa = '日本のNext.js ECサイト構築、ブランディング、ヘッドレスコマースソリューション、Eコマースプラットフォーム、ブランドアイデンティティデザインの構築に特化。モダンなWebアーキテクチャとクリエイティブなデジタル体験を専門としています。';
    const defaultImage = 'https://yimajiuni.com/og-image.jpg';
    const defaultUrl = 'https://yimajiuni.com';

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description || defaultDescription} />
            <meta name="description" lang="ja" content={defaultDescriptionJa} />
            <meta name="keywords" content={keywords || 'next.js developer, headless commerce, e-commerce development, branding specialist, japan developer, web design, frontend engineer, shopify headless, brand identity, digital marketing, UI/UX design, react developer, japan, web development, portfolio'} />
            <meta name="keywords" lang="ja" content="next.js開発者, ヘッドレスコマース, ECサイト構築, ブランディング専門家, 日本開発者, Webデザイン, フロントエンドエンジニア, ショッピファイヘッドレス, ブランドアイデンティティ, デジタルマーケティング, UI/UXデザイン, React開発者, 日本, Web開発, ポートフォリオ" />
            <meta name="author" content={author} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url || defaultUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Canonical URL */}
            <link rel="canonical" href={url || defaultUrl} />
        </Helmet>
    );
};

export default SEO; 