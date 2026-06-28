import { Api } from "../base/Api";
import { IOrder, IPOSTProduct } from "../../types";

export class AppApi {
  protected api: Api

  constructor(api: Api) {
    this.api = api
  }

  getProducts(): Promise<IPOSTProduct> {
    return this.api.get('/product');
  }
  postOrder(order: IOrder): Promise<{ id: string; total: number }> {
    return this.api.post('/order', order);
  }
}