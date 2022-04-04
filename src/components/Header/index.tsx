import React from 'react';
import style from './style.module.scss';

const Header: React.FC = () => {
  return <div>
      <h1 className={style.upperText}>Explore</h1>
      <h3 className={style.bottomText}>Buy and sell digital fashion NFT art</h3>
  </div>;
};

export default Header;
