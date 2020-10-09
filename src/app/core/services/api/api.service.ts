import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accept } from './accept';
import { ContentType } from './content-type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public static readonly BASE_URL = 'assets/data';
  private API_KEY = 'Authorization Key';

  constructor() { }

  public getAPIHeaders(contentType: ContentType, accept?: Accept): HttpHeaders {
    switch (contentType) {
      case ContentType.FormData:
        return new HttpHeaders({
          Accept: accept ?? Accept.JSON,
          'api-key': this.API_KEY,
        });
      default:
        return new HttpHeaders({
          'Content-Type': contentType,
          Accept: accept ?? Accept.JSON,
          'api-key': this.API_KEY,
        });
    }
  }

  public getAPIHeadersWithAuthorization(
    contentType: ContentType,
    token: string,
    accept?: Accept
  ): HttpHeaders {
    switch (contentType) {
      case ContentType.FormData:
        return new HttpHeaders({
          Accept: accept ?? Accept.JSON,
          'api-key': this.API_KEY,
          Authorization: `Bearer ${token}`,
        });
      default:
        return new HttpHeaders({
          'Content-Type': contentType,
          Accept: accept ?? Accept.JSON,
          'api-key': this.API_KEY,
          Authorization: `Bearer ${token}`,
        });
    }
  }
}
