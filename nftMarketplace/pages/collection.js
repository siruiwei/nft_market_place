import React from 'react';

import Style from "../styles/collection.module.css";
import images from "../img";
import { Banner, collectionProfile } from '../collectionPage/collectionIndex';
import { Slider, Brand } from "../components/componentsindex";

const collection = () => {
  return (
    <div className={Style.collection}>
        <Banner bannerImage={images.creatorbackground1}/>
        <collectionProfile />
    </div>
  )
}

export default collection