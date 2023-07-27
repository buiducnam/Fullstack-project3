import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/Product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: Product[];
  totalPrice: number = 0;

  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private httpService: HttpService, private router: Router) {
    this.products = this.httpService.cartList;
  }

  ngOnInit(): void {
    this.totalPrice = Number(
      this.products
        .reduce((value, nextValue) => {
          return value + nextValue.price * Number(nextValue.amount);
        }, 0)
        .toFixed(2)
    );
  }

  changeAmount(data: Product) {
    this.products = this.httpService.changeProductQuantity(data);
    localStorage.setItem('cart', JSON.stringify(this.products));
    this.totalPrice = Number(
      this.products
        .reduce((value, nextValue) => {
          return value + nextValue.price * Number(nextValue.amount);
        }, 0)
        .toFixed(2)
    );
  }

  handleSubmit() {
    this.router.navigateByUrl(
      `confirmation?fullName=${this.fullName}&totalPrice=${this.totalPrice}`
    );
    this.httpService.clearCart();
  }

  goHomePage() {
    this.router.navigateByUrl('/');
  }

  handleDelete(product: any) {
    const del = confirm('Remove this product from cart?');
    if (del) {
      this.httpService.deleteProduct(product);
      this.products = this.httpService.cartList;

      this.totalPrice = Number(
        this.products
          .reduce((value, nextValue) => {
            return value + nextValue.price * Number(nextValue.amount);
          }, 0)
          .toFixed(2)
      );
    }
  }
}
