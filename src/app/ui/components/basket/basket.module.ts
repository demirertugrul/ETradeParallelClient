//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BasketComponent } from './basket.component';
@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BasketComponent,
      },
    ]),
  ],
})
export class BasketModule {}
