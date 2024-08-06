import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import {
  meta,
  shopify,
  starbucks,
  tesla,
  eqbo,
  eqch,
  eqcu,
  eqgr1,
  eqgr2,
  eqgr3,
  eqgr4,
  eqhe,
  eqwh,
  app1,
  app2,
  app3,
  web1,
  web2,
  web3,
  web4,
} from "./assets/images";

import {
  css,
  git,
  github,
  html,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  tailwindcss,
  react,
  sass,
  car,
  estate,
  express,
  linkedin,
  pricewise,
  contact,
  redux,
  snapgram,
  summiz,
  motion,
  mui,
  threads,
  typescript,
  figma,
  illustrator,
  photoshop,
  bootstrap,
  jquery,
} from "./assets/icons";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "jp",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "Welcome back",
          CTA: {
            line1: `Have a project in mind?
            Let's build something together!`,
          },
          Contact: {
            line1: "Get in Touch.",
            line2: "Your Name",
            line3: "Your E-mail",
            line4: "Your Message",
          },
          homeInfo: {
            line1: "Hi, I'm",
            line2: "A Frontend Engineer and Graphic Designer from japan",
            line3: "",
            line4:
              "Worked with many companies  and picked up many skills along the way",
            more: "Learn more",
            line5: ` Led multiple projects to success over the years. Curious about the impact?`,
            visit: "Visit Portfolio",
            line6: ` Need a project done or looking for a dev?
             I'm just a few keystrokes away`,
            contact: "Let's Talk",
          },
          aboutDesc: {
            line1: `software developer based in Japan Specialized in technology and designs through the experience working at mainly in advertising agency and the design planning departments of manufacturer and retailer
             as a graphic designer for packaging, sales promotion advertisements, and Web designer for ECommerse in the apparel sector and hands-on learning and building apps.
            I've worked with all sorts of companies, leveling up my skills and teaming up with all sort of people.
            `,
            line2: `Currently, I am accepting work ranging from web production to illustrations and logos. Please feel free to contact me. 
            I am available for both Japanese and English communication. here' the rundown. `,
          },
          experiences: [
            {
              title: "Graphic Designer/Illustrator",
              company_name: "Business Partners",
              icon: starbucks,
              iconBg: "#accbe1",
              date: "April 2009 - Aug 2014",
              points: [
                `Web production management for amusement companies, event posters, inserts, POP and store, and design of event posters, inserts, POPs, store signs, panels, packaging, job postings, newspaper articles, free newspapers, and proofreading.
                design, and proofreading of text. Designing portraits for clients, layouts and designs of seating cards, catalogs, guides, and notepads for art exhibitions, etc.
                layout, design, etc. for art exhibitions. Other clients include furniture trading companies, construction and renovation companies.
                Participating in code reviews and providing constructive feedback to other developers.
                Other work includes cutting and other processing, enclosure, shipping arrangements, and all other related work. Printing of data created by outside designers.
                large Printing of data created by outside designers, and printing operations using large commercial printers.`,
              ],
            },
            {
              title: "Graphic Designer/Apparel Assistant Designer",
              company_name: "Alpen",
              icon: tesla,
              iconBg: "#fbc3bc",
              date: "Aug 2014 - Oct -2017",
              points: [
                `Input apparel sewing specifications and other fabric orders, revise design drawings, create new packaging, Designing, adding colors, and revising sportswear patterns, editing and proofreading instruction manuals, etc.
                Creation of comparison charts with other companies' products and planning presentation materials in support of merchandisers.
                also I was in charge of designing sportswear patterns, adding colors, revising, editing and proofreading instruction manuals. 
                yoga wear and sports casual products (athleisure fashion) that remove the boundary between daily life and sports.`,
              ],
            },
            {
              title: "Graphic Designer for Product Promotion",
              company_name: "W Cosmetics",
              icon: shopify,
              iconBg: "#b7e4c7",
              date: "Feb 2018 - Feb 2019",
              points: [
                `Wholesale cosmetics company based in Brisbane, Australia, where I was in charge of product planning for beauty cosmetics, production of sales promotion tools, and printing operators.
                Graphic designer of sales promotion tools such as POP and banners, printing, and localization of product descriptions, catch copy, and instruction manuals for packaging.
                Localization of product descriptions, catch copy, and instruction manuals. Software used includes Adobe photoshop and Illustrator.
                Design and production from a feminine and realistic point of view while focusing on functionality and cost.`,
              ],
            },
            {
              title: "Web & Graphic Designer and Coder",
              company_name: "Nextel",
              icon: meta,
              iconBg: "#a2d2ff",
              date: "June 2020 - Present",
              points: [
                "As a graphic designer for website , i was in charge of updating the Rakuten Ichiba online store and designing sales promotions during sales.",
                "and sales promotion design for the company's official e-commerce site. HTML and CSS coding for the company's official e-commerce site.",
                "and updating of the company's official e-commerce site using HTML and CSS, as well as the production and distribution of e-mail magazines. I used HTML and CSS as markup languages.",
                "In addition to HTML and CSS, I used Javascript as a programming language without any framework. For graphic design work, I mainly used adobe photoshop and Illustrator for design and editing, then Figma for wire.",
              ],
            },
          ],
          projectDesc: {
            line1: `  I've embarked on numerous projects throughout the years, but these are
            the ones i hold closest to my heart. feel free to explore my github and
            i hope it contributes to further your ideas. And your collaborations are
            highly valued
            `,
            line2: "!",
          },
          //web
          projects: [
            {
              id: 1,
              preview: web1,
              theme: "btn-back-red",
              name: "E-Commerce Website",
              description:
                "Developed a e-commerce website with purchasing system.",
              persona:
                "Persona:A wide range of people of all ages and ethnicities who are healthy and have high desires to buy fast fashion.",
              duration: "Production Period: 2 weeks(45h)",
              responsibility:
                "Areas of work: Functional design, UX/UI design, coding, debugging, deployment",
              link: "https://e-commerce.yimajiuni.com/",
            },
            {
              id: 2,
              preview: web2,
              theme: "btn-back-green",
              name: "Dashboard App",
              description: "Created a mobile first Dashboard model.",
              duration: "Production Period:4 days (16h)",
              responsibility:
                "Areas of work: Functional design, UX/UI design, coding, debugging, deployment",
              persona:
                "Persona: Store managers and staff in charge of sales and inventory control of houseplants",
              link: "https://dashboard-model.yimajiuni.com/",
            },
            {
              id: 3,
              preview: web3,
              theme: "btn-back-blue",
              name: "Travel App",
              description: `Designed and built a mobile app for finding traveling packages.
                Production Period:: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://travel-web.yimajiuni.com/",
            },
            {
              id: 4,
              preview: web4,
              theme: "btn-back-pink",
              name: "Restaurant Website",
              description: `Built a fully responsive restaurant Website.
                Production Period: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://restau-web.yimajiuni.com/",
            },
          ],
          //要修正
          designDesc: {
            line1: `日本を拠点とするソフトウェア開発者。実践的な学習とアプリの構築を通して、技術とデザインに特化しています。
            `,
            line2: `あらゆる種類の会社と仕事をし、自分のスキルを高め、あらゆる種類の人々とチームを組んできました。
            `,
          },
          //banner
          promoDesigns: [
            {
              id: 5,
              preview: eqbo,
              name: "Ad for rain boots",
              description:
                "The sales promotion,which is with a polaroid-like style design and inspired by the background of SNS culture that is to be used by young people and a wide range of other generations.",
              link: "https://yimajiuni.com/promotions/eq-bo.jpg",
            },
            {
              id: 6,
              preview: eqch,
              name: "Ad for horse riding chaps",
              description:
                "Sophisticated, easy-to-read promotion inspired by fashion magazines. Add cuts of model images as needed.",
              link: "https://yimajiuni.com/promotions/eq-ch.jpg",
            },
            {
              id: 7,
              preview: eqcu,
              name: "Ad for riding culottes",
              description:
                "Showcase price, catch copy, product images and effectively organize description and functionality display to express overall brand color and promote sales targeting a wide range of ages for the domestic market.",
              link: "https://yimajiuni.com/promotions/eq-cu.jpg",
            },
            {
              id: 8,
              preview: eqgr1,
              name: "Ad for riding gloves 1",
              description:
                "Promotion of riding gloves with special fabric for winter moisture retention and warmth.",
              link: "https://yimajiuni.com/promotions/eq-gr1.jpg",
            },
            {
              id: 9,
              preview: eqgr2,
              name: "Ad for horse riding leather gloves",
              description:
                "Promotion of well-fitting synthetic leather gloves for riding. Design to match the product emphasizing sportiness and functional aspects.",
              link: "https://yimajiuni.com/promotions/eq-gr2.jpg",
            },
            {
              id: 10,
              preview: eqgr3,
              name: "Ad for horseriding accessories",
              description:
                "Promotion that expresses friendliness and elegance, targeting all generations.",
              link: "https://yimajiuni.com/promotions/eq-gr3.jpg",
            },
            {
              id: 11,
              preview: eqgr4,
              name: "Ad for horse riding gloves 3",
              description:
                "Promotion of silicone grip glove with cost-effective with sophisticated visual.",
              link: "https://yimajiuni.com/promotions/eq-gr4.jpg",
            },
            {
              id: 12,
              preview: eqhe,
              name: "Ad of horse riding helmets",
              description:
                "Easy to read and sophisticated promotion inspired by magazines",
              link: "https://yimajiuni.com/promotions/eq-he.jpg",
            },
            {
              id: 13,
              preview: eqwh,
              name: "Ad for a horse riding whip",
              description:
                "Sales promotion with expressions that accentuate 'harmony' and 'monogram' to match the distinctive product Functional display is easy to read and aethethically appealing.",
              link: "https://yimajiuni.com/promotions/eq-wh.jpg",
            },
          ],

          //app
          appDesigns: [
            {
              id: 14,
              preview: app1,
              theme: "btn-back-pink",
              name: "EC App UX Design",
              description:
                "UX of shopping application from adding favorites and cart to purchase was designed by Figma.",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=233-88&t=TGbd5tplvGsffkfO-1&starting-point-node-id=236%3A233",
            },
            {
              id: 15,
              preview: app2,
              theme: "btn-back-blue",
              name: "Fitness App UX Design",
              description:
                "Designed an app with an attractive slider for each training menu UX on the login screen by Figma.",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=328-136&t=AMryIaIjpqI2Y7cZ-1&starting-point-node-id=327%3A190",
            },
            {
              id: 16,
              preview: app3,
              theme: "btn-back-red",
              name: "Banking App UX Design",
              description:
                "Mobile Banking App designed with monthly expense comparison graph of deposits, an investment section and purchase history feature.",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=298-558&t=8uCbvN2drsBtXyv6-1&starting-point-node-id=299%3A681",
            },
          ],
        },
      },
      jp: {
        translation: {
          greeting: "おかえりなさい。",
          CTA: {
            line1: "プロジェクトを考え中ですか？一緒に何か作りましょう！",
          },
          Contact: {
            line1: "連絡する",
            line2: "お名前",
            line3: "メールアドレス",
            line4: "メッセージ内容",
          },
          homeInfo: {
            line1: "こんにちは！私は",
            line2: "日本出身のフロントエンドエンジニア兼、",
            line3: "グラフィックデザイナーです。",
            line4: "たくさんの企業と働くうちに色々なスキルを身に着けました。",
            more: "もっと見る",
            line5:
              "この数年でいくつものプロジェクトを仕上げました。どれほどの規模や影響を与えられるかが気になりますか?",
            visit: "ポートフォリオを見る",
            line6: `プロジェクトを仕上げるディベロッパーが必要ですか?キーボードをちょっと叩いてご連絡下さい！`,
            contact: "連絡する",
          },

          aboutDesc: {
            line1: `日本を拠点とするソフトウェア開発者。主に広告代理店やメーカーのデザイン企画部に所属しパッケージや販促広告、アパレル部門のECのグラフィックデザイナーを経験し、
            実践的な学習とアプリの構築を通して、技術とデザインに特化しています。
            あらゆる種類の会社と仕事をし、自分のスキルを高め、あらゆる種類の人々とチームを組んできました。
            `,
            line2: `
            現在Web制作からイラスト、ロゴ中心にお仕事を受け付けております。お気軽にお問い合わせください。日本語/英語コミュニケーションに対応しております。
            `,
          },
          experiences: [
            {
              title: "Graphic Designer/Illustrator",
              company_name: "Business Partners",
              icon: starbucks,
              iconBg: "#accbe1",
              date: "April 2009 - Aug 2014",
              points: ` アミューズメント企業のウェブ制作管理、イベントのポスター、折込チラシ、POPや店舗看板、パネルのデザイン、パッケージ作成、求人記事、新聞記事、フリーペーパーのデザイン制作、
            文字校正。クライアントの似顔絵作成、美術展の席札、目録、案内状、メモ帳のレイアウト、デザイン等。その他クライアントは家具商社、建築・リフォーム企業等。 
            その他作業としてカッティング等の加工、封入、発送手配等全てに関わる業務。外部デザイナー作成データの印刷、大型業務用プリンターを用いての印刷オペレーション業務。
            `,
            },
            {
              title: "Graphic Designer/Apparel Assistant Designer",
              company_name: "Alpen",
              icon: tesla,
              iconBg: "#fbc3bc",
              date: "Aug 2014 - Oct -2017",
              points: [
                `
                アパレル縫製仕様書その他生地発注書の入力、デザイン画の修正、パッケージ新規制作、刷新、スポーツウェアの柄のデザイン、
                色追加、修正、取扱説明書の編集・校正等マーチャンダイザーのサポートとして他社商品との比較表の作成、
                企画プレゼンテーション資料の作成を担当。ヨガウェアや普段の生活とスポーツの垣根を取り除く
                スポーツカジュアル製品(アスレジャーファッション）の企画デザインに携わる業務。`,
              ],
            },
            {
              title: "Graphic Designer for Product Promotion",
              company_name: "W Cosmetics",
              icon: shopify,
              iconBg: "#b7e4c7",
              date: "Feb 2018 - Feb 2019",
              points: [
                `オーストラリアブリスベンを拠点に持ち英語環境の化粧品の卸売業にて美容化粧品の商
                品企画、販売促進ツールの制作、印刷オペレーター等を担当。POPやバナー等の販促ツール制作、印刷のグラフィックデザイナー業やパッケージの商
                品説明、キャッチコピー、取扱説明書の文言決めからローカライゼーション業務。ソフトウェアはAdobe photoshop とillustrator を使用。
                機能やコストを重視しつつも女性的でリアルな目線に立ったデザイン制作。
                `,
              ],
            },
            {
              title: "Web & Graphic Designer",
              company_name: "Nextel",
              icon: meta,
              iconBg: "#a2d2ff",
              date: "June 2020 - Present",
              points: [
                `
                Webグラフィックデザイナーとして直属の楽天市場のオンラインストア更新業務、セール、キャンペーン時の販促ページデザインを担当。
                自社公式ECサイトの制作にはHTMLとCSSを使ったコーディング、更新作業とメールマガジン制作配信を行いました。使用言語はマークアップとしてHTMLとCSSに加えプログラミング言語はフレームワークなしのJavascriptを使用しました。
                グラフィックデザインの仕事には主にadobe photoshop とillustratorを細部のデザイン制作に、figmaをワイヤーフレームと全体像のデザインに使用。`,
              ],
            },
          ],
          projectDesc: {
            line1: `開発を初めてしばらく経ちますが、ここで紹介するプロジェクトは、中でも自分の開発してきた中で上で思い入れのある作品です。
            `,
            line2:
              "Githubのレポジトリ内では個人プロジェクトが現在も進行中です。よろしければご覧になっていってください。チームで協力したプロジェクトは随時募集中です。",
          },
          //web
          projects: [
            {
              id: 1,
              preview: web1,
              theme: "btn-back-red",
              name: "ECアパレルウェブサイト",
              description:
                "購入と買い物カート追加システムによるECサイトをReactのContextAPIを用いて制作しました。",
              persona:
                "健康でファストファッションに対し購買意欲が高い幅広い世代の幅広い人種や年代が対象。",
              duration: "2週間",
              responsibility:
                "機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              link: "https://e-commerce.yimajiuni.com/",
            },
            {
              id: 2,
              preview: web2,
              theme: "btn-back-green",
              name: "ダッシュボードアプリ",
              description:
                "モバイルファーストのCMSタイプのダッシュボードモデルを最適化されたトレンド感のあるUIを用いて制作しました。",
              persona:
                "ペルソナ：観葉植物の販売や在庫管理を担当する店舗経営者やスタッフ。",
              duration: ":4日間",
              responsibility:
                "機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              link: "https://dashboard-model.yimajiuni.com/",
            },
            {
              id: 3,
              preview: web3,
              theme: "btn-back-blue",
              name: "トラベルブッキングWEB",
              description:
                "旅行のパッケージ検索用のアプリのフロントエンド機能をデザイン・実装しました。",
              persona:
                " ペルソナ：国内外の旅行客をターゲットに経済力に余裕がある特に日本国内インバウンド旅行客を中心とした健康な若年層社会人から中高年齢層。",
              duration: "4日間",
              responsibility:
                "機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              link: "https://travel-web.yimajiuni.com/",
            },
            {
              id: 4,
              preview: web4,
              theme: "btn-back-pink",
              name: "レストランウェブサイト",
              description:
                "レスポンシブのレストランのウェブサイトをフロントエンド設計・作成しました。",
              persona:
                "ペルソナ：地元の住民や観光客で、美味しい食事と快適なダイニング体験を求める幅広い年齢層",
              responsibility:
                "機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              duration: "4日間",
              link: "https://restau-web.yimajiuni.com/",
            },
          ],
          //要修正
          designDesc: {
            line1: `日本を拠点とするソフトウェア開発者。実践的な学習とアプリの構築を通して、技術とデザインに特化しています。
            `,
            line2: `あらゆる種類の会社と仕事をし、自分のスキルを高め、あらゆる種類の人々とチームを組んできました。
            `,
          },
          //banner
          promoDesigns: [
            {
              id: 5,
              preview: eqbo,
              name: "レインブーツの販売促進",
              description:
                "ポラロイド風のデザインやSNS文化を彷彿させるデザインを取り入れたヤング世代から他の幅広い世代迄をターゲットとして作成。",
              link: "https://yimajiuni.com/promotions/eq-bo.jpg",
            },
            {
              id: 6,
              preview: eqch,
              name: "乗馬用チャップスの販売促進",
              description:
                "ファッション誌からインスパイアされた読みやすく洗練されたプロモーション。必要に応じてモデル画像のカットを追加。",
              link: "https://yimajiuni.com/promotions/eq-ch.jpg",
            },
            {
              id: 7,
              preview: eqcu,
              name: "乗馬用キュロットの販売促進",
              description:
                "値段、キャッチコピー、商品画像のショーケースと説明文と機能表示を効果的に整理しブランド色を全体に表現し、国内向けの幅広い年代をターゲットとした販売促進画像。",
              link: "https://yimajiuni.com/promotions/eq-cu.jpg",
            },
            {
              id: 8,
              preview: eqgr1,
              name: "乗馬用グローブの販売促進1",
              description:
                "冬用保湿保温特殊生地採用の乗馬用グローブのプロモーション。",
              link: "https://yimajiuni.com/promotions/eq-gr1.jpg",
            },
            {
              id: 9,
              preview: eqgr2,
              name: "乗馬用合皮グローブの販売促進2",
              description:
                "フィット感の高い乗馬用合皮グローブのプロモーション。スポーティさと機能面を強調した製品に合わせたデザイン。",
              link: "https://yimajiuni.com/promotions/eq-gr2.jpg",
            },
            {
              id: 10,
              preview: eqgr3,
              name: "乗馬用グローブアクセサリーの販売促進",
              description:
                "すべての世代をターゲットにした親しみやすさと上品さが表現されたプロモーション",
              link: "https://yimajiuni.com/promotions/eq-gr3.jpg",
            },
            {
              id: 11,
              preview: eqgr4,
              name: "乗馬用グローブの販売促進3",
              description:
                "コストパフォーマンスに優れかつ洗練されたイメージのシリコングリップグローブのプロモーション。",
              link: "https://yimajiuni.com/promotions/eq-gr4.jpg",
            },
            {
              id: 12,
              preview: eqhe,
              name: "乗馬用ヘルメットの販売促進",
              description:
                "ファッション誌からインスパイアされた読みやすく洗練されたプロモーション。",
              link: "https://yimajiuni.com/promotions/eq-he.jpg",
            },
            {
              id: 13,
              preview: eqwh,
              name: "乗馬用ムチの販売促進",
              description:
                "特徴ある製品に合わせ「和」「モノグラム」を引き立たせる表現の販売促進機能表示は見やすくかつファッション性を加味。",
              link: "https://yimajiuni.com/promotions/eq-wh.jpg",
            },
          ],
          //app
          appDesigns: [
            {
              id: 14,
              preview: app1,
              theme: "btn-back-pink",
              name: "ECショッピングアプリ",
              description:
                "お気に入り追加、カート追加機能から購入迄ショッピングアプリのUXをFigmaで設計しました。",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=233-88&t=TGbd5tplvGsffkfO-1&starting-point-node-id=236%3A233",
            },
            {
              id: 15,
              preview: app2,
              theme: "btn-back-blue",
              name: "フィットネスショップアプリ",
              description:
                "ログイン画面で各トレイニングメニューUXを魅力的にスライダー化したアプリをFigmaで設計。",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=328-136&t=AMryIaIjpqI2Y7cZ-1&starting-point-node-id=327%3A190",
            },
            {
              id: 16,
              preview: app3,
              theme: "btn-back-red",
              name: "銀行ネットバンキングアプリ",
              description:
                "預金額の月間比較グラフや投資セクション購入履歴機能を設計したモバイル銀行アプリ。",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=298-558&t=8uCbvN2drsBtXyv6-1&starting-point-node-id=299%3A681",
            },
          ],
          //要修正
          workDesc: {
            line1: `日本を拠点とするソフトウェア開発者。実践的な学習とアプリの構築を通して、技術とデザインに特化しています。
            `,
            line2: `あらゆる種類の会社と仕事をし、自分のスキルを高め、あらゆる種類の人々とチームを組んできました。
            `,
          },
          //追加
          workDatas: [
            {
              id: 1,
              titleBk: "ECアパレル",
              titleBl: "ウェブサイト",
              image: app3,
              medium: "website",
              period: "約2週間",
              range: "設計・UX/UIデザイン・コーディング・実装",
              skills: "React, Javascript, CSS",
              summary:
                "スライダーによるアイキャッチと、購入と買い物カート追加システムを搭載したECサイトをReactのContextAPIを用いて制作。",
              concept: `ユーザーが快適に商品を閲覧し購入できるよう、視覚的に魅力的で直感的なデザインを心掛けました。特に、カラーパレットはブランドイメージに合った色を使用し、重要な情報やボタンは視認性を高めるために強調しました。また、プロダクトイメージを引き立てるために高品質な画像を使用し、ページの一貫性と美しさを保つために統一されたフォントとアイコンセットを選びました。ユーザーエクスペリエンスを向上させるため、ナビゲーションの簡素化やフィルター機能の最適化にも注力しました。
              トンマナ策定時に気をつけたこと：広々とした印象とスタイリッシュで見やすい普遍的なデザインを保つため整列されたレイアウトで情報毎にメリハリある文字の大きさを使い分け、使用色はサンプル商品（シーズン）の色調にマッチし、かつアクティブで見やすい印象にするためバナー等には彩度の高い色の商品画像を使用。
              APIからのデータ取得を効率的に行い、ページの読み込み速度を最適化し、特に画像のローディングとキャッシングに注力しました。`,
              target: "Developed an e-commerce website with purchasing system.",
              needs: "Developed an e-commerce website with purchasing system.",
              function:
                "Developed an e-commerce website with purchasing system.",
              eva: "Developed an e-commerce website with purchasing system.",
              persona:
                "健康でファストファッションに対し購買意欲が高い幅広い世代の幅広い人種や年代が対象",
              basic: "Developed an e-commerce website with purchasing system.",
              orientation:
                "Developed an e-commerce website with purchasing system.",
              preference:
                "Developed an e-commerce website with purchasing system.",
              wireframe: `全体のレイアウトと直感的な使用感、構造の論理的な流れを確保するため、既存のモデルとなるECサイトをリサーチし最適化し、ユーザーインタラクション、コンテンツ階層、応答性などの重要な要素に対し、一貫性があり分かりやすい仕様を目指した。
               UX/UIデザインのための詳細なワイヤーフレームを作成し、Viteプロジェクトをセットアップ、React Jsを使用して再利用可能なコンポーネントベースの機能を実装し、スライダーやその他の動的パーツを追加し、レスポンシブデザインを実装し、ユーザビリティをテストして修正。`,
              link: "https://e-commerce.yimajiuni.com/",

              icon: tesla,
              iconBg: "#fbc3bc",
            },
            {
              id: 2,
              titleBk: "ダッシュボード",
              titleBl: "アプリ",
              image: app3,
              medium: "website",
              period: "４日間",
              range: "設計・UX/UIデザイン・コーディング・実装",
              skills: "React, Javascript",
              summary:
                "モバイルファーストのCMSタイプのダッシュボードモデルを最適化されたトレンド感のあるUIを用いて制作しました。",
              concept: `デザイン時に気をつけたこと：観葉植物の販売サイトを管理するCMSという設定で作成したので、緑色と癒しを彷彿させるキーヴィジュアルを挿入。
              トンマナ策定時に気をつけたこと：プロフェッショナルでありながらも安心・信頼感を与えるデザインにするため、色は落ち着いた緑を基調とし、シンプルで分かりやすいアイコンやグラフを使用しました。
              実装時に気をつけたこと：パフォーマンスを最適化し、データの表示が速やかに行われるようにし、特にグラフの描画に注力しました。`,
              target: "Developed a CMS for managing a plant sale website.",
              needs: "Developed a CMS for managing a plant sale website.",
              function: "Developed a CMS for managing a plant sale website.",
              eva: "Developed a CMS for managing a plant sale website.",
              persona: "観葉植物の販売や在庫管理を担当する店舗経営者やスタッフ",
              basic: "Developed a CMS for managing a plant sale website.",
              orientation: "Developed a CMS for managing a plant sale website.",
              preference: "Developed a CMS for managing a plant sale website.",
              wireframe: `全体のレイアウトと構造に論理的な流れと直感的なナビゲーションを確保するため、ユーザーインタラクション、コンテンツ階層、応答性などの重要な要素に対し、一貫性があり分かりやすい仕様を目指した。
              ワイヤーフレームを作成し、Viteプロジェクトをセットアップし、Reactを使用して再利用可能なコンポーネントベースの機能を実装し、スライダーやその他の動的パーツを追加し、レスポンシブデザインを実装し、ユーザビリティをテストして修正。`,
              link: "https://dashboard-model.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 3,
              titleBk: "旅行予約",
              titleBl: "ウェブサイト",
              image: app3,
              medium: "website",
              period: "4日間",
              range: "設計・UX/UIデザイン・コーディング・実装",
              skills: "React, Javascript",
              summary:
                " 旅行のパッケージ検索用のアプリのフロントエンド機能をデザイン・実装しました。",
              concept: `デザイン時に気をつけたこと：旅行の楽しさと期待感をユーザーに伝えるため、大胆なビジュアルとシンプルなナビゲーションを組み合わせ、ユーザーの関心を引きつけるデザインを作成しました。
              トンマナ策定時に気をつけたこと：旅行先の魅力を最大限に伝えるため、鮮やかな色彩と大きな写真を使用し、ユーザーが直感的に操作できるデザインを心掛けました。
              実装時に気をつけたこと：画像サイズや不要ファイルを最適化し、機能面でのエラーを修正した。`,
              target: "Developed a travel booking website.",
              needs: "Developed a travel booking website.",
              function: "Developed a travel booking website.",
              eva: "Developed a travel booking website.",
              persona:
                "国内外の旅行客をターゲットに経済力に余裕がある健康な社会人から中高年齢層で特に日本国内インバウンド旅行客を中心とした。",
              basic: "Developed a travel booking website.",
              orientation: "Developed a travel booking website.",
              preference: "Developed a travel booking website.",
              wireframe: `モバイルファーストでデザインし、タッチ操作のしやすさを重視したボタンやレスポンシブデザインを優先しました。
              モバイルファーストのアプローチを採用しワイヤーフレームを作成して全体のレイアウトとユーザーインターフェースを設計。次に、Viteプロジェクトをセットアップし、Reactを使用して再利用可能なコンポーネントを開発しました。地図や検索機能などの必要なライブラリをインポートし、レスポンシブデザインを実装しました。サイト全体の使用性とパフォーマンスをテストし、フィードバックを基に修正。`,
              link: "https://travel-web.yimajiuni.com/",
              icon: tesla,
            },
            {
              id: 4,
              titleBk: "レストラン",
              titleBl: "ウェブサイト",
              image: app3,
              medium: "website",
              period: "5日間",
              range: "設計・UX/UIデザイン・コーディング・実装",
              skills: "React, Javascript",
              summary:
                "レスポンシブのレストランのウェブサイトをフロントエンド設計・作成しました。",
              concept: `デザイン時に気をつけたこと：店舗の雰囲気や料理の魅力を最大限に伝えるため、プロフェッショナルな写真を多用し、視覚的に印象的なデザインを作成しました。
              トンマナ策定時に気をつけたこと：高級感と居心地の良さを両立するため、温かみのある色彩と洗練されたレイアウトを使用し、写真を引き立てるデザインを心掛けました。
              実装時に気をつけたこと：ページの読み込み速度を最適化し、ユーザーが快適にサイトを利用できるように、画像の圧縮とキャッシング戦略を取り入れました。`,
              target: "Developed a restaurant website.",
              needs: "Developed a restaurant website.",
              function: "Developed a restaurant website.",
              eva: "Developed a restaurant website.",
              persona:
                "地元の住民や観光客で、美味しい食事と快適なダイニング体験を求める幅広い年齢層",
              basic: "Developed a restaurant website.",
              orientation: "Developed a restaurant website.",
              preference: "Developed a restaurant website.",
              wireframe: `メニューや予約情報が見やすく、ユーザーが簡単に必要な情報にアクセスできるようにレイアウトを工夫し、直感的なナビゲーションを重視しました。
              ワイヤーフレームを作成して全体のレイアウトとユーザーインターフェースを設計しました。その後、Viteプロジェクトをセットアップし、Reactを使用して再利用可能なコンポーネントを開発しました。メニューや予約システムなどの主要な機能を実装し、レスポンシブデザインを取り入れました。サイト全体の使用性とパフォーマンスをテストし、必要に応じて修正を加えました。`,
              link: "https://restau-web.yimajiuni.com/",
              icon: tesla,
            },
          ],
        },
      },
    },
  });

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: jquery,
    name: "JQuery",
    type: "Frontend",
  },
  {
    imageUrl: illustrator,
    name: "Illustrator",
    type: "Design",
  },
  {
    imageUrl: photoshop,
    name: "Photoshop",
    type: "Design",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
];

