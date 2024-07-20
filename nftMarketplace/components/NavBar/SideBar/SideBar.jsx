import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { TiArrowSortedDown } from "react-icons/ti";

import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";


const SideBar = ({setOpenSideMenu}) => {
  //usestate
  const [openDiscover, setOpenDiscover] = useState(false);

  //Discover Nav Menu
  const discover = [
    {
      name:"Collection",
      link:"collection"
    },
    {
      name:"Search",
      link:"search"
    },
    {
      name:"NFT Details",
      link:"NFT-Details"
    },
    {
      name:"Account Setting",
      link:"Account-Setting"
    },
    {
      name:"Connect Wallet",
      link:"connect-wallet"
    },
  ];

  const openDiscoverMenu = ()=> {
    if(!openDiscover){
      setOpenDiscover(true);
    }else {
      setOpenDiscover(false);
    }
  };

  const closeSideBar =() => {
    setOpenSideMenu(false);
  };

  return (
    <div className = {Style.sideBar}>
      <GrClose className = {Style.sideBar_closeBtn} onClick={()=> closeSideBar()}/>
      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150}/>
        <p>Discover the most outstanding articles on all topics of NFT and your own stories and share them.</p>
        <div className={Style.sideBar_menu}>
          <div>
            <div className={Style.sideBar_menu_box} onClick={()=> openDiscoverMenu()}>
              <p>Discover</p>
              <TiArrowSortedDown/>
            </div>
            {openDiscover && (
              <div className={Style.sideBar_discover}>
                {discover.map((el,i) => (
                  <p key={i+1}>
                    <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={Style.sideBar_button}>
          <Button btnName="Create" />
          <Button btnName="Connect Wallet"/>
        </div>
      </div>
    </div>
  )
}

export default SideBar