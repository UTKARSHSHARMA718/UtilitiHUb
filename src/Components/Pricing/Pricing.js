import React, { useContext } from "react";
import price from "../../assets/asset 40.png";
import { languageContext } from "../../App";
import {content} from '../data'

const Pricing = () => {
  const context = useContext(languageContext);
  const { language, setLanguage } = context;

  return (
    <>
      <section class="pricing-section">
        <div class="container flex pricing-section-container">
          <div class="left-text-content flex">
            <div class="content-header flex">
              <h1 style={{ color: "white" }}>{content.learn_more[language].title}</h1>
              <h1 style={{ color: "white" }}>{content.learn_more[language].sub_title}</h1>
              <p style={{ color: "#b9cde4" }}>
              {content.learn_more[language].para}
              </p>
            </div>

            <div class="panel-facilities flex">
              <h3 style={{ color: "white" }}>{content.learn_more[language].sub_title}</h3>
              <ul class="panel-items">
                <li>• {content.learn_more[language].title}</li>
                <li>• {content.learn_more[language].li_1}</li>
                <li>• {content.learn_more[language].li_2}</li>
                <li>• {content.learn_more[language].li_3}</li>
                <li>• {content.learn_more[language].li_4}</li>
                <li>• {content.learn_more[language].li_5}</li>
              </ul>
            </div>

            <a href="#" class="primary-btn" id="full-btn">
            {content.learn_more[language].button_text}
            </a>
          </div>
          <div class="price-img">
            <img src={price} alt="pricing-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
