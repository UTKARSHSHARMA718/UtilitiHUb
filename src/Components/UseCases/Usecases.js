import React, { useContext } from "react";
import { content } from "../data";
import { languageContext } from "../../App";
import UseCase from "../UsecaseCart/UseCase";

const Usecases = () => {
  const context = useContext(languageContext);
  const { language, setLanguage } = context;

  return (
    <>
      <section class="usecases-section">
        <div class="container">
          <div class="usecases flex">
            <h2>{content.examples[language].heading}</h2>
            <a href="#" class="secondary-btn">
            {content.examples[language].button_text} <i class="fa-sharp fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div class="usecases-area flex">
            

            {content.cards[language].map((text,index)=>{
                return <UseCase text={text} ind={index}/>
            })}

            

          </div>
        </div>
      </section>
    </>
  );
};

export default Usecases;
