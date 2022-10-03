import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindPageComponent } from './find-page/find-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MangaPageComponent } from './manga-page/manga-page.component';
import { PagesComponent } from './pages.component';
import { ReadingPageComponent } from './reading-page/reading-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home-page',
        component: HomePageComponent
      },
      {
        path: 'find-page',
        component: FindPageComponent
      },
      {
        path: 'manga-page/:id',
        component: MangaPageComponent,
      },
      {
        path: 'reading-page/:path',
        component: ReadingPageComponent
      }
    ]
    
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
