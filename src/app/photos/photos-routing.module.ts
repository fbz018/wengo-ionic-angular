import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoDetailsPage } from './photo-details/photo-details.page';
import { PhotosListPage } from './photos-list/photos-list.page';

const routes: Routes = [
  {
    path: '',
    component: PhotosListPage
  },
  {
    path: 'photo/:id',
    component: PhotoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
