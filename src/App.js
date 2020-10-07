import React, { useState } from "react";
import "./App.css";

//Data
import allCards from "./data.js";

//Utils
import { shuffle } from "./utils.js";

//Components
import Card from "./components/Card.js";

function App() {
  const [cards, setCards] = useState(shuffle([...allCards, ...allCards]));

  let cardsGrid = cards.map((card, idx) => (
    <Card key={`${card.id}-${idx}`} card={card} />
  ));
  return (
    <div className="App border my-5">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row border">{cardsGrid}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
