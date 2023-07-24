import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/Products/product-list/product-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ProductComponent } from './components/Products/product-list/product/product.component';
import { ProductDetailComponent } from './components/Products/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductCartComponent } from './components/cart/product-cart/product-cart.component';
import { ButtonAddCartComponent } from './components/Products/button-add-cart/button-add-cart.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailComponent,
    CartComponent,
    ProductCartComponent,
    ButtonAddCartComponent,
    OrderConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
