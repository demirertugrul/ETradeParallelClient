//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Project Modules
import { CustomersModule } from './customers/customers.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    CustomersModule,
    OrdersModule,
    ProductsModule,
  ],
})
export class ComponentsModule {}
