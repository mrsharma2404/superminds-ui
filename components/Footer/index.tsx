import Image from "next/image";
import React from "react";
import style from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerWrapper}>
      <div className={style.footerContainer}>
        <div className={style.leftContainer}>
          <div className={style.emailContainer}>
            <div className={style.emailLable}>Get Event Updates</div>
            <div className={style.emailInputContainer}>
              <input
                placeholder="Enter email address"
                className={style.emailInput}
              />
              <div className={style.submitButton}>Submit</div>
            </div>
          </div>
        </div>
        <div className={style.rightContainer}>
          <div className={style.basicDetailsConatiner}>
            <div className={style.labelMedium}>Contact Us</div>
            <div className={style.row}>
              <div className={style.messageIcon}>
                <Image
                  src="/message.png"
                  className={style.messageIcon}
                  alt="menu"
                  width={25}
                  height={25}
                />
              </div>
              <div className={style.labelSmall}>events@18candleriggs.com</div>
            </div>
            <div className={style.row}>
              <div className={style.phoneIcon}>
                <Image
                  src="/phone.png"
                  alt="menu"
                  className={style.phoneIcon}
                  width={25}
                  height={25}
                />
              </div>
              <div className={style.labelSmall}>07936 558303</div>
            </div>
          </div>
          <div className={style.socialMediaWrapper}>
            <div className={style.row}>
              <div>
                <Image
                  src="/facebook.png"
                  alt="menu"
                  className={style.socialMediaicon}
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <Image
                  src="/instagram.png"
                  alt="menu"
                  className={style.socialMediaicon}
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
