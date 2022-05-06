import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';

import { SpinnerBaseComponent } from 'src/app/base/base.component';
import { ProductList } from 'src/app/contracts/product/product-list';
import { SpinnerType } from 'src/app/contracts/serviceOptions/spinner';
import { ProductService } from 'src/app/services/common/models/product.service';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import {
  AlertifyMessagePosition,
  AlertifyMessageType,
} from 'src/app/contracts/serviceOptions/alertify';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent extends SpinnerBaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private productService: ProductService,
    private alertifyService: AlertifyService
  ) {
    super(spinner);
  }
  displayedColumns: string[] = [
    'name',
    'price',
    'stock',
    'createdDate',
    'updatedDate',
  ];
  allProducts: ProductList[] = [];
  dataSource: MatTableDataSource<ProductList> =
    new MatTableDataSource<ProductList>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() createdProduct: EventEmitter<any> = new EventEmitter();

  async ngOnInit() {
    // await this.getProducts();
  }

  async reloadProducts() {
    await this.getProducts();
  }

  async getProducts() {
    this.spinnerShow(SpinnerType.BallScale);
    const allProducts: { counts: number; products: ProductList[] } =
      await this.productService.read(
        this.paginator ? this.paginator.pageIndex : 0,
        this.paginator ? this.paginator.pageSize : 5,
        () => this.spinnerHide(SpinnerType.BallScale),
        (errorMessage: string) =>
          this.alertifyService.messages(errorMessage, {
            messageType: AlertifyMessageType.Error,
            messagePosition: AlertifyMessagePosition.TopCenter,
          })
      );

    this.dataSource = new MatTableDataSource<ProductList>(allProducts.products);
    this.paginator.pageIndex = allProducts.counts;
  }
}
