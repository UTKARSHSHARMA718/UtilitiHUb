import React from "react";

const Feature = ({heading,desc,button_text,imgUrl}) => {
  return (

    <>
      <div class="card flex">
        <img src={imgUrl} alt="" />
        <h3>{heading}</h3>
        <p>{desc}</p>
        <a href="#" class="secondary-btn">
          {button_text} <i class="fa-sharp fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </>
  );
};

export default Feature;
