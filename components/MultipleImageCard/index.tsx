import Image from "next/image";
import React from "react";
import style from "@/styles/multipleImageCard.module.css";

const MultipleImageCard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.overContainer}>
        <div className={style.gallery}>
          <div className={style.row}>
            <div className={style.topImage}>
              <Image
                src={`/img06.png`}
                alt="imq"
                fill
                className={style.leftImage}
              />
            </div>
            <div className={style.topImage}>
              <Image
                src={`/img07.png`}
                alt="imq"
                fill
                className={style.leftImage}
              />
            </div>
          </div>

          <div className={style.row}>
            <div className={style.middleImage}>
              <Image
                src={`/img08.png`}
                alt="imq"
                fill
                className={style.leftImage}
              />
            </div>
            <div className={style.middleImage}>
              <Image
                src={`/img09.png`}
                alt="imq"
                fill
                className={style.leftImage}
              />
            </div>
          </div>

          <div className={style.bottomImage}>
            <Image
              src={`/img10.png`}
              alt="imq"
              fill
              className={style.leftImage}
            />
          </div>
        </div>
        <div className={style.container}>
          <div className={style.content}>
            {`  A one-stop cabaret lounge in the heart of Merchant City, 18
            Candleriggs (formerly known as Wild Cabaret) knows no bounds when it
            comes to unique dabbles, daring nights and dashing shows. `}
            <br />
            <br />
            {`Echoing its eccentric entertainment, the decor is markedly
            Art Deco. Gilded in gold, with a bar boasting its name up in
            Hollywood-style lights, these two spaces epitomize showbiz and
            glistening sass. Sashay down to a table of baroque seats and let the
            show commence. `}
            <br /> <br />
            {`Events are the name of the game at 18
            Candelriggs, where live music and cabaret reign supreme. From
            burlesque shows and circus troupes to comedy nights and luxe shows,
            it's at the top of its game when it comes to providing guests with a
            wholly unique drinking and dining experience in the city. Top hats?
            Sparkles? And feather boas? These all come as standard.`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleImageCard;
