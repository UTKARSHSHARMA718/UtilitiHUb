import React, { useContext } from "react";
import logo from "../../assets/asset 1.png";
import { content } from "../data";
import { languageContext } from "../../App";
const Footer = () => {
  const context = useContext(languageContext);
  const { language, setLanguage } = context;
  return (
    <>
      <footer>
        <div class="container flex footer-section">
          <a href="#" class="logo">
            <img src={logo} alt="company-logo" />
          </a>

          <div class="link-list flex">
            <h3>{content.footer[language].column_1[0]}</h3>
            <a href="#" class="hover-link">
            {content.footer[language].column_1[1]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].column_1[2]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].column_1[3]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].column_1[4]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].column_1[5]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].column_1[6]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].column_1[7]}
            </a>
          </div>

          <div class="link-list flex">
            <h3>{content.footer[language].column_2[0]}</h3>
            <a href="#" class="hover-link">
            {content.footer[language].column_2[1]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].column_2[2]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].column_2[3]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].column_2[4]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].column_2[5]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].column_2[6]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].column_2[7]}
            </a>
          </div>

          <div class="link-list flex">
            <h3>{content.footer[language].coulmn_3[0]}</h3>
            <a href="#" class="hover-link">
            {content.footer[language].coulmn_3[1]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].coulmn_3[2]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].coulmn_3[3]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].coulmn_3[4]}
            </a>
            <a href="#" class="hover-link">
            {content.footer[language].coulmn_3[5]}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
