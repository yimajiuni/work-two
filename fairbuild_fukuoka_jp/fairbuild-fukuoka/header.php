<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="robots" content="index, follow">
    
    <?php wp_head(); ?>
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="<?php echo get_template_directory_uri(); ?>/assets/fairbuild-fukuoka.svg">
    
    <!-- Open Graph Tags -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>">
    <meta property="og:title" content="<?php bloginfo('name'); ?> | <?php bloginfo('description'); ?>">
    <meta property="og:description" content="<?php bloginfo('description'); ?>">
    <meta property="og:locale" content="ja_JP">
    
    <!-- Structured Data (JSON-LD for Local Business) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "フェアビルド福岡",
      "image": "<?php echo get_template_directory_uri(); ?>/assets/fairbuild-fukuoka.svg",
      "@id": "<?php echo esc_url(home_url('/')); ?>",
      "url": "<?php echo esc_url(home_url('/')); ?>",
      "telephone": "+81-80-5797-9825",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "北九州市",
        "addressRegion": "福岡県",
        "postalCode": "808-0008",
        "addressCountry": "JP"
      },
      "description": "福岡で高品質な不動産サービスを提供するフェアビルド福岡です。"
    }
    </script>
</head>

<body <?php body_class(); ?>>
    <div class="landingpage">
        <header class="header" id="top">
            <div class="logo-area">
                <div class="header-logo" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/img/header-logo.png');"></div>
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <div class="header-company-name">フェアビルド福岡</div>
                </a>
            </div>

            <!-- hamburger button-->
            <div class="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="nav">
                <div class="nav-item">
                    <div class="link"><a href="<?php echo esc_url(home_url('/#property')); ?>">
                            <div class="menu-content">
                                <span class="menu-text">物件情報</span><br />
                                <span class="menu-text">Property Info</span>
                            </div>
                        </a>
                        <div class="vertical-divider"></div>
                    </div>
                </div>
                <div class="nav-item">
                    <div class="link"><a href="<?php echo esc_url(home_url('/#service')); ?>">
                            <div class="menu-content">
                                <span class="menu-text">事業内容</span><br />
                                <span class="menu-text">Services</span>
                            </div>
                        </a>
                        <div class="vertical-divider"></div>
                    </div>
                </div>
                <div class="nav-item">
                    <div class="link"><a href="<?php echo esc_url(home_url('/#support')); ?>">
                            <div class="menu-content">
                                <span class="menu-text">サポート</span><br />
                                <span class="menu-text">Support</span>
                            </div>
                        </a>
                        <div class="vertical-divider"></div>
                    </div>
                </div>
                <div class="nav-item">
                    <div class="link"><a href="<?php echo esc_url(get_blog_page_url()); ?>">
                            <div class="menu-content">
                                <span class="menu-text">不動産ブログ</span><br />
                                <span class="menu-text">News</span>
                            </div>
                        </a>
                        <div class="vertical-divider"></div>
                    </div>
                </div>
                <div class="nav-item">
                    <div class="link"><a href="<?php echo esc_url(get_contact_page_url()); ?>">
                            <div class="menu-content">
                                <span class="menu-text">お問い合わせ</span><br />
                                <span class="menu-text">Contact</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>

