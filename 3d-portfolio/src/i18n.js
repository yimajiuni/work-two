import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "hello, Welcome back",
          projectDesc: {
            line1: `  I've embarked on numerous projects throughout the years, but these are
            the ones i hold closest to my heart. feel free to explore my github and
            i hope it contributes to further your ideas. And your collaborations are
            highly valued
            `,
            line2: "!",
            projectDescOne: `Developed a e-commerce website with purchasing system.
            `,
            projectDescTwo: `Created a mobile first Dashboard model.
            `,
            projectDescThree: `Designed and built a mobile app for finding traveling packages.
            `,
            projectDescFour: `Built a fully responsive restaurant Website.
            `,
          },
        },
      },
      jp: {
        translation: {
          greeting: "こんにちは、おかえりなさい。",
          projectDesc: {
            line1: `開発を初めてしばらく経ちますが、ここで紹介するプロジェクトは、中でも自分の開発してきた中で上で思い入れのある作品です。
            `,
            line2:
              "Githubのレポジトリ内では個人プロジェクトが現在も進行中です。よろしければご覧になっていってください。コラボレーションは随時募集中です。",
            projectDescOne: `購入と買い物カート追加機能を用いたECサイトをReactのContextAPIを用いて制作しました。
            `,
            projectDescTwo: `モバイルファーストのCMSタイプのダッシュボードモデルを制作しました。
            `,
            projectDescThree: `旅行のパッケージ検索用のアプリのフロントエンド機能をデザイン・実装しました。
            `,
            projectDescFour: `レスポンシブの食品オーダーアプリのフロントエンド設計・作成しました。
            `,
          },
        },
      },
    },
  });
