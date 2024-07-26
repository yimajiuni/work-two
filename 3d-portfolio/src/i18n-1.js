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
          projectDesc: {
            line1: `  I've embarked on numerous projects throughout the years, but these are
            the ones i hold closest to my heart. feel free to explore my github and
            i hope it contributes to further your ideas. And your collaborations are
            highly valued
            `,
            line2: "!",
          },

          projects: [
            {
              iconUrl: pricewise,
              theme: "btn-back-red",
              name: "E-Commerce Website",
              description: `Developed a e-commerce website with purchasing system. 
                Production Period: 2 weeks(45h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Persona:A wide range of people of all ages and ethnicities who are healthy and have high desires to buy fast fashion.`,
              link: "https://e-commerce.yimajiuni.com/",
            },
            {
              iconUrl: threads,
              theme: "btn-back-green",
              name: "Dashboard App",
              description: `Created a mobile first Dashboard model.
              Production Period:4 days (16h)
              Areas of work: Functional design, UX/UI design, coding, debugging, deployment
              Persona: Store managers and staff in charge of sales and inventory control of houseplants`,
              link: "https://dashboard-model.yimajiuni.com/",
            },
            {
              iconUrl: car,
              theme: "btn-back-blue",
              name: "Travel App",
              description: `Designed and built a mobile app for finding traveling packages.
                Production Period:: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://travel-web.yimajiuni.com/",
            },
            {
              iconUrl: snapgram,
              theme: "btn-back-pink",
              name: "Restaurant Website",
              description: `Built a fully responsive restaurant Website.
                Production Period: 5 days (20h)
                Areas of work: Functional design, UX/UI design, coding, debugging, deployment
                Personas: Local residents and tourists of all ages, looking for good food and a comfortable dining experience.`,
              link: "https://restau-web.yimajiuni.com/",
            },
          ],
          aboutDesc: {
            line1: `software developer based in Japan Specialized in technology and designs through hands-on learning and building apps.
            `,
            line2: `I've worked with all sorts of companies, leveling up my skills and teaming up with all sort of people. here' the rundown :
            `,
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
          //追加3

          promoDesigns: [
            {
              preview: eqbo,
              name: "Promotion for rain boots",
              description:
                "The sales promotion,which is with a polaroid-like style design and inspired by the background of SNS culture that is to be used by young people and a wide range of other generations.",
              link: "https://yimajiuni.com/promotions/eq-bo.jpg",
            },
            {
              preview: eqch,
              name: "Sales promotion of horse riding chaps",
              description:
                "Sophisticated, easy-to-read promotion inspired by fashion magazines. Add cuts of model images as needed.",
              link: "https://yimajiuni.com/promotions/eq-ch.jpg",
            },
            {
              preview: eqcu,
              name: "Sales promotion for riding culottes",
              description:
                "Showcase price, catch copy, product images and effectively organize description and functionality display to express overall brand color and promote sales targeting a wide range of ages for the domestic market.",
              link: "https://yimajiuni.com/promotions/eq-cu.jpg",
            },
            {
              preview: eqgr1,
              name: "Sales promotion of riding gloves 1",
              description:
                "Promotion of riding gloves with special fabric for winter moisture retention and warmth.",
              link: "https://yimajiuni.com/promotions/eq-gr1.jpg",
            },
            {
              preview: eqgr2,
              name: "Sales promotion of synthetic leather gloves for horse riding 2",
              description:
                "Promotion of well-fitting synthetic leather gloves for riding. Design to match the product emphasizing sportiness and functional aspects.",
              link: "https://yimajiuni.com/promotions/eq-gr2.jpg",
            },
            {
              preview: eqgr3,
              name: "Sales promotion of riding glove accessories",
              description:
                "Promotion that expresses friendliness and elegance, targeting all generations.",
              link: "https://yimajiuni.com/promotions/eq-gr3.jpg",
            },
            {
              preview: eqgr4,
              name: "Sales promotion for horse riding glove 3",
              description:
                "Promotion of silicone grip glove with cost-effective with sophisticated visual.",
              link: "https://yimajiuni.com/promotions/eq-gr4.jpg",
            },
            {
              preview: eqhe,
              name: "Sales promotion of horse riding helmets",
              description:
                "Easy to read and sophisticated promotion inspired by magazines",
              link: "https://yimajiuni.com/promotions/eq-he.jpg",
            },
            {
              preview: eqwh,
              name: "Sales promotion for a horse riding whip",
              description:
                "Sales promotion with expressions that accentuate 'harmony' and 'monogram' to match the distinctive product Functional display is easy to read and aethethically appealing.",
              link: "https://yimajiuni.com/promotions/eq-wh.jpg",
            },
          ],
          //追加4
          appDesigns: [
            {
              preview: app1,
              theme: "btn-back-pink",
              name: "EC App UX Design by Figma",
              description:
                "UX of shopping application from adding favorites and cart to purchase was designed by Figma.",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=233-88&t=TGbd5tplvGsffkfO-1&starting-point-node-id=236%3A233",
            },
            {
              preview: app2,
              theme: "btn-back-blue",
              name: "Fitness App UX Design by Figma",
              description:
                "Designed an app with an attractive slider for each training menu UX on the login screen by Figma.",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=328-136&t=AMryIaIjpqI2Y7cZ-1&starting-point-node-id=327%3A190",
            },
            {
              preview: app3,
              theme: "btn-back-red",
              name: "Banking App UX Design by Figma",
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
          projectDesc: {
            line1: `開発を初めてしばらく経ちますが、ここで紹介するプロジェクトは、中でも自分の開発してきた中で上で思い入れのある作品です。
            `,
            line2:
              "Githubのレポジトリ内では個人プロジェクトが現在も進行中です。よろしければご覧になっていってください。チームで協力したプロジェクトは随時募集中です。",
          },
          projects: [
            {
              iconUrl: pricewise,
              theme: "btn-back-red",
              name: "E-Commerce Website",
              description:
                "購入と買い物カート追加システムによるECサイトをReactのContextAPIを用いて制作しました。",
              persona:
                "健康でファストファッションに対し購買意欲が高い幅広い世代の幅広い人種や年代が対象。",
              duration: "制作期間：2週間",
              responsibility:
                "担当領域：機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              link: "https://e-commerce.yimajiuni.com/",
            },
            {
              iconUrl: threads,
              theme: "btn-back-green",
              name: "Dashboard App",
              description:
                "モバイルファーストのCMSタイプのダッシュボードモデルを最適化されたトレンド感のあるUIを用いて制作しました。",
              persona:
                "ペルソナ：観葉植物の販売や在庫管理を担当する店舗経営者やスタッフ。",
              duration: "制作期間：:4日間",
              responsibility:
                "担当領域：機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              link: "https://dashboard-model.yimajiuni.com/",
            },
            {
              iconUrl: car,
              theme: "btn-back-blue",
              name: "Travel App",
              description:
                "旅行のパッケージ検索用のアプリのフロントエンド機能をデザイン・実装しました。",
              persona:
                " ペルソナ：国内外の旅行客をターゲットに経済力に余裕がある特に日本国内インバウンド旅行客を中心とした健康な若年層社会人から中高年齢層。",
              duration: "制作期間：4日間",
              responsibility:
                "担当領域：機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              link: "https://travel-web.yimajiuni.com/",
            },
            {
              iconUrl: snapgram,
              theme: "btn-back-pink",
              name: "Restraunt Website",
              description:
                "レスポンシブのレストランのウェブサイトをフロントエンド設計・作成しました。",
              persona:
                "ペルソナ：地元の住民や観光客で、美味しい食事と快適なダイニング体験を求める幅広い年齢層",
              responsibility:
                "担当領域：機能設計、UX/UIデザイン、コーディング、デバグ、実装",
              duration: "制作期間：4日間",
              link: "https://restau-web.yimajiuni.com/",
            },
          ],
          aboutDesc: {
            line1: `日本を拠点とするソフトウェア開発者。実践的な学習とアプリの構築を通して、技術とデザインに特化しています。
            `,
            line2: `あらゆる種類の会社と仕事をし、自分のスキルを高め、あらゆる種類の人々とチームを組んできました。
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
          promoDesigns: [
            {
              preview: eqbo,
              name: "レインブーツの販売促進",
              description:
                "ポラロイド風のデザインやSNS文化を彷彿させるデザインを取り入れたヤング世代から他の幅広い世代迄をターゲットとして作成。",
              link: "https://yimajiuni.com/promotions/eq-bo.jpg",
            },
            {
              preview: eqch,
              name: "乗馬用チャップスの販売促進",
              description:
                "ファッション誌からインスパイアされた読みやすく洗練されたプロモーション。必要に応じてモデル画像のカットを追加。",
              link: "https://yimajiuni.com/promotions/eq-ch.jpg",
            },
            {
              preview: eqcu,
              name: "乗馬用キュロットの販売促進",
              description:
                "値段、キャッチコピー、商品画像のショーケースと説明文と機能表示を効果的に整理しブランド色を全体に表現し、国内向けの幅広い年代をターゲットとした販売促進画像。",
              link: "https://yimajiuni.com/promotions/eq-cu.jpg",
            },
            {
              preview: eqgr1,
              name: "乗馬用グローブの販売促進1",
              description:
                "冬用保湿保温特殊生地採用の乗馬用グローブのプロモーション。",
              link: "https://yimajiuni.com/promotions/eq-gr1.jpg",
            },
            {
              preview: eqgr2,
              name: "乗馬用合皮グローブの販売促進2",
              description:
                "フィット感の高い乗馬用合皮グローブのプロモーション。スポーティさと機能面を強調した製品に合わせたデザイン。",
              link: "https://yimajiuni.com/promotions/eq-gr2.jpg",
            },
            {
              preview: eqgr3,
              name: "乗馬用グローブアクセサリーの販売促進",
              description:
                "すべての世代をターゲットにした親しみやすさと上品さが表現されたプロモーション",
              link: "https://yimajiuni.com/promotions/eq-gr3.jpg",
            },
            {
              preview: eqgr4,
              name: "乗馬用グローブの販売促進3",
              description:
                "コストパフォーマンスに優れかつ洗練されたイメージのシリコングリップグローブのプロモーション。",
              link: "https://yimajiuni.com/promotions/eq-gr4.jpg",
            },
            {
              preview: eqhe,
              name: "乗馬用ヘルメットの販売促進",
              description:
                "ファッション誌からインスパイアされた読みやすく洗練されたプロモーション。",
              link: "https://yimajiuni.com/promotions/eq-he.jpg",
            },
            {
              preview: eqwh,
              name: "乗馬用ムチの販売促進",
              description:
                "特徴ある製品に合わせ「和」「モノグラム」を引き立たせる表現の販売促進機能表示は見やすくかつファッション性を加味。",
              link: "https://yimajiuni.com/promotions/eq-wh.jpg",
            },
          ],
          appDesigns: [
            {
              preview: app1,
              theme: "btn-back-pink",
              name: "ECショッピングアプリ",
              description:
                "お気に入り追加、カート追加機能から購入迄ショッピングアプリのUXをFigmaで設計しました。",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=233-88&t=TGbd5tplvGsffkfO-1&starting-point-node-id=236%3A233",
            },
            {
              preview: app2,
              theme: "btn-back-blue",
              name: "フィットネスショップアプリ",
              description:
                "ログイン画面で各トレイニングメニューUXを魅力的にスライダー化したアプリをFigmaで設計。",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=328-136&t=AMryIaIjpqI2Y7cZ-1&starting-point-node-id=327%3A190",
            },
            {
              preview: app3,
              theme: "btn-back-red",
              name: "銀行ネットバンキングアプリ",
              description:
                "預金額の月間比較グラフや投資セクション購入履歴機能を設計したモバイル銀行アプリ。",
              link: "https://www.figma.com/proto/ev72NdVx6r1E9fJJiiu9wX/Untitled?node-id=298-558&t=8uCbvN2drsBtXyv6-1&starting-point-node-id=299%3A681",
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
