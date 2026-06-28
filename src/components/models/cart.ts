import { IProduct } from "../../types";

export class Cart {
  protected items: IProduct[] = []

  addItem(product: IProduct): void {
    this.items.push(product);
  }

  removeItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  getCount(): number {
    return this.items.length
  }

  getItems(): IProduct[] {
    return [...this.items]
  }

  getTotal(): number {
    let summ = 0;
    this.items.forEach(item  => {
      if (item.price === null) {
        return
      } else {
        summ += item.price
      }
    })
    return summ
  }

  contains(id: string): boolean {
    return this.items.some(item => item.id === id);
  }
  
  clear(): void {
    this.items = [];
}
}