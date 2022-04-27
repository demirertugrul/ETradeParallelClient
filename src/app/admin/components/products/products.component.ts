import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/contracts/product/product';
import { ListResponseModel } from 'src/app/contracts/responses/list-response-model';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClientService) {}
  products: Product[];
  ngOnInit(): void {}

  get() {
    this.http
      .get<Product[]>({
        controller: 'products',
      })
      .subscribe((res) => {
        this.products = res;
        console.log(res);
      });
  }

  post() {
    this.http
      .post<Product>(
        {
          controller: 'products',
        },
        {
          name: 'PC 2',
          price: 10500,
          stock: 100,
        }
      )
      .subscribe();
  }
  put() {
    this.http
      .put<Product>(
        {
          controller: 'products',
        },
        {
          id: '5b93d84a-a20b-4bc5-adf2-60c3ea57e4c5',
          name: 'PC 2',
          price: 15500,
          stock: 50,
        }
      )
      .subscribe();
  }
  delete(id: string) {
    this.http
      .delete(
        {
          controller: 'products',
        },
        id
      )
      .subscribe();
  }
}
