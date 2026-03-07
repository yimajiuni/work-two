<?php
/**
 * Template Name: Contact Page
 * Template Post Type: page
 * The template for displaying contact page
 *
 * @package Fairbuild_Fukuoka
 */

get_header();
?>

<!-- Contact Page Content -->
<div id="contact" class="contact-page">
    <div class="contact-header">
        <div class="contact-header-title">
            <div class="contact-title-en">Contact Us</div>
            <div class="contact-title-ja">お問い合わせ</div>
        </div>
    </div>

    <div class="contact-form-container">
        <form class="contact-form" id="contactForm" method="POST" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" enctype="multipart/form-data">
            <input type="hidden" name="action" value="submit_contact_form">
            <?php wp_nonce_field('contact_form_nonce', 'contact_form_nonce_field'); ?>
            
            <div class="form-group">
                <label for="fullName" class="form-label">お名前</label>
                <input type="text" id="fullName" name="fullName" class="form-input" placeholder="お名前を入力してください" required>
            </div>

            <div class="form-group">
                <label for="furigana" class="form-label">ふりがな</label>
                <input type="text" id="furigana" name="furigana" class="form-input" placeholder="ふりがなを入力してください" required>
            </div>

            <div class="form-group">
                <label for="email" class="form-label">メールアドレス</label>
                <input type="email" id="email" name="email" class="form-input" placeholder="メールアドレスを入力してください" required>
            </div>

            <div class="form-group">
                <label for="telephone" class="form-label">電話番号</label>
                <input type="tel" id="telephone" name="telephone" class="form-input" placeholder="電話番号を入力してください" required>
            </div>

            <div class="form-group">
                <label for="topic" class="form-label">トピック</label>
                <select id="topic" name="topic" class="form-select" required>
                    <option value="">トピックを選択してください</option>
                    <option value="general">一般のお問い合わせ</option>
                    <option value="property">物件に関するお問い合わせ</option>
                    <option value="investment">投資物件に関するお問い合わせ</option>
                    <option value="support">サポートに関するお問い合わせ</option>
                    <option value="other">その他</option>
                </select>
            </div>

            <div class="form-group">
                <label for="message" class="form-label">お問い合わせ内容</label>
                <textarea id="message" name="message" class="form-textarea" rows="6" placeholder="お問い合わせ内容を詳しく入力してください..." required></textarea>
            </div>

            <div class="form-group">
                <label for="attachments" class="form-label">添付ファイル</label>
                <div class="file-upload-area" id="fileUploadArea">
                    <input type="file" id="attachments" name="attachments[]" class="file-input" multiple accept="image/*,.pdf,.doc,.docx">
                    <div class="file-upload-text">
                        <span class="file-upload-icon"></span>
                        <span>クリックしてアップロード、またはドラッグ＆ドロップ</span>
                    </div>
                    <div class="file-list" id="fileList"></div>
                </div>
            </div>

            <div class="form-group privacy-policy-group">
                <div class="privacy-policy-text">
                    <p><strong>第1条（個人情報の定義）</strong></p>
                    <p>「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。</p>

                    <p><strong>第2条（個人情報の収集方法）</strong></p>
                    <p>当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。</p>

                    <p><strong>第3条（個人情報を収集・利用する目的）</strong></p>
                    <p>当社が個人情報を収集・利用する目的は，以下のとおりです。</p>
                    <ul>
                        <li>当社サービスの提供・運営のため</li>
                        <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                        <li>ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                        <li>メンテナンス，重要なお知らせなど必要に応じたご連絡のため</li>
                        <li>利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため</li>
                        <li>ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため</li>
                        <li>有料サービスにおいて，ユーザーに利用料金を請求するため</li>
                        <li>上記の利用目的に付随する目的</li>
                    </ul>

                    <p><strong>第4条（利用目的の変更）</strong></p>
                    <p>当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。<br>
                    利用目的の変更を行った場合には，変更後の目的について，当社所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。</p>

                    <p><strong>第5条（個人情報の第三者提供）</strong></p>
                    <p>当社は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。</p>
                    <ul>
                        <li>人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき</li>
                        <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき</li>
                        <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                        <li>予め次の事項を告知あるいは公表し，かつ当社が個人情報保護委員会に届出をしたとき
                            <ul>
                                <li>利用目的に第三者への提供を含むこと</li>
                                <li>第三者に提供されるデータの項目</li>
                                <li>第三者への提供の手段または方法</li>
                                <li>本人の求めに応じて個人情報の第三者への提供を停止すること</li>
                                <li>本人の求めを受け付ける方法</li>
                            </ul>
                        </li>
                    </ul>
                    <p>前項の定めにかかわらず，次に掲げる場合には，当該情報の提供先は第三者に該当しないものとします。</p>
                    <ul>
                        <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                        <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                        <li>個人情報を特定の者との間で共同して利用する場合であって，その旨並びに共同して利用される個人情報の項目，共同して利用する者の範囲，利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について，あらかじめ本人に通知し，または本人が容易に知り得る状態に置いた場合</li>
                    </ul>

                    <p><strong>第6条（個人情報の開示）</strong></p>
                    <p>当社は，本人から個人情報の開示を求められたときは，本人に対し，遅滞なくこれを開示します。ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあり，開示しない決定をした場合には，その旨を遅滞なく通知します。なお，個人情報の開示に際しては，1件あたり1，000円の手数料を申し受けます。</p>
                    <ul>
                        <li>本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合</li>
                        <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                        <li>その他法令に違反することとなる場合</li>
                    </ul>
                    <p>前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません。</p>

                    <p><strong>第7条（個人情報の訂正および削除）</strong></p>
                    <p>ユーザーは，当社の保有する自己の個人情報が誤った情報である場合には，当社が定める手続きにより，当社に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。<br>
                    当社は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の訂正等を行うものとします。<br>
                    当社は，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは遅滞なく，これをユーザーに通知します。</p>

                    <p><strong>第8条（個人情報の利用停止等）</strong></p>
                    <p>当社は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。<br>
                    前項の調査結果に基づき，その請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の利用停止等を行います。<br>
                    当社は，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，遅滞なく，これをユーザーに通知します。<br>
                    前2項にかかわらず，利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，この代替策を講じるものとします。</p>

                    <p><strong>第9条（プライバシーポリシーの変更）</strong></p>
                    <p>本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。<br>
                    当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。</p>

                    <p><strong>第10条（お問い合わせ窓口）</strong></p>
                    <p>本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。<br>
                    住所：福岡県北九州市若松区小竹694<br>
                    社名：フェアビルド福岡<br>
                    電話番号：080-5797-9825</p>
                </div>
                <label class="privacy-checkbox-label">
                    <input type="checkbox" id="privacyAgree" name="privacyAgree" class="privacy-checkbox" required>
                    <span class="privacy-checkbox-text">プライバシーポリシーに同意し、送信内容に間違いはありません</span>
                </label>
            </div>

            <div class="form-submit">
                <button type="submit" class="submit-button">
                    <span>メッセージを送信</span>
                    <span class="submit-arrow">→</span>
                </button>
            </div>
        </form>
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

