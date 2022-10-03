import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadingPageService } from 'src/app/@core/api/reading-page.service';

@Component({
  selector: 'app-reading-page',
  templateUrl: './reading-page.component.html',
  styleUrls: ['./reading-page.component.scss']
})
export class ReadingPageComponent implements OnInit {

  path: any
  arr_images: any[] = []
  arr_chapter: any[] = []
  nav: any
  recent_chapter: any
  showLoading: boolean= true

  constructor(
    private router: ActivatedRoute,
    private service: ReadingPageService,
    private routerLink: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.path = this.router.snapshot.paramMap.get('path');
    this.getListImages()
  }

  getListImages() {
    this.showLoading = true
  
    this.path = this.path.split('/').join('~')

    this.service.getListImages(this.path).subscribe(
      res => {
        if(res && res.data) {
          console.log('res.data: ', res.data)
          this.arr_images = res.data.data
          this.arr_chapter = res.data.lst_chapter
          this.nav = res.data.nav
          this.recent_chapter = res.data.recent_chapter
          
          this.showLoading = false
        }
      }
    )
  }

  doNavigate(path: any) {
    console.log('path navigate: ', path)
    this.routerLink.navigate(['/manga-page', path])

  }

  onChangeChapter(event: any) {
    this.path = event.target.value
    this.getListImages()
  }

  doReadNext() {
    if(this.recent_chapter.index >1) {
      let index = this.recent_chapter.index-1
      let result = this.arr_chapter[index-1]
  
      this.path = result.value
      this.getListImages()

    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    var header = document.getElementById("reading-header");
    let sticky = header!.offsetTop;

    if (window.pageYOffset > sticky) {

      header!.classList.add("sticky");
    } else {
      header!.classList.remove("sticky");
    }
  }

}
