import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  cartList: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<[]> {
    return this.http.get<[]>('./assets/data.json');
  }

  changeProductQuantity(item: Product) {
    this.cartList = this.cartList.map((product: Product) => {
      if (product.id === item.id) {
        product = item;
      }
      return product;
    });
    return this.cartList;
  }

  addProductToCart(product: Product, amount: any) {
    const findProduct = this.cartList.find((item) => item.id == product.id);
    if (findProduct) {
      const data = this.cartList?.map((item: Product) => {
        return item.id === product.id
          ? { ...item, amount: Number(item.amount) + Number(amount) }
          : item;
      });
      this.cartList = [...data];
    } else {
      this.cartList.push({ ...product, amount });
    }
  }

  deleteProduct(product: any) {
    const findIndex = this.cartList.findIndex((item) => item.id == product.id);
    this.cartList.splice(findIndex, 1);
  }

  clearCart() {
    this.cartList = [];
  }
}
