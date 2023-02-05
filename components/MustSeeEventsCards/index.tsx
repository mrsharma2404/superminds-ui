import Image from "next/image";
import React from "react";
import style from "@/styles/MustSeeEventsCards.module.css";

const MustSeeEventsCards = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.rightBox}></div>
          <div className={style.mainLabel}>Must See Events</div>
          <div className={style.viewAllLabel}>View All</div>
        </div>
        <div className={style.imagesWrapper}>
          <div className={style.imagesContainer}>
            <div className={style.leftImageWrapper}>
              <div className={style.leftImageBox}>
                <Image
                  src={"/img1.png"}
                  className={style.leftImage}
                  alt="img"
                  width="100"
                  height="100"
                />
              </div>
            </div>
            <div className={style.middleImageWrapper}>
              <div className={style.middleImageContainer}>
                <div className={style.middleImageBox}>
                  <Image
                    src={"/img1.png"}
                    className={style.middleImage}
                    alt="img"
                    width="100"
                    height="100"
                  />
                </div>
              </div>

              <div className={style.contentBox}>
                <div className={style.middleLable}>Carnival of Carnage</div>
                <div>
                  <div></div>
                  <div className={style.smallLabel}>
                    18 Candleriggs, Glasgow City Centre G1 1LD
                  </div>
                </div>
                <div>
                  <div></div>
                  <div className={style.smallLabel}>8th October 2022</div>
                </div>
                <div className={style.row}>
                  <div></div>
                  <div className={style.smallLabel}>7pm</div>
                </div>
              </div>
              <div className={style.bookNowButtonContainer}>
                <div className={style.bookNowButton}>Book Tickets</div>
              </div>
            </div>

            <div className={style.rightImageWrapper}>
              <div className={style.rightImageBox}>
                <Image
                  src={"/img1.png"}
                  className={style.rightImage}
                  alt="img"
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.bottomConatiner}>
          <div className={style.viewAllButton}> View All </div>
        </div>
      </div>
    </div>
  );
};

export default MustSeeEventsCards;
