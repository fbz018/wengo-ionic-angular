import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundPage } from './page-not-found/page-not-found.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full'
  },
  {
    path: 'photos',
    loadChildren: () => import('./photos/photos.module').then( m => m.PhotosModule)
  },
  {
    path: '**',
    component: PageNotFoundPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
