import React from 'react';
import { IItem } from '../../types';

interface IProps {
  item: IItem; 
}

const Item: React.FC<IProps> = ({item}) => {
  return <div></div>;
};

export default Item;
