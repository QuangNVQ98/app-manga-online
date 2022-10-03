import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as API_URL from './api-url';
import { IApiResponse, IPagination } from '../interface/api.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {

  constructor(private httpClient: HttpClient) { 
  }

  getListNewestComic(): Observable<IApiResponse> {
    return this.httpClient.get<IApiResponse>(API_URL.HOME_PAGE_LIST_COMIC);
  }

}
