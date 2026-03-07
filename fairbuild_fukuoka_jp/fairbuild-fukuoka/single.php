<?php
/**
 * The template for displaying single posts
 *
 * @package Fairbuild_Fukuoka
 */

get_header();
?>

<div id="service" class="service">
    <div class="div-2 fade_right">NEWS</div>
    <div class="text-wrapper-5 fade_right">不動産最新情報</div>

    <div class="service-news" id="service2">
        <?php while (have_posts()) : the_post(); ?>
            <div class="service-news-headline fade_left">
                商業用・投資用不動産であなたのビジネスを拡大するのは、まさに今
            </div>

            <div class="service-inner">
                <div class="service-image">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('large', array('class' => 'mask-group-3')); ?>
                    <?php else : ?>
                        <img class="mask-group-3" src="<?php echo get_template_directory_uri(); ?>/assets/img/service-2.png" />
                    <?php endif; ?>
                </div>
                <div class="service-text">
                    近年、商業可物件や収益物件の市場は、エリアによって価格差が拡大しつつも、
                    条件次第では 高品質で安価な物件を見つけるチャンスが増えています。
                    特にテナントビルやロードサイド店舗、ホテル・倉庫などの不動産は、
                    需要が安定しており、適切な選定を行うことで 長期的な運用益と資産価値の両立 が可能です。
                </div>
            </div>

            <div class="service-news-banner">
                <div class="service-news-banner-image">
                    <img class="mask-group-3" src="<?php echo get_template_directory_uri(); ?>/assets/img/service-3.png" />
                </div>
                <div class="service-news-banner-image">
                    <img class="mask-group-3" src="<?php echo get_template_directory_uri(); ?>/assets/img/service-4.png" />
                </div>
            </div>

            <div class="service-news-headline fade_left">
                商業可物件購入を検討する際に、押さえておくべき３つの重要ポイント
            </div>

            <div class="service-news-solution">
                <h1>① テナント需要と立地</h1>
                周辺エリアの人口動向や業種構成を分析し、長期的に安定した入居率を見込めるか確認します。
                駅前や主要幹線沿いなど、人の流れを重視した立地選びが成功の鍵です。

                <h1>② 用途地域と建築条件</h1>
                商業可物件として利用できるか、建ぺい率・容積率・防火地域などの条件を事前に確認します。
                適切な物件選定が、将来的な運用や改築の自由度を高めます。

                <h1>③ 利回りと収益計画</h1>
                想定賃料・運営コスト・管理費を踏まえた収益シミュレーションを行い、
                実質的なキャッシュフローと投資回収期間を明確にします。
            </div>

            <div class="service-news-headline fade_left">
                フェアビルド福岡が選ばれる理由
            </div>

            <div class="service-inner-scroll-wrapper">
                <div class="service-inner-scroll">
                    <div class="service-inner-content">
                        <img class="mask-group-3" src="<?php echo get_template_directory_uri(); ?>/assets/img/service-5.png" />
                        <div class="service-inner-text">
                            全国ネットワークによる独自の物件情報を提供
                        </div>
                    </div>
                    <div class="service-inner-content">
                        <img class="mask-group-3" src="<?php echo get_template_directory_uri(); ?>/assets/img/service-6.png" />
                        <div class="service-inner-text">
                            投資・運用・管理までワンストップでサポート
                        </div>
                    </div>
                    <div class="service-inner-content">
                        <img class="mask-group-3" src="<?php echo get_template_directory_uri(); ?>/assets/img/service-7.png" />
                        <div class="service-inner-text">
                            国内外の投資家との豊富な取引実績と信頼
                        </div>
                    </div>
                </div>
            </div>

            <div class="service-news-headline fade_left">
                全国規模のネットワークで、最適な投資機会をお届けします。
            </div>

            <div class="service-news-solution">
                <h1>🌸 商業可物件のご紹介</h1>
                ▶ 全国主要都市のテナントビル・ロードサイド店舗・物流倉庫など、幅広い商業用物件をご紹介。<br />
                ▶ 地域の収益データに基づいた戦略的な投資提案を行います。<br />

                <h1>🌸 購入・運営サポート</h1>
                ▶ 契約から融資、テナント募集、管理までを一括でサポート。<br />
                ▶ 不動産投資の初心者にもわかりやすく、安心してご相談いただけます。<br />

                <h1>🌸 信頼と実績</h1>
                ▶ 取引実績国内No.1の経験を活かし、お客様の目的に最適な不動産を選定。<br />
                ▶ 専門スタッフが地域・業種・収益性を徹底分析し、長期的な安定運用を実現します。<br />
            </div>

            <div class="service-news-headline fade_left">
                <div class="margin-top">
                    お気軽にお問い合わせください。<br />
                    →LINE/メールで今すぐ無料見積←<br />
                </div>

                <div class="cta-area">
                    <div class="wechat-btn-mini">
                        <div class="wechat-btn-mini-content openPopup">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/line-icon-clip.png" alt="line">
                            <div class="wechat-btn-top-text">
                                <p>LINE無料見積もりを今すぐ取得</p>
                            </div>
                        </div>
                    </div>
                    <a href="mailto:fairbuildfukuoka@protonmail.com?subject=メールでのお問い合わせ">
                        <div class="wechat-btn-mini">
                            <div class="wechat-btn-mini-content emailbtn">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/email.png" alt="email">
                                <div class="wechat-btn-top-text">
                                    <p>メールでお問い合わせ</p>
                                </div>
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/maneki-neko-wh.png" alt="mascot">
                            </div>
                        </div>
                    </a>
                </div>

                <div class="margin-top">
                    「商業可物件への投資」は、あなたの資産形成と未来のビジネスを支える新たな一歩になるでしょう。
                </div>
            </div>

            <?php
            // Post meta
            $categories = get_the_category();
            $tags = get_the_tags();
            ?>
            <?php if ($categories || $tags) : ?>
                <div class="post-meta-info">
                    <?php if ($categories) : ?>
                        <div class="post-categories">
                            <strong>カテゴリー:</strong>
                            <?php foreach ($categories as $category) : ?>
                                <span class="category-tag"><?php echo esc_html($category->name); ?></span>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                    
                    <?php if ($tags) : ?>
                        <div class="post-tags">
                            <strong>タグ:</strong>
                            <?php foreach ($tags as $tag) : ?>
                                <span class="tag">#<?php echo esc_html($tag->name); ?></span>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
            <?php endif; ?>

            <div class="more-btn-area" id="toggleBtn">
                <a href="<?php echo esc_url(home_url('/#support')); ?>">
                    <div class="overlap-group-5">
                        <img class="wa-ptn" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-ptn.png" />
                        <div class="readmore-button">
                            <div class="readmore-btn">
                                <div class="readmore">
                                    <div class="readmore-text" id="toggleBtnText">GO TO PROCEDURE</div>
                                    <img class="icon-awesome-angle" src="<?php echo get_template_directory_uri(); ?>/assets/img/icon-awesome-angle-right.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        <?php endwhile; ?>
    </div>
