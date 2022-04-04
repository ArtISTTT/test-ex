import { IItem, IState } from '../../types';
import {
  UPDATE_ITEMS,
  itemsActionsType,
} from './actions';



const initialState: IState = {
  items: [],
}

const appReducer = (state = initialState, action: itemsActionsType): IState => {
  switch (action.type) {
    case UPDATE_ITEMS:
      return {
          ...state,
          items: action.value,
      }
    default:
      return state;
  }
};

export default appReducer;