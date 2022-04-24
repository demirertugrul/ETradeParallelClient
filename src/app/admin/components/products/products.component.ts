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
  deleteId: string = '1f44d230-7e26-4ff2-2159-08da24b90b5a';
  ngOnInit(): void {
    // this.get();
    // this.post();
    // this.put();
    // this.delete(this.deleteId);
  }

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
    this.http
      .get<Product[]>({
        controller: 'products',
      })
      .subscribe((data) => {
        this.products = data;
      });
  }
}
