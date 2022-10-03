import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {

  active_type: any
  keyword: any = ''
  isShowBookmark: any = false

  constructor(
    private routerLink: Router,
  ) {
    routerLink.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        console.log('event: ',event)
        if(event.url == '/home-page') {
          this.active_type = 'home'
        }else if(event.url == '/find-page') {
          this.active_type = 'find'
        }
      }
    });
  }

  ngOnInit(): void {
  
  }

  doFindComic() {
    console.log('keyword: ',this.keyword)

    this.routerLink.navigate(['/find-page'],{ queryParams: { keyword: this.keyword } })
  }

  doToggle() {
    this.isShowBookmark = !this.isShowBookmark
    console.log('this.isShowBookmark: ',this.isShowBookmark)
  }
}
