import React from 'react';
import style from './style.module.scss';

interface IProps {
  filter: boolean;
  setFilter: (filter: boolean) => void;
}

const Header: React.FC<IProps> = ({filter, setFilter}) => {
  const handleChange = () => {
    setFilter(!filter);
  };

  return <div>
    <h1 className={style.upperText}>Explore</h1>
    <h3 className={style.bottomText}>Buy and sell digital fashion NFT art</h3>
    <div className={style.filter}>
      <input type={'checkbox'} checked={filter} onChange={handleChange}/>
      <label>Filter by quantity &gt; 0</label>
    </div>
  </div>;
};

export default Header;