export const experiences = [
  {
    title: "Graphic Designer/Illustrator",
    company_name: "Business Partners",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "April 2009 - Aug 2014",
    points: [
      "Web production management for amusement companies, event posters, inserts, POP and store, and design of event posters, inserts, POPs, store signs, panels, packaging, job postings, newspaper articles, free newspapers, and proofreading.",
      "design, and proofreading of text. Designing portraits for clients, layouts and designs of seating cards, catalogs, guides, and notepads for art exhibitions, etc.",
      "layout, design, etc. for art exhibitions. Other clients include furniture trading companies, construction and renovation companies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Other work includes cutting and other processing, enclosure, shipping arrangements, and all other related work. Printing of data created by outside designers,",
      "large Printing of data created by outside designers, and printing operations using large commercial printers.",
    ],
  },
  {
    title: "Graphic Designer/Apparel Assistant Designer",
    company_name: "Alpen",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Aug 2014 - Oct -2017",
    points: [
      "Input apparel sewing specifications and other fabric orders, revise design drawings, create new packaging, Designing, adding colors, and revising sportswear patterns, editing and proofreading instruction manuals, etc.",
      "Creation of comparison charts with other companies' products and planning presentation materials in support of merchandisers.",
      "also I was in charge of designing sportswear patterns, adding colors, revising, editing and proofreading instruction manuals. yoga wear and sports casual wear products (athleisure fashion) that break down the barriers between daily life and sports.",
      "yoga wear and sports casual products (athleisure fashion) that remove the boundary between daily life and sports.",
    ],
  },
  {
    title: "Graphic Designer for Product Promotion",
    company_name: "W Cosmetics",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Feb 2018 - Feb 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web & Graphic Designer",
    company_name: "Nextel",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "June 2020 - Present",
    points: [
      "As a graphic designer for website , i was in charge of updating the Rakuten Ichiba online store and designing sales promotions during sales.",
      "and sales promotion design for the company's official e-commerce site. HTML and CSS coding for the company's official e-commerce site.",
      "and updating of the company's official e-commerce site using HTML and CSS, as well as the production and distribution of e-mail magazines. I used HTML and CSS as markup languages.",
      "In addition to HTML and CSS, I used Javascript as a programming language without any framework. For graphic design work, I mainly used adobe photoshop and Illustrator.",
    ],
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "E-Commerce Website",
    description: "Developed a e-commerce website with purchasing system. ",
    link: "https://e-commerce.yimajiuni.com/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Dashboard App",
    description: "Created a mobile first Dashboard model",
    link: "https://dashboard-model.yimajiuni.com/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Travel App",
    description:
      "Designed and built a mobile app for finding traveling packages",
    link: "https://travel-web.yimajiuni.com/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Restraunt Website",
    description: "Built a fully responsive restaurant Website.",
    link: "https://restau-web.yimajiuni.com/",
  },
  /*
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },*/
];

