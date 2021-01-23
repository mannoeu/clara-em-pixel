import React from "react";
import LoadingImg from "../assets/loading.gif";

function Loading() {
  return (
    <div className="container-img">
      <div className="loading-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img src={LoadingImg} alt="Loading" />
    </div>
  );
}

export default Loading;
