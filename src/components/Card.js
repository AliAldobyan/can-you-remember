import React from "react";

const Card = (props) => {
  return (
    <div className="col-3 my-1">
      <img
        className="mx-auto"
        src={props.card.front}
        height="100%"
        width="100%"
        key="front"
      />
    </div>
  );
};
export default Card;
