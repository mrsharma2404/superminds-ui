import Image from "next/image";
import React from "react";
import style from "@/styles/banner.module.css";

const Banner = () => {
  return (
    <div className={style.bannerWrapper}>
      <div className={style.bannerImageContainer}>
        <div className={style.contentWrapper}>
          <div className={style.contentBox}>
            <div className={style.headingLarge}>
              The perfect night out in Glasgow !
            </div>
            <div className={style.hedaingMedium}>18 Candleriggs</div>
            <div className={style.hedaingMedium}>ON 14TH & 15TH FEB</div>
            <div className={style.bookButton}>Book Tickets</div>
            <div className={style.row}>
              <div className={style.hedaingSmall}>
                3 COURSE MEAL & SHOW INCLUDED
              </div>
              <div className={style.hedaingSmall}>$</div>
              <div className={style.hedaingSmall}>17 per person</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
