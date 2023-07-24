import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  productId: string = '';
  amount: string = '1';


  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.httpService.getProducts().subscribe((res: Product[]) => {
      const data = res.find((item: Product) => item.id === +this.productId) || new Product;
      this.product = data;
    });
  }

  addCart() {
    alert('Added to cart!');
  }
}
