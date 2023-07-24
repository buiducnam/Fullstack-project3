import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  cartList : Product[] = []

  constructor(private http: HttpClient) {
    this.cartList =
    localStorage.getItem('cart') &&
    (JSON.parse(localStorage.getItem('cart') || '') || []) || [];
  }

  getProducts(): Observable<[]> {
    return this.http.get<[]>('./assets/data.json');
  }

  changeProductQuantity(item: Product) {
    this.cartList = this.cartList.map((product: Product) =>
    {
      if(product.id === item.id){
        product = item
      }
      return product;
    }
  );
    return this.cartList
  }

  addProductToCart(product: Product, amount:string){
    if (this.cartList.length === 0) {
      localStorage.setItem(
        'cart',
        JSON.stringify([{ ...product, amount: Number(amount) }])
      );
      this.cartList.push({...product, amount:Number(amount)})
    } else {
      const findProduct = this.cartList.find(
        (item: Product) => item.id === product.id
      );
      if (findProduct) {
        const data = this.cartList.map((item: Product) => {
          return item.id === findProduct.id
            ? { ...item, amount: Number(item.amount) + Number(amount) }
            : item;
        });
        localStorage.setItem('cart', JSON.stringify(data));
        this.cartList = [...data]; 
       
      } else {
        const data = [...this.cartList, { ...product, amount: Number(amount) }];
        localStorage.setItem('cart', JSON.stringify(data));
        this.cartList = [...data];
      }
    }

    
  }

  clearCart(){
    this.cartList = [];
    localStorage.removeItem('cart');
  }
}
