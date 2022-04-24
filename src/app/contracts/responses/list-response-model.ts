import { ResponseModel } from './response-model';

export interface ListResponseModel<T> extends ResponseModel<T> {
  data: T[];
}
