import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheHistoryService {

  constructor() { 
  }

  cacheComicHistory(item: any) {
    let cache_history_txt = localStorage.getItem("cacheHistory")
    if(cache_history_txt) {
      let arr_cache_history = JSON.parse(cache_history_txt)
      console.log('length: ', arr_cache_history.length)
      if(arr_cache_history.length >= 5) {
        console.log('1')
        arr_cache_history.pop()
        arr_cache_history.unshift(item)
      }else {
        console.log('2')
        arr_cache_history.unshift(item)
      }
      localStorage.setItem("cacheHistory", JSON.stringify(arr_cache_history))
    }else {
      let arr_cache_history = []
      arr_cache_history.unshift(item)
      localStorage.setItem("cacheHistory", JSON.stringify(arr_cache_history))
    }

  }

}