export const promoDesigns = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "E-Commerce Website",
    description: "Developed a e-commerce website with purchasing system. ",
    link: "https://e-commerce.yimajiuni.com/",
  },
];

export const appDesigns = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "E-Commerce Website",
    description: "Developed a e-commerce website with purchasing system. ",
    link: "https://e-commerce.yimajiuni.com/",
  },
];
export const workDatas = [
  {
    id: 1,
    titleBk: "ECアパレル",
    titleBl: "ウェブサイト",
    image: web1,
    medium: "website",
    period: "約2週間",
    range: "デザイン・コーディング・実装",
    skills: "React, Javascript, CSS",
    summary:
      "スライダーによるアイキャッチと、購入と買い物カート追加システムを搭載したECサイトをReactのContextAPIを用いて制作。",
    concept_target: `健康でファストファッションに対し購買意欲が高い幅広い世代の幅広い人種や
年代が対象`,
    concept_needs:
      "広々とした印象とスタイリッシュで見やすい普遍的なデザインを保つため整列されたレイアウト、かつアクティブな印象で見やすくページの一貫性と美しさを保つためデザインを統一。",
    concept_function:
      "ユーザーが快適に商品を閲覧し購入できるよう、重要な情報やボタンは視認性を高めるために強調。APIからのデータ取得を最適化。",
    concept_eva:
      "ユニバーサルな視点でのスタイル、健康的な美しさ、姿の在り方、世界の広域を対応地域、 SDGsといった新しい世代の購買システム用にカスタマイズされたデザイン。",
    persona:
      "健康でファストファッションに対し購買意欲が高い幅広い世代の幅広い人種や年代が対象",
    persona_basic: "性別:男女他+ 年代:キッズ〜シニア。",
    persona_preference: "#無駄なく#シンプルで使いやすい#色々楽しめるのが好き ",
    persona_orientation: "速い生活ペースを好む、消費は楽しみ",
    wireframe: `全体のレイアウトと直感的な使用感、構造の論理的な流れを確保するため、既存のモデルとなるECサイトをリサーチし最適化し、ユーザーインタラクション、コンテンツ階層、応答性などの重要な要素に対し、一貫性があり分かりやすい仕様を目指した。
    スライダーやその他の動的パーツを追加し、レスポンシブデザインを実装し、ユーザビリティの向上を目指しました。`,
    link: "https://e-commerce.yimajiuni.com/",
    icon: tesla,
  },
  {
    id: 2,
    titleBk: "ダッシュボード",
    titleBl: "アプリ",
    image: web2,
    medium: "website",
    period: "４日間",
    range: "デザイン・コーディング・実装",
    skills: "React, Javascript,SCSS",
    summary:
      "最適化された癒やしの雰囲気とトレンド感のあるモバイル対応ダッシュボードモデル。",
    concept_target: `観葉植物の販売や在庫管理を担当する店舗経営者やスタッフ`,
    concept_needs:
      "観葉植物の販売サイトを管理するシステムとして緑色と癒しをキーワードにしたアクティビティを彷彿させるキーヴィジュアルを挿入。 ",
    concept_function:
      "瞑想的な雰囲気を保ちながらもプロフェッショナルで安定した動作性を叶える為パフォーマンスを最適化。軽量化されたシステムと汎用性のあるシンプルなダッシュボード。",
    concept_eva:
      "一人時間を癒しに、楽しく、を交換交流。”をテーマに観葉植物だけでなくあらゆる癒しをテーマとする商品の物販に向いたデザイン。",
    persona: "観葉植物の販売や在庫管理を担当する店舗経営者やスタッフ",
    persona_basic: "女性性を意識・重視した男女他＋ 年代:30代一人暮らし世代 ",
    persona_preference: "#想い出、#こだわり、#自分らしく ",
    persona_orientation: "自分のペースで行動、丁寧な生活を好む。",
    wireframe: `全体のレイアウトと構造に論理的な流れと直感的なナビゲーションを確保するため、ユーザーインタラクション、コンテンツ階層、応答性などの重要な要素に対し、一貫性があり分かりやすい仕様を目指しました。
    動画で動きのあるインターフェースとその他の動的パーツを導入後、レスポンシブデザインを実装。`,
    link: "https://dashboard-model.yimajiuni.com/",
    icon: tesla,
  },
  {
    id: 3,
    titleBk: "旅行予約",
    titleBl: "ウェブサイト",
    image: web3,
    medium: "website",
    period: "4日間",
    range: "デザイン・コーディング・実装",
    skills: "React, Javascript,SCSS",
    summary: "魅力が伝わりやすい。旅行のパッケージ検索用のアプリ＆WEB。",
    concept_target:
      "国内外の経済力に余裕がある健康な社会人から中高年齢層で特に日本国内インバウンド旅行中心の利用者",
    concept_needs:
      "旅行の楽しさと期待感をユーザーに伝えるため、リッチで大胆なビジュアルとシンプルなナビゲーションを組み合わせ旅行先の魅力を最大限に伝えるため、鮮やかな色彩と高画質な写真を使用。",
    concept_function:
      "ビジュアルに注力しながらもユーザーが直感的に操作できるデザインを心掛け、遊び心ある操作性でユーザーの関心を惹きつけます。また画像サイズや不要ファイルを最大限に省き機能面でのエラーを修正し機能を最適化。",
    concept_eva:
      "パッケージの魅力がより明確にリアルに伝わり、思い立ったら予約出来る、ブッキングウェブサイト。",
    persona_basic: "男女＋年代:健康な全年齢、核家族ファミリー層 ",
    persona_preference: "#レジャー#知的好奇心#趣味と交流 ",
    persona_orientation: "体験重視、直感的で近未来的なライフスタイル ",
    wireframe: `モバイルファーストでデザインし、タッチ操作のしやすさを重視したボタンを優先しデザイン。地図や検索機能などを充実させ、フィードバックを基に修正。`,
    link: "https://travel-web.yimajiuni.com/",
    icon: tesla,
  },
  {
    id: 4,
    titleBk: "レストラン",
    titleBl: "ウェブサイト",
    image: web4,
    medium: "website",
    period: "5日間",
    range: "デザイン・コーディング・実装",
    skills: "React,Javascript",
    summary:
      "視覚的にも料理の魅力が伝わりやすい。レスポンシブのレストランのウェブサイトをフロントエンド設計・作成しました。",
    concept_target: `地元の住民や観光客で、美味しい食事と快適なダイニング体験を求める幅広い年齢層`,
    concept_needs:
      "店舗の雰囲気と料理の美味しさが伝わる、温かみのある色彩とフォントを使用しながら、合理的なレイアウトで視覚的にも写真を引き立てるデザイン。 ",
    concept_function:
      "ページの読み込み速度を最適化し、ユーザーが快適にサイトを利用できるように、画像の圧縮とキャッシング戦略を取り入れました。",
    concept_eva:
      "限られたリソースでリッチな体験を実現し、嗜好に沿ってカスタマイズ可能な軽量でシンプルなレストランウェブサイト。",
    persona_basic:
      "性別:男女他+ 年代:キッズ、プライム年代、シニア全て。男女＋年代:健康な全年齢",
    persona_preference:
      "#ホームレシピ #地域のコミュニティ #一家団欒の食事で家族の絆 ",
    persona_orientation:
      "古い下町風情の密なコミュニティ形成、古風な家族＆人間関係。週末は親しい仲で揃って食事 ",
    wireframe: `再利用可能なコンポーネントをReactで実装。メニューや予約情報は見やすく、ユーザーが簡単に必要な情報にアクセスできるレイアウト、直感的なナビゲーションを重視。
     メニューや予約システムなどの主要な機能は一枚のページでアクセスしやすく、様々なデバイスからアクセス出来るレスポンシブデザインを導入。サイト全体の使用性とパフォーマンスをテストし、必要に応じて修正。`,
    link: "https://restau-web.yimajiuni.com/",
    icon: tesla,
  },
  {
    /*under construction
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },*/
  },
];
export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/yimajiuni",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/",
  },
];
