import React from "react";
import "./fruits.css";

function Fruits(props) {
  return (
    <div className="Fruits">
      <p onClick={props.itemClicked}>
        This is {props.name} and it costs {props.cost}$
      </p>
    </div>
  );
}

export default Fruits;
