import React, { useContext } from "react";
import { content } from "../data";
import { languageContext } from "../../App";
import Feature from "../feature/Feature";

import img1 from '../../assets/asset 11.svg'
import img2 from '../../assets/asset 13.svg'
import img3 from '../../assets/asset 14.svg'
import img4 from '../../assets/asset 15.svg'
import img5 from '../../assets/asset 16.svg'
import img6 from '../../assets/asset 17.svg'

const Features = () => {
  const context = useContext(languageContext);
  const { language, setLanguage } = context;
  const imgUrls = [img1,img2,img3,img4,img5,img6]
  return (
    <>
      <section class="features">
        <div class="container">
          <div class="features-heading center-text">
            <h2>Your user research Swiss Army knife</h2>
            <a href="#" class="secondary-btn">
              See all features<i class="fa-sharp fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div class="flex all-features">
            {content.facilities[language].map((text,index) => {
              return (
                <Feature
                  heading={text[0]}
                  desc={text[1]}
                  button_text={text[2]}
                  imgUrl={imgUrls[index]}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
