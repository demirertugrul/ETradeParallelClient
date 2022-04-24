import { ResponseModel } from './response-model';

export interface SingleResponseModel<T> extends ResponseModel<T> {
  data: T;
}
