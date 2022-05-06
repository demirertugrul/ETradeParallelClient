import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ProductCreate } from 'src/app/contracts/product/product-create';
import { ProductList } from 'src/app/contracts/product/product-list';
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
              message += `<strong>${_v}</strong></br>`;
            });
          });
          errorCallBack(message);
        }
      );
  }

  async read(
    page: number = 0,
    size: number = 5,
    successCallBack?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ): Promise<{ counts: number; products: ProductList[] }> {
    const getProducts = await this.httpClient.get<{
      counts: number;
      products: ProductList[];
    }>({
      controller: 'products',
      querySTring: `page=${page}&size=${size}`,
    });
    const promiseData: Promise<{ counts: number; products: ProductList[] }> =
      lastValueFrom(getProducts);
    console.log(getProducts);
    promiseData
      .then((d) => {
        successCallBack();
      })
      .catch((httpErrorResponse: HttpErrorResponse) => {
        errorCallBack(httpErrorResponse.message);
      });
    return await promiseData;
  }
}
