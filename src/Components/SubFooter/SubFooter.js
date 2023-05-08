import React,{useContext} from "react";
import { content } from "../data";
import { languageContext } from "../../App";
const SubFooter = () => {
  const context = useContext(languageContext);
  const { language, setLanguage } = context;
  return (
    <>
      <div class="sub-footer">
        <div class="container flex sub-footer-section">
          <div class="sub-footer-text flex center-text">
            <a href="" class="hover-link">
            {content.sub_footer[language][0]}
            </a>
            <a href="" class="hover-link">
              {content.sub_footer[language][1]}
            </a>
            <a href="" class="hover-link">
            {content.sub_footer[language][2]}
            </a>
          </div>
          <div class="sub-footer-icons flex">
            <a href="" class="hover-link">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="" class="hover-link">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="" class="hover-link">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="" class="hover-link">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubFooter;
