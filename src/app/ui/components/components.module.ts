//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Project Modules
import { BasketModule } from './basket/basket.module';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BasketModule, ProductsModule, HomeModule],
})
export class ComponentsModule {}
