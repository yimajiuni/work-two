import React, { useEffect } from "react";

const languages = [
  { code: "en", lang: "English" },
  { code: "jp", lang: "Japanese" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    console.log(i18n.dir());
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18nlanguage ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage()}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};
export default LanguageSelector;
