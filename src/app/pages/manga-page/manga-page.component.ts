import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaPageService } from 'src/app/@core/api/manga-page.service';
import { IComic } from 'src/app/@core/interface/comic.interface';

@Component({
  selector: 'app-manga-page',
  templateUrl: './manga-page.component.html',
  styleUrls: ['./manga-page.component.scss']
})
export class MangaPageComponent implements OnInit {

  id: any
  comic: IComic | undefined
  showLoading: boolean = true

  constructor(
    private router: ActivatedRoute,
    private service: MangaPageService,
    private routerLink: Router
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    console.log('id',this.id)

    this.getInforComic(this.id)
    
  }

  getInforComic(id: any) {
    this.showLoading = true
    this.service.getInforsComis(id).subscribe(
      res => {
        if(res && res.data) {
          this.comic = res.data.data
          this.showLoading = false

          console.log('comic: ', this.comic)
        }
      }
    )
  }

  goToChapter(path: any) {
    console.log('path:',path)
    this.routerLink.navigate(['/reading-page', path])
  }

}
