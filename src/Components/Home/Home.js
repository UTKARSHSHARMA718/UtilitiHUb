import React, { useContext } from "react";
import amazon from "../../assets/asset 3.png";
import google from "../../assets/asset 4.png";
import taskrabbit from "../../assets/asset 5.png";
import airtable from "../../assets/asset 6.png";
import box from "../../assets/asset 7.png";
import godaddy from "../../assets/asset 8.svg";
import asana from "../../assets/asset 9.png";
import HomeImage from "../../assets/asset 2.jpeg";
import { content } from "../data";
import { languageContext } from "../../App";

const Home = () => {
  const context = useContext(languageContext);
  const { language, setLanguage } = context;

  return (
    <>
      <header>
        <div class="container flex heading">
          <div class="left-section">
            <h1>{content["home-banner-text"][language].title}</h1>
            <p>
            {content["home-banner-text"][language].desc}
            </p>
            <a href="#" class="primary-btn get-started-btn">
            {content["home-banner-text"][language]["button-text"]}
            </a>
          </div>
          <div class="right-section">
            <img src={HomeImage} alt="" />
          </div>
        </div>
      </header>

      <section class="customer-orgs-section">
        <div class="container">
          <div class="small-bold-text center-text">
            {content["company-clints"][language]}
          </div>
          <div class="companies-logo flex">
            <img src={amazon} alt="" />
            <img src={google} alt="" />
            <img src={airtable} alt="" />
            <img src={taskrabbit} alt="" />
            <img src={box} alt="" style={{ width: "60px" }} />
            <img src={godaddy} alt="" />
            <img src={asana} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
