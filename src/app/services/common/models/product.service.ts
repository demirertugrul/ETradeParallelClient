import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/contracts/product/product';
import { ProductCreate } from 'src/app/contracts/product/product-create';
import { ProductUpdate } from 'src/app/contracts/product/product-update';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClientService) {}

  create(
    model: ProductCreate,
    successCallBack?: any,
    errorCallBack?: (errorMessage: string) => void
  ) {
    this.httpClient
      .post(
        {
          controller: 'products',
        },
        model
      )
      .subscribe(
        (result) => {
          successCallBack();
        },
        (errorResponse: HttpErrorResponse) => {
          const _errors: Array<{ key: string; value: Array<string> }> =
            errorResponse.error;
          let message = '';
          _errors.forEach((v, index) => {
            v.value.forEach((_v, _index) => {
              message += `${_v}</br>`;
            });
          });
          errorCallBack(message);
        }
      );
  }

  listAll(id?: string, successCallBack?: any): Observable<Product[]> {
    return this.httpClient.get<Product[]>({
      controller: 'products',
    }); // burada subscribe olup succesCallBack çağırmıştık ama listAll'un çağrıldığı yerde subscribe olduk ve orada callbacki çağırdık
  }

  delete(id: string) {
    this.httpClient
      .delete(
        {
          controller: 'products',
        },
        id
      )
      .subscribe();
  }

  update(model: ProductUpdate) {
    this.httpClient.put<ProductUpdate>(
      {
        controller: 'products',
      },
      {
        id: model.id,
        name: model.name,
        price: model.price,
        stock: model.stock,
      }
    );
  }
}
