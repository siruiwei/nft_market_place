import React from 'react';

import Style from "../styles/index.module.css";
import { NFTCard } from '../components/componentsindex';

const index = () => {
  return (
    <div className={Style.index}>
      <NFTCard/>
    </div>
  )
}

export default index