import React from 'react';
import { IItem } from '../../types';
import style from './style.module.scss';

interface IProps {
  item: IItem; 
}

const Item: React.FC<IProps> = ({item}) => {
  return <div className={style.cardWrapper}>
    <div className={style.imageBG}>
      <div className={style.createdBlock}>
        <p>created by</p>
        <h4>{item.createdBy.displayName}</h4> 
      </div>
      <div className={style.typeBlock}>
        <div>{item.type}</div>
        <div>{item.name}</div>
      </div>
    </div>
    <div className={style.infoBlock}>
      <div className={style.available}>
        <p>available</p>
        <h4>{`${item.quantity} of ${item.quantityAvailable}`}</h4>
      </div>
      <div className={style.price}>
        <p>price</p>
        <h4>{`${item.price} ETH`}</h4>
      </div>
    </div>
  </div>;
};

export default Item;
