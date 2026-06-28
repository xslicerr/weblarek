import { Api } from "../base/Api";
import { IOrder, IProductsResponse, IApi } from "../../types";

export class AppApi {
  protected api: IApi

  constructor(api: Api) {
    this.api = api
  }

  getProducts(): Promise<IProductsResponse> {
    return this.api.get('/product');
  }
  postOrder(order: IOrder): Promise<{ id: string; total: number }> {
    return this.api.post('/order', order);
  }
}