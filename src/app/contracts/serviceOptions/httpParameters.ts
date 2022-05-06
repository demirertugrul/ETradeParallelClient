import { HttpHeaders } from '@angular/common/http';

export class HttpParameters {
  baseUrl?: string;
  action?: string;
  controller?: string;
  querySTring?: string;
  fullEndPoint?: string;
  headers?: HttpHeaders;
}
