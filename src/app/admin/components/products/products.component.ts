import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductCreate } from 'src/app/contracts/product/product-create';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClientService) {}
  ngOnInit(): void {}

  @ViewChild(ListComponent) listComponents: ListComponent; //! ÖNEMLİ: Mutlaka type belirt.

  createdProduct(productCreate: ProductCreate) {
    this.listComponents.reloadProducts(); // yukarda type belirtmediğim için methodu çağıramadım
  }
}
