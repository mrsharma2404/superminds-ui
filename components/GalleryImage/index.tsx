import Image from "next/image";
import React from "react";
import style from "@/styles/galleryImage.module.css";

const GalleryImage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.heading}>Book Venue</div>
        <div className={style.imageContainer}>
          <Image
            src={`/img05.png`}
            alt="imq"
            fill
            className={style.leftImage}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
