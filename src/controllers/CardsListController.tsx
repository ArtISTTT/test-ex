import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import ItemsWrapper from '../components/ItemsWrapper';
import { prepateItemsFromServer } from '../helpers/serverPreparing';
import { itemsAPI } from '../queries';
import { AppState } from '../reducers';
import { UPDATE_ITEMS } from '../reducers/Items/actions';
import { IItem } from '../types';
import Header from './../components/Header';

interface IProps {
  items: IItem[];
}

const CardListController: React.FC<IProps> = ({items}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getItems = async () => {
      const serverItems = await itemsAPI.getItems();
      const items = prepateItemsFromServer(serverItems.data.products);

      dispatch({
        type: UPDATE_ITEMS,
        value: items,
      })
    }

    getItems();
  }, []);

  return <>
    <Header />
    <ItemsWrapper items={items}/>
  </>;
}



export default connect((state: AppState) => ({
  items: state.app.items,
}))(CardListController);
