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
          description: {
            line1: "You're watching <1>{{title}}</1>Yuko Imai Portfolio",
            line2: "Stay keep updated...",
          },
        },
      },
      jp: {
        translation: {
          greeting: "こんにちは、おかえりなさい。",
          description: {
            line1:
              "これは<1>{{title}}</1>イマイユウコのポートフォリオウェブサイトです。",
            line2: "アップデートに乞うご期待...",
          },
        },
      },
    },
  });
