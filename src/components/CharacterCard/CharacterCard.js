import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <a
        onClick={() => props.selectCharacter(props.name)}
        className={
          props.currentScore === 0
            ? "style_pre_kit style_pre_kit_ex"
            : "style_pre_kit"
        }
      >
        <img alt={props.name} src={props.image} />
      </a>
    </div>
  </div>
);

export default CharacterCard;
