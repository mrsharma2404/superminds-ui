import Image from "next/image";
import React from "react";
import style from "@/styles/basicCard.module.css";

const BasicCard = ({ card }: any) => {
  return (
    <div className={style.basicCardWrapper}>
      <div className={style.basicCardImageContainer}>
        <Image
          src={`/${card.image}.png`}
          alt="imq"
          width="100"
          height="100"
          className={style.basicCardImage}
        />
      </div>
      <div className={style.contentContainer}>
        <div className={style.heading}>{card.heading}</div>
        <div className={style.content}>
          <div className={style.description1}>{card.description1}</div>
          <div className={style.description2}>{card.description2}</div>
        </div>

        <div className={style.ticketDetails}>
          <div className={style.detailIcon}>
            <Image
              src={"/detail.png"}
              alt="imq"
              width="14"
              height="14"
              //   className={style.basicCardImage}
            />
          </div>
          <div>Tickets</div>
          <div className={style.currencyIcon}>
            <Image
              src={"/pound1.png"}
              alt="imq"
              width="8"
              height="8"
              //   className={style.basicCardImage}
            />
          </div>
          <div>{card.price}</div>
          <div className={style.watchIcon}>
            <Image
              src={"/watch1.png"}
              alt="imq"
              width="12"
              height="12"
              //   className={style.basicCardImage}
            />
          </div>
          <div>Show 8pm | Doors 6pm</div>
        </div>
        <div className={style.bottomContent}>
          <div className={style.row}>
            <div className={style.calendarIcon}>
              <Image
                src={"/calendar1.png"}
                alt="imq"
                width="15"
                height="15"
                //   className={style.basicCardImage}
              />
            </div>
            <div>{card.date}</div>
          </div>
          <div className={style.button}> Book Tickets</div>
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
