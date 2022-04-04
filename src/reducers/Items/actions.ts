import { IItem } from "../../types";

export const UPDATE_ITEMS = 'UPDATE_ITEMS';
export type UPDATE_ITEMS = typeof UPDATE_ITEMS;

export interface UpdateItems {
  type: UPDATE_ITEMS,
  value: IItem[];
}

export type itemsActionsType = UpdateItems;
