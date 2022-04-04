import React from 'react';
import { IItem } from '../../types';
import Item from './Item';
import style from './style.module.scss';

interface IProps {
  items: IItem[];
}

const ItemsWrapper: React.FC<IProps> = ({items}) => {

  return <div className={style.itemsWrapper}>
    {items.map(item => <Item item={item}/>)}
  </div>
};

export default ItemsWrapper;
