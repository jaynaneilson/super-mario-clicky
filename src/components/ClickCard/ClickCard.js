import React from "react";
import "./ClickCard.css";

const ClickCard = props => (

    <div className="card col=12">
      <div className="img-container" dataid={props.id} onClick={() => props.randomImage(props.id)}>
        <img alt={props.image} src={props.image} />
      </div>
      {}
    </div>


);

export default ClickCard;