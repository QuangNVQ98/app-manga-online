import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as API_URL from './api-url';
import { IApiResponse, IPagination } from '../interface/api.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FindPageService {

  constructor(private httpClient: HttpClient) { 
  }

  getListComics(param?: any): Observable<IApiResponse> {
    return this.httpClient.get<IApiResponse>(API_URL.FIND_PAGE_LIST_COMIC, {params: param});
  }

  getListCate(): Observable<IApiResponse> {
    return this.httpClient.get<IApiResponse>(API_URL.FIND_PAGE_LIST_CATE);
  }

}
