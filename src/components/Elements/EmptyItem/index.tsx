import React from "react";
import emptyStyle from "./Empty.module.scss";
import emptyImage from "@/assets/images/empty.svg";

interface Props {
  children: React.ReactNode;
}

const EmptyItem: React.FC<Props> = ({ children }) => {
  return (
    <div className={emptyStyle.container}>
      <div className={emptyStyle.banner}>
        <img src={emptyImage} alt="empty" />
      </div>
      <p className={emptyStyle.description}>{children}</p>
    </div>
  );
};

export default EmptyItem;
