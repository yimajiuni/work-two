        <footer class="footer">
            <div class="footer-main">
                <div class="footer-logo">
                    <img class="footer-logo-img" src="<?php echo get_template_directory_uri(); ?>/assets/img/header-logo.png" />
                    <div class="footer-company-logo">
                        <div class="footer-company-name">フェアビルド福岡</div>
                        <div class="footer-slogan">お客様と優良物件の架け橋</div>
                    </div>
                </div>
                <div class="page-top">
                    <a href="#top">
                        <div class="wa-ptn-ellipse"></div>
                        <div class="page-top-button">
                            <img class="page-top-arrow" src="<?php echo get_template_directory_uri(); ?>/assets/img/page-top-arrow.svg" />
                            <div class="page-top-text">PAGE TOP</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="copyright">
                <p class="all-rights-reserved">© Fairbuild Fukuoka&nbsp;&nbsp;All rights reserved.</p>
            </div>
        </footer>
    </div>
    
    <!--Wechat QR popup-->
    <div id="wechat-qr-popup" class="popup hidden">
        <div class="popup-content">
            <span class="close" id="closePopup">×</span>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/qr.png" alt="" />
            <p class="qr-text">QRコードをスキャンして友達追加</p>
        </div>
    </div>

    <!--  Wechat Banner-->
    <div id="wechat-banner">
        <div class="banner-content openPopup">
            <div class="banner-main">
                <img class="banner-qr pc_none" src="<?php echo get_template_directory_uri(); ?>/assets/img/line-icon.png" />
                <p>LINE無料見積もり好評受付中</p>
                <img class="banner-qr sp_none" src="<?php echo get_template_directory_uri(); ?>/assets/img/line-icon.png" />
            </div>
        </div>
    </div>

    <!--humberger overlay-->
    <div class="mobile-nav-overlay">
        <div class="mobile-nav-content">
            <div class="mobile-nav-company-logo"></div>
            <ul class="mobile-nav-list">
                <li class="mobile-nav-item">
                    <a href="<?php echo esc_url(home_url('/#property')); ?>">
                        <div class="nav-title">物件情報<br />Property Info</div>
                    </a>
                    <div class="mobile-horizontal-divider"></div>
                </li>
                <li class="mobile-nav-item">
                    <a href="<?php echo esc_url(home_url('/#service')); ?>">
                        <div class="nav-title">事業内容<br />Services</div>
                    </a>
                    <div class="mobile-horizontal-divider"></div>
                </li>
                <li class="mobile-nav-item">
                    <a href="<?php echo esc_url(home_url('/#support')); ?>">
                        <div class="nav-title">サポート<br />Support</div>
                    </a>
                    <div class="mobile-horizontal-divider"></div>
                </li>
                <li class="mobile-nav-item">
                    <a href="<?php echo esc_url(get_blog_page_url()); ?>">
                        <div class="nav-title">不動産ブログ<br />News</div>
                    </a>
                    <div class="mobile-horizontal-divider"></div>
                </li>
                <li class="mobile-nav-item">
                    <a href="<?php echo esc_url(get_contact_page_url()); ?>">
                        <div class="nav-title">お問い合わせ<br />Contact</div>
                    </a>
                    <div class="mobile-horizontal-divider"></div>
                </li>
            </ul>
            <div class="mobile-header-contact">
                <div class="mobile-contact-info">
                    <div class="phone-number">電話番号：080-5797-9825</div>
                    <div class="phone-number">（AM9:00-PM6:00）</div>
                    <div class="business-hours">定休日：日曜日</div>
                </div>
            </div>
        </div>
    </div>

    <?php wp_footer(); ?>
</body>
</html>

