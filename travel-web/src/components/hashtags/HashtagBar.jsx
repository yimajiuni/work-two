import React from "react";
import "./hashtags.scss";
import { destinations } from "../../data/destinations";
import { useLanguage } from "../../i18n/LanguageContext";

const HashtagBar = () => {
  const { t } = useLanguage();

  return (
    <section className="hashtagSection" id="hashtags">
      <div className="secContent container">
        <div className="sectionCard">
          <p className="eyebrow">{t.hashtags.eyebrow}</p>
          <h3 className="fontSail">{t.hashtags.title}</h3>
          <p className="intro">{t.hashtags.intro}</p>
          <div className="tagCloud">
            {destinations.map((item) => (
              <button key={item.id} type="button" className="hashTag">
                {item.hashtag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HashtagBar;
