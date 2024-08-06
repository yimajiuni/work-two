import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "jp", lang: "日本語" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div>
      <select
        value={i18n.language}
        onChange={changeLanguage}
        className="language-selector"
      >
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {lng.lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
