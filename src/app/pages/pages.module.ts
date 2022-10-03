import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MangaPageComponent } from './manga-page/manga-page.component';
import { ReadingPageComponent } from './reading-page/reading-page.component';
import { FindPageComponent } from './find-page/find-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PagesComponent,
    HomePageComponent,
    MangaPageComponent,
    ReadingPageComponent,
    FindPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
