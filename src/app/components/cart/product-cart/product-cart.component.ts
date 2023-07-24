import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  @Input() product: Product = new Product();
  amount: number = 1;
  @Output() changeAmount = new EventEmitter();


  ngOnInit(): void {
    this.amount = this.product.amount;
  }

  handleChangeAmount() {
    this.changeAmount.emit({ ...this.product, amount: Number(this.amount) });
  }
}