</div>

<!-- About Us Section -->
<div class="about">
    <div class="overlap-group-6-about">
        <img class="vector-3-about" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-divider-pk-1.png" />
        <img class="vector-4-about" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-divider-pk-2.png" />
    </div>
    <div class="about-content">
        <div class="about-title">
            <div class="contact-title">About US</div>
            <div class="contact-title2">お問い合わせ</div>
        </div>
        <div class="list-2">
            <div class="item">
                <div class="link-2">
                    <div class="company-info-link">会社情報</div>
                    <div class="horizontal-divider-2"></div>
                </div>
                <div class="list-3">
                    <a href="https://goromaru.net/" target="_blank">
                        <div class="item-link-2">
                            <div class="text-wrapper-18">会社概要</div>
                        </div>
                    </a>
                    <a href="<?php echo esc_url(home_url('/#service')); ?>">
                        <div class="item-link-2">
                            <div class="text-wrapper-18">事業内容</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="link-2">
                    <div class="company-info-link">物件情報</div>
                    <div class="horizontal-divider-2"></div>
                </div>
                <div class="list-3">
                    <a href="<?php echo esc_url(home_url('/#property')); ?>">
                        <div class="item-link-2">
                            <div class="text-wrapper-18">販売物件</div>
                        </div>
                    </a>
                    <a href="https://goromaru.net/service" target="_blank">
                        <div class="item-link-2">
                            <div class="text-wrapper-18">販売実績</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="link-2">
                    <div class="company-info-link">サポート</div>
                    <div class="horizontal-divider-2"></div>
                </div>
                <div class="list-3">
                    <a href="<?php echo esc_url(home_url('/#support')); ?>">
                        <div class="item-link-2">
                            <div class="text-wrapper-18">住宅相談</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="link-2">
                    <div class="company-info-link">連絡先情報</div>
                    <div class="horizontal-divider-2"></div>
                </div>
                <div class="list-3">
                    <div class="item-link-2">
                        <div class="text-wrapper-18">
                            〒808-0008<br />福岡県北九州市<br />若松区小竹694<br />フェアビルド福岡<br />(+81)080-5797-9825
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
