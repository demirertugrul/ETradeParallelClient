import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerBaseComponent } from 'src/app/base/base.component';
import { ProductCreate } from 'src/app/contracts/product/product-create';
import {
  AlertifyMessagePosition,
  AlertifyMessageType,
} from 'src/app/contracts/serviceOptions/alertify';
import { SpinnerType } from 'src/app/contracts/serviceOptions/spinner';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent extends SpinnerBaseComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private alertify: AlertifyService,
    spinner: NgxSpinnerService
  ) {
    super(spinner);
  }

  ngOnInit(): void {}
  @Output() createdProduct: EventEmitter<ProductCreate> = new EventEmitter();

  create(
    name: HTMLInputElement,
    stock: HTMLInputElement,
    price: HTMLInputElement
  ) {
    this.spinnerShow(SpinnerType.Timer);
    const productCreate: ProductCreate = new ProductCreate();
    productCreate.name = name.value;
    productCreate.stock = parseInt(stock.value);
    productCreate.price = parseFloat(price.value);

    this.productService.create(
      productCreate,
      () => {
        this.spinnerHide(SpinnerType.Timer);
        this.alertify.messages('Succesfully added.', {
          dismissOther: true,
          messageType: AlertifyMessageType.Success,
          messagePosition: AlertifyMessagePosition.BottomCenter,
        });
        this.createdProduct.emit(productCreate);
      },
      (errorMessage: string) => {
        this.spinnerHide(SpinnerType.Timer);
        this.alertify.messages(errorMessage, {
          dismissOther: true,
          messagePosition: AlertifyMessagePosition.TopRight,
          messageType: AlertifyMessageType.Error,
        });
      }
    );
  }
}
