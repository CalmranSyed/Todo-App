import React from "react";

const Card = (props) => {
  return (
    <div className={`${props.className} bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.26)] rounded-xl py-5 px-5 md:px-8 mb-5`}>{props.children}</div>
  );
};

export default Card;
