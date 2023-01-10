import React from "react";
import loadingStyle from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={loadingStyle.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