<script>
    // File upload handling
    document.addEventListener('DOMContentLoaded', function() {
        const fileInput = document.getElementById('attachments');
        const fileList = document.getElementById('fileList');
        const fileUploadArea = document.getElementById('fileUploadArea');

        if (fileInput && fileList && fileUploadArea) {
            fileInput.addEventListener('change', function (e) {
                fileList.innerHTML = '';
                if (e.target.files.length > 0) {
                    Array.from(e.target.files).forEach(file => {
                        const fileItem = document.createElement('div');
                        fileItem.className = 'file-item';
                        fileItem.innerHTML = `
                            <span class="file-name">${file.name}</span>
                            <span class="file-size">(${(file.size / 1024).toFixed(2)} KB)</span>
                        `;
                        fileList.appendChild(fileItem);
                    });
                }
            });

            // Drag and drop handling
            fileUploadArea.addEventListener('dragover', function (e) {
                e.preventDefault();
                fileUploadArea.classList.add('drag-over');
            });

            fileUploadArea.addEventListener('dragleave', function (e) {
                e.preventDefault();
                fileUploadArea.classList.remove('drag-over');
            });

            fileUploadArea.addEventListener('drop', function (e) {
                e.preventDefault();
                fileUploadArea.classList.remove('drag-over');
                if (e.dataTransfer.files.length > 0) {
                    fileInput.files = e.dataTransfer.files;
                    fileInput.dispatchEvent(new Event('change'));
                }
            });
        }

        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function (e) {
                // Check if privacy policy is agreed
                const privacyCheckbox = document.getElementById('privacyAgree');
                if (privacyCheckbox && !privacyCheckbox.checked) {
                    e.preventDefault();
                    alert('プライバシーポリシーに同意してください。');
                    privacyCheckbox.focus();
                    return;
                }
            });
        }
    });
</script>

<?php get_footer(); ?>

