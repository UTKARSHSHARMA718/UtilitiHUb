import React, { useContext } from "react";
import { content } from "../data";
import { languageContext } from "../../App";
const CallToAction = () => {
  const context = useContext(languageContext);
  const { language, setLanguage } = context;

  return (
    <>
      <section class="starting-today-section">
        <div class="container flex starting-today-section-text">
          <h2>{content.started_Today[language].title}</h2>
          <p>{content.started_Today[language].desc}</p>
          <a href="#" class="primary-btn">
          {content.started_Today[language].button_text}
          </a>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
