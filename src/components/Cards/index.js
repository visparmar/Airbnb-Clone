import React from "react";
import {lists} from "../../assets/cards-list.js"
import Card from "./card";
import "./style.css";
function Cards({ list }) {
  return (
    <div className="cards-flex">
      {lists.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Cards;
