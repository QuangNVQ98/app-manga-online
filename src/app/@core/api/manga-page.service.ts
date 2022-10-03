import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as API_URL from './api-url';
import { IApiResponse, IPagination } from '../interface/api.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MangaPageService {

  constructor(private httpClient: HttpClient) { 
  }

  getInforsComis(id: any): Observable<IApiResponse> {
    return this.httpClient.get<IApiResponse>(API_URL.MANGA_PAGE_INFORS_COMIC+ `/${id}`);
  }

}
