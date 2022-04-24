import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(
    private httpClient: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  private url(httpParameters: HttpParameters): string {
    return `${this.baseUrl ? this.baseUrl : httpParameters.baseUrl}/${
      httpParameters.controller
    }${httpParameters.action ? `/${httpParameters.action}` : ''}`;
  }
  get<T>(httpParameters: Partial<HttpParameters>, id?: string): Observable<T> {
    let url: string = '';
    if (httpParameters.fullEndPoint) {
      url = httpParameters.fullEndPoint;
    } else {
      url = `${this.url(httpParameters)}${id ? `/${id}` : ''}`;
    }
    return this.httpClient.get<T>(url, { headers: httpParameters.headers });
  }

  post<T>(
    httpParameters: Partial<HttpParameters>,
    body: Partial<T>
  ): Observable<T> {
    let url: string = '';
    if (httpParameters.fullEndPoint) {
      url = httpParameters.fullEndPoint;
    } else {
      url = `${this.url(httpParameters)}`;
    }
    return this.httpClient.post<T>(url, body, {
      headers: httpParameters.headers,
    });
  }

  put<T>(
    httpParameters: Partial<HttpParameters>,
    body: Partial<T>
  ): Observable<T> {
    let url: string = '';
    if (httpParameters.fullEndPoint) {
      url = httpParameters.fullEndPoint;
    } else {
      url = `${this.url(httpParameters)}`;
    }
    return this.httpClient.put<T>(url, body, {
      headers: httpParameters.headers,
    });
  }

  delete<T>(
    httpParameters: Partial<HttpParameters>,
    id: string
  ): Observable<T> {
    let url: string = '';
    if (httpParameters.fullEndPoint) {
      url = httpParameters.fullEndPoint;
    } else {
      url = `${this.url(httpParameters)}/${id}`;
    }
    return this.httpClient.delete<T>(url, { headers: httpParameters.headers });
  }
}

export class HttpParameters {
  baseUrl?: string;
  action?: string;
  controller?: string;
  fullEndPoint?: string;
  headers?: HttpHeaders;
  // authorization?:string;
}
