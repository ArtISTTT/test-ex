import React, { useEffect, useMemo, useState } from 'react';
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
  const [filter, setFilter] = useState(false);

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

  const resultItems = useMemo(() => {
    if (filter) {
      return items.filter(item => item.quantityAvailable > 0);
    }

    return items;
  }, [items, filter]);

  return <>
    <Header setFilter={setFilter} filter={filter}/>
    <ItemsWrapper items={resultItems}/>
  </>;
}



export default connect((state: AppState) => ({
  items: state.app.items,
}))(CardListController);
