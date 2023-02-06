import React, { useState } from "react";
import style from "@/styles/navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const menuItems = [
    "Home",
    "What’s on",
    "Book Venue",
    "Gallery",
    "Contact Us",
  ];

  const [showDropdown, setShowDropdowm] = useState(false);

  const toggleDropdown = () => {
    setShowDropdowm(!showDropdown);
  };
  return (
    <div className={style.navbarWrapper}>
      <div className={style.navbarContainer}>
        <div className={style.leftContainer}>
          <div className={style.logoContainer}>
            <Image
              src="/logo.png"
              alt="logo"
              className={style.logoImage}
              width={76}
              height={78}
            />
          </div>
          <div className={style.searchContainer}>
            <input className={style.searchInput} placeholder="Seacrh" />
          </div>
        </div>
        <div className={style.rightContainer}>
          <div className={style.searchIconContainer}>
            <Image
              src="/search.png"
              alt="s"
              className={style.searchhIcon}
              width={16}
              height={16}
            />
          </div>
          <div className={style.menuIconContainer} onClick={toggleDropdown}>
            <Image
              src="/menu.png"
              alt="menu"
              className={style.menuIcon}
              width={35}
              height={25}
            />
          </div>
          {showDropdown && (
            <div className={style.dropdown}>
              {menuItems.map((item, index) => {
                return (
                  <div key={index} className={style.mobileMenuItem}>
                    {item}
                  </div>
                );
              })}
            </div>
          )}
          <div className={style.menuItemContainer}>
            {menuItems.map((item, index) => {
              return (
                <div key={index} className={style.menuItems}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
