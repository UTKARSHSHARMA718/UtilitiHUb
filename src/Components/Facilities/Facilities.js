import React, { useContext } from "react";

import { content } from "../data";
import assets20 from "../../assets/asset 20.png";
import assets19 from "../../assets/asset 19.png";
import assets18 from "../../assets/asset 18.png";
import Facility from "../Facility/Facility";

const Facilities = () => {
  const context = useContext(languageContext);
  const { language, setLanguage } = context;
  return (
    <>
      <section class="facilities">
        <div class="container flex company-review">
          <div class="image-content">
            <img src={assets18} alt="" />
          </div>
          <div class="text-content">
            <div class="top-heading-text">
              <h3>Effortless validation for</h3>
              <h2>Design professionals</h2>
              <p>
                Test interfaces, interaction flows, iconography and more, to
                help you create intuitive and delightful experiences for your
                users.
              </p>
            </div>

            <div class="bottom-text">
              <div>
                <img src={assets19} class="company-review-logo" alt="" />
              </div>

              <h3>
                We use UsabilityHub tests to help us make decisions for various
                projects. From web and mobile design to marketing activities.
              </h3>

              <div class="customer flex">
                <img src={assets20} alt="" />

                <div>
                  <h3>Rick van de Ven</h3>

                  <h4>Digital Mearketing Analyst</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {content.addvertise_img[language].map((text) => {
          return (
            <Facility
              name={text['clint-name']}
              title={text['title']}
              sub_title={text['sub-title']}
              occupation={text['clint-occupation']}
              desc={text.para}
              review={text.review}

            />
          );
        })}

        {/* <div class="container flex company-review" id="big-feature-mid">

            <div class="text-content">
                <div class="top-heading-text">

                    <h3>Effortless validation for</h3>
                    <h2>Design professionals</h2>
                    <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and
                        delightful experiences for your users.</p>

                </div>

                <div class="bottom-text">

                    <div>
                        <img src={assets19} class="company-review-logo" alt=""/>
                    </div>

                    <h3>We use UsabilityHub tests to help us make decisions for various projects. From web and mobile
                        design to marketing activities.</h3>

                    <div class="customer flex">

                        <img src={assets20} alt=""/>

                        <div>

                            <h3>Rick van de Ven</h3>

                            <h4>Digital Mearketing Analyst</h4>

                        </div>

                    </div>
                </div>
            </div>
            <div class="image-content">
                <img src={assets18} alt=""/>
            </div>

        </div>


        <div class="container flex company-review">
            <div class="image-content">
                <img src={assets18} alt=""/>
            </div>
            <div class="text-content">
                <div class="top-heading-text">

                    <h3>Effortless validation for</h3>
                    <h2>Design professionals</h2>
                    <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and
                        delightful experiences for your users.</p>

                </div>

                <div class="bottom-text">

                    <div>
                        <img src={assets19} class="company-review-logo" alt=""/>
                    </div>

                    <h3>We use UsabilityHub tests to help us make decisions for various projects. From web and mobile
                        design to marketing activities.</h3>

                    <div class="customer flex">

                        <img src={assets20} alt=""/>

                        <div>

                            <h3>Rick van de Ven</h3>

                            <h4>Digital Mearketing Analyst</h4>

                        </div>

                    </div>
                </div>
            </div>

        </div> */}
      </section>
    </>
  );
};

export default Facilities;
