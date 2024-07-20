import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import Style from './NavBar.module.css'
import { SideBar, Discover } from "../componentsindex";
import { Button } from '../componentsindex';
import images from "../../img";

const NavBar = () => {
  //---usestate
  const [discover, setDiscover] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
    } else if (btnText == "Help Center") {
      setDiscover(false);
    } else {
      setDiscover(false);
    }
  };

  const openSideBar = () =>{
    if (!openSideMenu){
      setOpenSideMenu(true);
    }else {
      setOpenSideMenu(false);
    }
  }

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo}
              alt="NFT MarketPlace"
              width={100}
              height={100}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => { }} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* //End of left section */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* *Discover Menu */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* *Create Button Section */}
          <div className = {Style.navbar_container_right_button}>
            <Button btnText="Create"/>
          </div>
          {/*Menu Button */}
          <div className = {Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon}
            onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>
      {/* *SideBar Component */}
      {openSideMenu && (
        <div className = {Style.SideBar}>
          <SideBar setOpenSideMenu = {setOpenSideMenu} />
          </div>
      )}
    </div>
  )
};

export default NavBar