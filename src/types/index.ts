export interface IItem {
  productId: number;
  quantity: number;
  quantityAvailable: number;
  type: string;
  name: string;
  description: string;
  price: number;
  createdBy: {
    user_id: number;
    displayName: string;
  }
}

export interface IResponseProduct {
  product_id: number;
  name: string;
  description: string;
  quantity: number;
  initial_price: number;
  type: string;
  avatar: {
      original: string,
      compressed: string;
  };
  other_file: {
      original: string;
  };
  additional_photos: {
      original: string;
      compressed: string;
  }[];
  created_by: {
      user_id: number;
      display_name: string;
      public_address: string;
      custom_url: string;
      image: {
          original: string;
          compressed: string;
      }
  };
  json_nft_data: {
      name: string;
      image: string;
      attributes: [
          {
              value: string;
              trait_type: string;
          }
      ];
      description: string;
      external_url: string;
  };
  json_nft_link: string;
  tx_status: string;
  created_at: string;
  updated_at: string;
  quantity_nfts_created: number,
  on_main_page: boolean,
  is_wearable: boolean,
  latest_price: number,
  quantity_available: number,
}

export interface IGetItemsResponse {
  data: {
    products: IResponseProduct[];
  }
}

export interface IState {
  items: IItem[];
}