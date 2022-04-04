import axios from "axios";
import { IGetItemsResponse } from "../types";

const instance = axios.create({
  baseURL: 'https://artisant.io/api/'
})

export const itemsAPI = {
  getItems() {
    return instance.get<IGetItemsResponse>(`products`).then(response => response.data)
  }
}
