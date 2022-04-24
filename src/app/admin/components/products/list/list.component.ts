import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product/product';
import { ProductUpdate } from 'src/app/contracts/product/product-update';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent extends BaseComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    spinner: NgxSpinnerService
  ) {
    super(spinner);
  }

  ngOnInit(): void {}

  listAll(id?: string) {
    this.spinnerShow(SpinnerType.BallScale);
    this.productService
      .listAll(id, () => {}) // burada subscribe oldugumuz ıcın
      .subscribe((result) => {
        this.products = result; // result'i donuyor ve
        this.spinnerHide(SpinnerType.BallScale); // spinnerHide ' i çağırıyoruz işlem bitiyor.
      });
  }

  delete(id: string) {
    this.productService.delete(id);
  }

  update(model: ProductUpdate) {
    this.productService.update(model); // ! todo
  }
}
