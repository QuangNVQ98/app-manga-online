import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from 'src/app/@core/api/home-page.service';
import { IComic } from 'src/app/@core/interface/comic.interface';
import { CacheHistoryService } from 'src/app/@core/service/cache-history.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  comics: IComic[] | undefined
  showLoading: boolean = true

  constructor(
    private seriveHomePage: HomePageService,
    private router: Router,
    private cacheHistorySerive: CacheHistoryService
  ) { }

  ngOnInit(): void {
    this.getListNewestComic()
    console.log("cache: ", localStorage.getItem("cacheHistory"))
  }

  getListNewestComic() {
    this.showLoading = true

    this.seriveHomePage.getListNewestComic().subscribe(
      res => {
        if(res && res.data) {
          this.comics = res.data.data

          this.showLoading = false
          console.log('comics', this.comics)
        }
      }
    )
  }

  doReading(item: any) {
    console.log('item', item)

    //add to localstorage
    this.cacheHistorySerive.cacheComicHistory(item)

    this.router.navigate(['/manga-page', item.id])
  }

  goToNaruto() {
    this.router.navigate(['/find-page'],{ queryParams: { keyword: 'naruto' } })
  }

}
