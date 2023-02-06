import Image from "next/image";
import React from "react";
import style from "@/styles/twoComponentCard.module.css";

const TwoCardComponent = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.heading}>At 18 Candelriggs we make it happen</div>
        <div className={style.mainContainer}>
          <div className={style.leftContainer}>
            <div className={style.leftImageContainer}>
              <Image
                src={`/img03.png`}
                alt="imq"
                fill
                className={style.leftImage}
              />
            </div>
          </div>
          <div className={style.rightContainer}>
            <div className={style.rightImageHeading}>
              Events are the name of the game
            </div>
            <div className={style.rightImageWrapper}>
              <div className={style.rightImageContainer}>
                <Image
                  src={`/img02.png`}
                  alt="imq"
                  fill
                  className={style.rightImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoCardComponent;
