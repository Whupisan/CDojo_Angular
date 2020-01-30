// This is called a feature module with its own routing to encapsulate
// Feature modules has individual things that it can do (features).
// Reminds me of the attributes attributed to an instance of an Object

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDataService } from './product-data.service';


@NgModule({
  providers: [ProductDataService],
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
