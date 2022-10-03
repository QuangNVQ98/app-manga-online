import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { FindPageService } from 'src/app/@core/api/find-page.service';
import { IComic } from 'src/app/@core/interface/comic.interface';

@Component({
  selector: 'app-find-page',
  templateUrl: './find-page.component.html',
  styleUrls: ['./find-page.component.scss'],
})
export class FindPageComponent implements OnInit {
  comics: IComic[] | undefined;
  arr_cate: any[] = [];
  keyword: any;
  showLoading: boolean = true

  constructor(
    private service: FindPageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      // see also
      // console.log(val instanceof NavigationEnd)
      let url = this.router.url;
      console.log('url: ', url);

      if (url.includes('?keyword=')) {
        let temp_lst = url.split('?keyword=');
        this.keyword = temp_lst[1];
        this.getListCategory();
        this.getListComics('none');
      }
    });

    let url = this.router.url;
    console.log('url: ', url);

    if (url.includes('?keyword=')) {
      let temp_lst = url.split('?keyword=');
      this.keyword = temp_lst[1];
    }

    this.getListCategory();
    this.getListComics('none');
  }

  getListComics(type: any) {
    this.showLoading = true
    let params = {
      type: type,
      keyword: this.keyword,
    };

    this.service.getListComics(params).subscribe((res) => {
      if (res && res.data) {
        this.comics = res.data.data;

        this.showLoading = false
        // console.log('comics', this.comics)
      }
    });
  }

  getListCategory() {
    this.service.getListCate().subscribe((res) => {
      if (res && res.data) {
        this.arr_cate = res.data.arr_cate;

        // console.log('arr_cate', this.arr_cate)
      }
    });
  }

  doFindByCate(item: any) {
    // console.log('item: ', item)
    this.getListComics(item.path);
  }

  doReading(item: any) {
    console.log('item', item);
    this.router.navigate(['/manga-page', item.id]);
  }
}
