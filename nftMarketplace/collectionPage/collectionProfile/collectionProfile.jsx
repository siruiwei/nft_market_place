import React from 'react';

import Style from './collectionProfile.module.css';
import images from "../../img";

const collectionProfile = () => {
    const cardArray = [1, 2, 3, 4];
  return (
    <div className={Style.collectionProfile}>
        <div className={Style.collectionProfile_box}>
            <div className={Style.collectionProfile_box_left}>
                <Image src={images.nft_image_1}
                alt = "nft image"
                width={800}
                height={800}
                className={Style.collectionProfile_box_left}
                />
            </div>
            <div className={Style.collectionProfile_box_middle}>
                <h1>Awesome NFTs Collecition</h1>
                <div className={Style.collectionProfile_box_middle_box}>
                    {cardArray.map((el,i) => (
                        <div className={Style.collectionProfile_box_middle_box_item}
                        key={i+1}
                        >
                            <small>Floor price</small>
                            <p>${i+1}95,4683</p>
                            <span>+{i+2}.11%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default collectionProfile