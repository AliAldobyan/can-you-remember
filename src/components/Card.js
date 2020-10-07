import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import cardBack from "../images/CardBack.jpg";

const Card = ({ card, checkFlipped }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };
  return (
    <div className="col-3 my-1">
      <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
        <img
          className="mx-auto"
          src={cardBack}
          height="100%"
          width="100%"
          key="front"
          onClick={() => handleFlip()}
        />
        <img
          className="mx-auto"
          src={card.front}
          height="100%"
          width="100%"
          key="back"
          onClick={() => handleFlip()}
        />
      </ReactCardFlip>
    </div>
  );
};
export default Card;
