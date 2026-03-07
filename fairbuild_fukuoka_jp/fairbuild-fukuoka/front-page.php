<?php
/**
 * The front page template file
 * This template is used for the front page of the site
 *
 * @package Fairbuild_Fukuoka
 */

get_header();
?>

    <div class="MV">
        <div class="image-slider">
            <div class="slider-container">
                <div class="slider-track">
                    <div class="slide">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/slider-1.png" alt="京都">
                    </div>
                    <div class="slide">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/slider-2.png" alt="Slider Image 2">
                    </div>
                    <div class="slide">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/slider-3.png" alt="Slider Image 3">
                    </div>
                </div>
                <div class="slider-dots">
                    <button class="dot active" aria-label="Slide 1"></button>
                    <button class="dot" aria-label="Slide 2"></button>
                    <button class="dot" aria-label="Slide 3"></button>
                </div>
            </div>
        </div>
        <div class="mv-copy-left fade_left">
            <div class="mv-copy-content">
                <div class="copy-area-background">
                    <div class="overlap-group-2">
                        <div class="rectangle"></div>
                        <div class="rectangle-1"></div>
                        <div class="rectangle-2"></div>
                    </div>
                    <div class="rectangle-3"></div>
                    <div class="rectangle-4"></div>
                </div>
                <div class="copy-area">
                    <div class="text-wrapper">オフィス、店舗、</div>
                    <div class="text-wrapper-2">ホテル、マンションまで。</div>
                    <div class="text-wrapper-3">価値ある物件をご提供。</div>
                </div>
            </div>
        </div>
        <div class="mv-copy-right fade_right">
            <div class="mv-copy-content-right">
                <div class="copy-area-background-right">
                    <div class="overlap-group-2-right">
                        <div class="rectangle-right"></div>
                        <div class="rectangle-1-right"></div>
                    </div>
                    <div class="rectangle-4-right"></div>
                </div>
                <div class="copy-area-right">
                    <div class="text-wrapper-right">投資用不動産、</div>
                    <div class="text-wrapper-2-right">取引実績国内No.1</div>
                </div>
            </div>
        </div>
        <div class="wechat-btn-top sp_none">
            <div class="wechat-btn-top-content openPopup">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/line-icon-clip.png" alt="line">
                <div class="wechat-btn-top-text">
                    <p>LINEで今すぐ無料見積もり</p>
                </div>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/maneki-neko-wh.png" alt="mascot">
            </div>
        </div>
        <div class="wechat-btn-top pc_none">
            <div class="wechat-btn-top-content openPopup">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/line-icon-clip.png" alt="line">
                <div class="wechat-btn-top-text">
                    <p>LINE無料見積もり好評受付中</p>
                </div>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/maneki-neko-wh.png" alt="mascot">
            </div>
        </div>
    </div>
    
    <div id="property" class="property fade">
        <div class="property-background"><img class="marble fade_right" src="<?php echo get_template_directory_uri(); ?>/assets/img/marble-1.png" /></div>

        <div class="property-title">
            <p class="div-2">
                <span class="span">HOUSES </span>
                <span class="text-wrapper-4">ON</span>
                <span class="span"> SALE</span>
            </p>
            <div class="text-wrapper-5"> 物件情報</div>
        </div>
        <div class="property-content" id="property1">
            <div class="property-list">
                <img class="mask-group-2" src="<?php echo get_template_directory_uri(); ?>/assets/img/property-1.png" alt="広島物件" />
                <div class="text-wrapper-6">堅牢な伝統家屋</div>
                <div class="text-wrapper-7">#広島</div>
                <div class="label">
                    <div class="overlap-group-4">
                        <div class="text-wrapper-8">投資物件</div>
                    </div>
                </div>
            </div>
            <div class="property-list">
                <img class="mask-group-2" src="<?php echo get_template_directory_uri(); ?>/assets/img/property-2.png" alt="京都物件" />
                <div class="text-wrapper-6">優れた立地を誇る</div>
                <div class="text-wrapper-7">#京都</div>
                <div class="label">
                    <div class="overlap-group-4">
                        <div class="text-wrapper-8">住宅物件</div>
                    </div>
                </div>
            </div>
            <div class="property-list">
                <img class="mask-group-2" src="<?php echo get_template_directory_uri(); ?>/assets/img/property-3.png" alt="北海道物件" />
                <div class="text-wrapper-6">賃貸物件</div>
                <div class="text-wrapper-7">#北海道</div>
                <div class="label">
                    <div class="overlap-group-4">
                        <div class="text-wrapper-8">投資に最適</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="property-content hidden" id="property2">
            <div class="property-list">
                <img class="mask-group-2" src="<?php echo get_template_directory_uri(); ?>/assets/img/property-4.png" alt="福岡物件" />
                <div class="text-wrapper-6">アーバンライフ</div>
                <div class="text-wrapper-7">#福岡</div>
                <div class="label">
                    <div class="overlap-group-4">
                        <div class="text-wrapper-8">投資物件</div>
                    </div>
                </div>
            </div>
            <div class="property-list">
                <img class="mask-group-2" src="<?php echo get_template_directory_uri(); ?>/assets/img/property-5.png" alt="鹿児島物件" />
                <div class="text-wrapper-6">カフェに最適</div>
                <div class="text-wrapper-7">#鹿児島</div>
                <div class="label">
                    <div class="overlap-group-4">
                        <div class="text-wrapper-8">住宅物件</div>
                    </div>
                </div>
            </div>
            <div class="property-list">
                <img class="mask-group-2" src="<?php echo get_template_directory_uri(); ?>/assets/img/property-6.png" alt="東京物件" />
                <div class="text-wrapper-6">古民家改築物件</div>
                <div class="text-wrapper-7">#東京</div>
                <div class="label">
                    <div class="overlap-group-4">
                        <div class="text-wrapper-8">投資に最適</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="more-btn-area" id="toggleBtn">
            <div class="overlap-group-5">
                <img class="wa-ptn" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-ptn.png" />
                <div class="readmore-button">
                    <div class="readmore-btn">
                        <div class="readmore">
                            <div class="readmore-text" id="toggleBtnText">MORE</div>
                            <img class="icon-awesome-angle" src="<?php echo get_template_directory_uri(); ?>/assets/img/icon-awesome-angle-right.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="service" class="service">
        <div class="service-background">
            <img class="marble-2 fade_left" src="<?php echo get_template_directory_uri(); ?>/assets/img/marble-2.png" />
        </div>
        <div class="div-2 fade_right">OUR SERVICE</div>
        <div class="text-wrapper-5 fade_right">当社のサービス</div>
        <div class="service-headline  fade_left">
            <div class=" service-description-hi">知っていましたか？</div>
            <div class="service-description">　地方商業用物件の購入は今が大きなチャンス。</div>
        </div>
        <div class="service-inner fade_right">
            <div class="service-text sp_none">「地方に良い物件はあるけれど、管理や運営が不安…」
                    「安定した利回りを確保できる投資物件を探している」<br />
                    そんなお悩みをお持ちの方にこそ、当社のサービスをご利用いただきたいと考えています。<br />
                    <div class="text-left-center">
                        物件探しから契約、運用・管理まで、ワンストップで完結。
                        全国どこでも、お客様のニーズに合わせた最適なご提案を行います。
                    </div>
                </div>
                <div class="service-text pc_none">「地方に良い物件はあるけれど、管理や運営が不安…」
                    「安定した利回りを確保できる投資物件を探している」
                    そんなお悩みをお持ちの方にこそ、当社のサービスをご利用いただきたいと考えています。
                    <div class="text-left-center">
                        物件探しから契約、運用・管理まで、ワンストップで完結。
                        全国どこでも、お客様のニーズに合わせた最適なご提案を行います。
                    </div>
                </div>
                <div class="service-image">
                    <img class="mask-group-3" src="<?php echo get_template_directory_uri(); ?>/assets/img/service-1.png" />
                </div>
            </div>

        <div class="more-btn-area">
            <a href="<?php echo esc_url(get_service_page_url()); ?>">
                <div class="overlap-group-5">
                    <img class="wa-ptn" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-ptn.png" />
                    <div class="readmore-button">
                        <div class="readmore-btn">
                            <div class="readmore">
                                <div class="readmore-text">MORE</div>
                                <img class="icon-awesome-angle" src="<?php echo get_template_directory_uri(); ?>/assets/img/icon-awesome-angle-right.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div id="support" class="procedure">
        <div class="overlap-group-6">
            <img class="vector-3" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-divider-red-1.png" />
            <img class="vector-4" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-divider-red-2.png" />
        </div>
        <div class="procedure-background">
            <div class="background-top"><img class="marble-3 fade_right" src="<?php echo get_template_directory_uri(); ?>/assets/img/marble-3.png" />
            </div>
            <div class="background-bottom"><img class="marble-4 fade_left" src="<?php echo get_template_directory_uri(); ?>/assets/img/marble-4.png" />
            </div>
            <div class="procedure-content">
                <div class="procedure-title fade sp_none">OUR SIMPLE PROCEDURE</div>
                <div class="procedure-title fade pc_none">OUR SIMPLE<br> PROCEDURE</div>
                <div class="procedure-title-2 fade">シンプルな流れ</div>
                <div class="procedure-highlight fade_left sp_none">物件探しから契約、運用・管理まで、ワンストップで完結</div>
                <div class="procedure-highlight fade_left sp_none">全国どこでも、お客様のニーズに合わせた最適なご提案。</div>
                <div class="procedure-highlight fade_left pc_none">
                        物件探しから契約、運用・管理まで、ワンストップで完結全国どこでも、お客様のニーズに合わせた最適なご提案
                    </div>
                <div class="procedure-inner">
                    <div class="ul-2 fade_right">
                        <div class="li-3">
                            <div class="procedure-number">ステップ1</div>
                            <img class="mask-group-4" src="<?php echo get_template_directory_uri(); ?>/assets/img/process-1.png" />
                        </div>
                        <div class="li-4">
                            <div class="procedure-highlight-2">ご相談・ヒアリング</div>
                            <div class="procedure-benefit">
                                    まずはお客様の目的・ご希望条件を詳しくお伺いします。収益重視、店舗開業、拠点拡大など、目的に応じて最適な物件をご提案いたします。</div>
                                <div class="procedure-detail">
                                    お客様の事業計画や投資目的を詳しく伺い、最適な物件選びのための基礎情報を共有いたします。
                                </div>
                        </div>
                    </div>
                    <div class="ul-2 fade_left reverse">
                        <div class="li-4">
                            <div class="procedure-highlight-2">物件選定・ご提案</div>
                            <div class="procedure-benefit">
                                    当社が厳選した全国の物件情報から、条件に合った高収益・高品質な物件をご紹介します。現地確認、法務チェック、収支シミュレーションなどもサポートいたします。
                                </div>
                                <div class="procedure-detail">
                                    大都市から地方都市まで、全国ネットワークを活かした物件情報をご提供。
                                </div>
                        </div>
                        <div class="li-3">
                            <div class="procedure-number">ステップ2</div>
                            <img class="mask-group-4" src="<?php echo get_template_directory_uri(); ?>/assets/img/process-2.png" />
                        </div>
                    </div>
                    <div class="ul-2 fade_right">
                        <div class="li-3">
                            <div class="procedure-number">ステップ3</div>
                            <img class="mask-group-4" src="<?php echo get_template_directory_uri(); ?>/assets/img/process-3.png" />
                        </div>
                        <div class="li-4">
                            <div class="procedure-highlight-2">契約・運用サポート</div>
                            <div class="procedure-benefit">
                                    契約から管理・運用まで、専門スタッフが一貫して対応。購入後も、テナント募集、賃貸管理、リフォーム提案などをトータルでお任せいただけます。</div>
                                <div class="procedure-detail">
                                    契約手続きはもちろん、購入後の運用までトータルサポート。当社提携の管理会社が運営を代行するため、現地に行かずに安心してお任せいただけます。
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlap-group-7">
            <img class="vector" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-divider-pk-1.png" />
            <img class="vector-2" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-divider-pk-2.png" />
        </div>
    </div>
    
    <div id="checklist" class="checklist fade">
        <div class="checklist-background">
            <img class="marble-5 fade_right" src="<?php echo get_template_directory_uri(); ?>/assets/img/marble-5.png" />
            <img class="check-arrow-wa2 fade" src="<?php echo get_template_directory_uri(); ?>/assets/img/check-arrow-wa.png" />
        </div>

        <div class="checklist-main">
            <div class="checklist-title">
                <div class="checklist-title-1">CHECKLIST</div>
                <div class="checklist-title-2">チェックリスト</div>
            </div>
            <div class="checkbox-group">
                <div class="checklist-subtitle">
                    <p class="p">
                        <span>商業不動産購入チェックリスト</span>
                    </p>
                    <div class="checklist-radio-text">
                        <div class="checklist-radio-text-1">確認</div>
                        <div class="checklist-radio-text-2">CHECK</div>
                    </div>
                </div>
                <div class="checklist-row">
                    <div class="radio-wrapper">
                        <div class="div-4">
                            <div class="numbering-bubble">
                                <div class="number">1</div>
                            </div>
                            <div class="label-checkbox">会社登記簿謄本</div>
                            <div class="priority">
                                <div class="important">必須</div>
                            </div>
                        </div>
                        <div class="div-5">
                            <div class="checklist-desc">・・・購入主体の確認に使用。</div>
                            <label class="checkbox_base">
                                <input class="checkbox_icon" type="checkbox" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="checklist-row">
                    <div class="radio-wrapper">
                        <div class="div-4">
                            <div class="element-wrapper">
                                <div class="number">2</div>
                            </div>
                            <div class="label-checkbox">代表者本人確認書類</div>
                            <div class="priority">
                                <div class="important">必須</div>
                            </div>
                        </div>
                        <div class="div-5">
                            <div class=" checklist-desc">・・・最新の有効期限内のもの。</div>
                            <label class="checkbox_base">
                                <input class="checkbox_icon" type="checkbox" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="checklist-row">
                    <div class="radio-wrapper">
                        <div class="div-4">
                            <div class="element-wrapper">
                                <div class="number">3</div>
                            </div>
                            <div class="label-checkbox">直近2期分の決算書</div>
                            <div class="priority-1">
                                <div class="important">推奨</div>
                            </div>
                        </div>
                        <div class="div-5">
                            <div class="checklist-desc">・・・資金計画・融資審査の際に必要。</div>
                            <label class="checkbox_base">
                                <input class="checkbox_icon" type="checkbox" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="checklist-row">
                    <div class="radio-wrapper">
                        <div class="div-4">
                            <div class="numbering-bubble-2">
                                <div class="number">4</div>
                            </div>
                            <div class="label-checkbox">物件購入の目的</div>
                            <div class="priority">
                                <div class="important">必須</div>
                            </div>
                        </div>
                        <div class="div-5">
                            <div class=" checklist-desc">・・・取引形態・税務処理の判断に使用します。</div>
                            <label class="checkbox_base">
                                <input class="checkbox_icon" type="checkbox" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="checklist-row">
                    <div class="radio-wrapper">
                        <div class="div-4">
                            <div class="numbering-bubble-3">
                                <div class="number">5</div>
                            </div>
                            <div class="label-checkbox">物件所在地・希望条件</div>
                            <div class="priority">
                                <div class="important">必須</div>
                            </div>
                        </div>
                        <div class="div-5">
                            <div class="checklist-desc">・・・具体的なご提案のための基本情報。</div>
                            <label class="checkbox_base">
                                <input class="checkbox_icon" type="checkbox" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="checklist-row">
                    <div class="radio-wrapper">
                        <div class="div-4">
                            <div class="numbering-bubble-2">
                                <div class="number">6</div>
                            </div>
                            <div class="label-checkbox">銀行取引明細又は資金証明書</div>
                            <div class="priority-1">
                                <div class="important">推奨</div>
                            </div>
                        </div>
                        <div class="div-5">
                            <div class="checklist-desc">・・・自己資金・融資希望額の確認に使用。</div>
                            <label class="checkbox_base">
                                <input class="checkbox_icon" type="checkbox" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="checklist-row">
                    <div class="radio-wrapper">
                        <div class="div-4">
                            <div class="numbering-bubble-2">
                                <div class="number">7</div>
                            </div>
                            <div class="label-checkbox">委任状（代理人手続の場合）</div>
                            <div class="priority-2">
                                <div class="important">任意</div>
                            </div>
                        </div>
                        <div class="div-5">
                            <div class="checklist-desc">・・・公証付きでの提出が必要です。</div>
                            <label class="checkbox_base">
                                <input class="checkbox_icon" type="checkbox" />
                            </label>
                        </div>

                    </div>
                </div>
                <div class="checklist-row">
                    <div class="radio-wrapper">
                        <div class="div-4">
                            <div class="numbering-bubble-2">
                                <div class="number">8</div>
                            </div>
                            <div class="label-checkbox">テナント需要の有無</div>
                            <div class="priority">
                                <div class="important">必須</div>
                            </div>
                        </div>
                        <div class="div-5">
                            <div class="checklist-desc">・・・周辺エリアでの集客効率を確認。</div>
                            <label class="checkbox_base">
                                <input class="checkbox_icon" type="checkbox" />
                            </label>
                        </div>

                    </div>
                </div>
                <div class="checklist-row">
                    <div class="radio-wrapper">
                        <div class="div-4">
                            <div class="numbering-bubble-2">
                                <div class="number">9</div>
                            </div>
                            <div class="label-checkbox">建ぺい率・容積率の確認</div>
                            <div class="priority">
                                <div class="important">必須</div>
                            </div>
                        </div>
                        <div class="div-5">
                            <div class="checklist-desc">・・・商業運用、拡張・改築が可能かを確認。</div>
                            <label class="checkbox_base">
                                <input class="checkbox_icon" type="checkbox" />
                            </label>
                        </div>

                    </div>
                </div>
                <div class="checklist-row">
                    <div class="radio-wrapper">
                        <div class="div-4">
                            <div class="numbering-bubble-2">
                                <div class="number">10</div>
                            </div>
                            <div class="label-checkbox">収益シミュレーション</div>
                            <div class="priority">
                                <div class="important">必須</div>
                            </div>
                        </div>
                        <div class="div-5">
                            <div class="checklist-desc">・・・投資回収期間を試算。</div>
                            <label class="checkbox_base">
                                <input class="checkbox_icon" type="checkbox" />
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="contact" class="support">
        <div class="overlap-group-6-support">
            <img class="vector-3-support" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-divider-pk-1.png" />
            <img class="vector-4-support" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-divider-pk-2.png" />
        </div>
        <div class="support-background">
            <div class="support-background-overlap">
                <img class="marble-6 fade_left" src="<?php echo get_template_directory_uri(); ?>/assets/img/marble-6.png" />
                <img class="click-arrow-wa fade_right" src="<?php echo get_template_directory_uri(); ?>/assets/img/click-arrow-wa.png" />
            </div>
            <div class="support-main">
                <div class="support-title">SUPPORT</div>
                <div class="support-title-2">ご相談・サポート</div>
                <div class="support-description">
                    <div class="support-text sp_none">
                        経験豊富なスタッフが、物件探しから<br />契約、運用まで丁寧にサポート!
                    </div>
                    <div class="support-text pc_none">
                        経験豊富なスタッフが、物件探しから契約、運用まで丁寧にサポート!
                    </div>
                </div>
                <div class="support-content fade">
                    <div class="wechat-btn openPopup">
                        <img class="wechat" src="<?php echo get_template_directory_uri(); ?>/assets/img/line-icon-clip.png" />
                        <div class="wechat-btn-area">
                            <div class="wechat-btn1">LINEでお問い合わせください！</div>
                            <p class="wechat-btn2">- Contact us @LINE -</p>
                            <div class="wechat-btn3">無料見積もりを今すぐ取得</div>
                        </div>
                        <div class="wechat-btn-arrow ">
                            <div class="ellipse"></div>
                        </div>
                    </div>
                    <a href="mailto:fairbuildfukuoka@protonmail.com?subject=メールでのお問い合わせ">
                        <div class="email-btn">
                            <img class="email" src="<?php echo get_template_directory_uri(); ?>/assets/img/email.png" />
                            <div class="wechat-btn-arrow">
                                <div class="ellipse-email"></div>
                            </div>
                            <div class="wechat-btn-area">
                                <div class="wechat-btn1">メール問い合わせ</div>
                                <p class="wechat-btn2">- Contact us via Email -</p>
                                <div class="wechat-btn3">無料メール相談はクリック!</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="overlap-group-7-support">
            <img class="vector-support" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-divider-red-1.png" />
            <img class="vector-2-support" src="<?php echo get_template_directory_uri(); ?>/assets/img/wa-divider-red-2.png" />
        </div>
    </div>
    
    <div class="q-a fade">
        <div class="qa-background">
            <img class="check-arrow-wa fade_left" src="<?php echo get_template_directory_uri(); ?>/assets/img/check-arrow-wa.png" />
            <img class="marble-5 fade_right" src="<?php echo get_template_directory_uri(); ?>/assets/img/marble-5.png" />
        </div>
        <div class="div-2">Q&amp;A</div>
        <div class="text-wrapper-5">よくある質問</div>
        <div class="QA-description">
            <div class="q-a-text">ご質問やご相談はお気軽に。</div>
        </div>
        <div class="q-a-main">
            <div class="q-a-wrapper">
                <div class="q-a-2">
                    Q1. 商業用不動産を購入する際の初期費用はどのくらいですか？<br />
                    A. 物件価格の約6〜10％が目安です（仲介手数料・登記費用・税金などを含む）。
                </div>
            </div>
            <div class="q-a-wrapper">
                <div class="q-a-2">
                    Q2. 地方物件の管理はどうすればよいですか？<br />
                    A. 当社提携の管理会社が運営を代行いたします。現地に行かずに安心してお任せいただけます。
                </div>
            </div>
            <div class="q-a-wrapper">
                <div class="q-a-2">
                    Q3. 投資物件の利回りはどのくらいですか？<br />
                    A. 立地や用途により異なりますが、平均して4〜8％程度を目安にご案内しています。
                </div>
            </div>
            <div class="q-a-wrapper">
                <div class="q-a-2">
                    Q4. 売却やリフォームの相談も可能ですか？<br />
                    A. はい。物件の売却・再投資・リノベーションなども、トータルでご提案いたします。
                </div>
            </div>
            <div class="q-a-wrapper">
                <div class="q-a-2">
                    Q5. 商業可物件の購入にはどんな費用がかかりますか？<br />
                    A. 登記費用・仲介手数料・固定資産税など、**物件価格の約6〜10%**が目安です。
                    また、テナント契約を前提とした場合は、契約書作成や原状回復などの費用が発生する場合があります。
                </div>
            </div>
            <div class="q-a-wrapper">
                <div class="q-a-2">
                    Q6. 購入後の運用や管理はお願いできますか？<br />
                    A. はい。全国の管理会社・リーシング会社と連携し、賃貸管理・収益運用・リノベーション提案まで一括でサポートいたします。
                    空室対策や修繕も含め、オーナー様に代わって運営管理を代行します。
                </div>
            </div>
            <div class="q-a-wrapper">
                <div class="q-a-2">
                    Q7. 商業可物件の利回りやリスクはどのように考えればいいですか？<br />
                    A. 立地・用途・テナント属性によって異なりますが、平均**表面利回り4〜8%**が目安です。
                    当社では、空室リスクや地域別需要動向も分析し、リスクを最小化した収益モデルをご提案しています。
                </div>
            </div>
        </div>
    </div>
    
    <div id="updates" class="updates">
        <div class="update-title">
            <img class="maneki-neko-2" src="<?php echo get_template_directory_uri(); ?>/assets/img/maneki-neko-bk.png" />
            <div class="update-title-2">UPDATE Information</div>
        </div>
        <div class="update-list">
            <div class="header-heading">
                <div class="update-heading">通知</div>
                <div class="horizontal-divider"></div>
            </div>
            <div class="list">
                <div class="item-link">
                    <div class="time">2025.02.21</div>
                    <div class="update-detail">フェアビルド福岡物件情報公式サイトがオープンしました</div>
                </div>
                <div class="item-link">
                    <div class="time">2025.01.25</div>
                    <div class="update-detail">【公式／フェアビルド京都】完売いたしました</div>
                </div>
                <div class="item-link">
                    <div class="time">2024.12.09</div>
                    <div class="update-detail">【公式／フェアビルド大阪】物件概要を更新しました｜先着順で受付中です</div>
                </div>
            </div>
        </div>
    </div>

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
                        <a href="#service">
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
                        <a href="#property">
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
                        <a href="#support">
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
