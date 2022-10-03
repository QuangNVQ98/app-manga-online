import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as API_URL from './api-url';
import { IApiResponse, IPagination } from '../interface/api.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReadingPageService {

  constructor(private httpClient: HttpClient) { 
  }

  getListImages(id: any): Observable<IApiResponse> {
    return this.httpClient.get<IApiResponse>(API_URL.READING_PAGE_LIST_IMAGES+ `/${id}`);
  }

}
