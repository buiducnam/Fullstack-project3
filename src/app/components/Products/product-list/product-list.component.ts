import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  cart: Product[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((res: Product[]) => {
      this.products = [...res];
    });
  }
}
