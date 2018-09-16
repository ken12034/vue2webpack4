export interface PRODUCT {
  id: number;
  taskContent: string;
  status: boolean;
}

export interface LIST {
  id: number;
  name: string;
}

export default interface STATE {
  product: PRODUCT;
  list: LIST;
}
