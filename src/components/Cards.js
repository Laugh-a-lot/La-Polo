import React from "react";
import "../static/cards.scss";

function Cards(props) {
  return (
    <div>
      <div className={"card " +(props.isOdd ?"reverse": "") } >
    <img
      src={props.image}
      className="card__image"
      alt="brown couch"
    />
        <div className="card__content">
          <h3 className="card__title">{props.name}</h3>
    <h2 className="card__title">
        {props.jobTitle}
        </h2>
        
      <h4 className="card__title">
          
          {props.skills}
      </h4>
    </div>
  </div>
    </div>
  );
}

export default Cards;
