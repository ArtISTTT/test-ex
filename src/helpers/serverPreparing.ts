import { IItem, IResponseProduct } from "../types";

export const prepateItemsFromServer = (items: IResponseProduct[]): IItem[] => {
  return items.map(item => ({
    productId: item.product_id,
    quantity: item.quantity,
    quantityAvailable: item.quantity_available,
    type: item.type,
    name: item.name,
    description: item.description,
    price: item.initial_price,
    createdBy: {
      user_id: item.created_by.user_id,
      displayName: item.created_by.display_name,
    }
  }))
};
