import React from "react";
import BatsImg from "../assets/bats.gif";

function Start({ handleClick }) {
  return (
    <div className="container button-start" onClick={handleClick}>
      <img src={BatsImg} alt="Bats" />
      <span>Clique para descobrir</span>
    </div>
  );
}

export default Start;
