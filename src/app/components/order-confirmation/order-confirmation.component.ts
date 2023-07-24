import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss'],
})
export class OrderConfirmationComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  totalPrice: number = 0;
  fullName: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.fullName = (params as { fullName: string }).fullName;
      this.totalPrice = Number((params as { totalPrice: string }).totalPrice);
    });
  }

  goHomePage() {
    this.router.navigateByUrl('/');
  }
}
