import React from "react";

const UseCase = ({text,ind}) => {
  return (
    <a href="#" class="usecases-card" id={`u-card-${ind+1}`}>
      <h3 class="card-text">
        {text}
      </h3>
    </a>
  );
};

export default UseCase;
