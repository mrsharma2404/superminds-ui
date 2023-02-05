import Image from "next/image";
import React from "react";
import style from "@/styles/basicCardLayout.module.css";
import BasicCard from "../BasicCard";
import { data } from "@/services/data";

const BasicCardLayout = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.rightBox}></div>
        <div className={style.mainLabel}>
          What's On At Glasgow's Coolest Event Space.
        </div>
        <div className={style.viewAllLabel}>View All</div>
      </div>
      <div className={style.basicCards}>
        {data.map((card, index) => {
          return <BasicCard card={card} />;
        })}
      </div>
      <div className={style.bottomConatiner}>
        <div className={style.viewAllButton}> View All </div>
      </div>
    </div>
  );
};

export default BasicCardLayout;
