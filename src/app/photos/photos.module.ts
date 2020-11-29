import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule  } from '@angular/forms';

import { PhotosListPage } from './photos-list/photos-list.page';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoService } from './services/photo.service';
import { HttpClientModule } from '@angular/common/http';
import { PhotoDetailsPage } from './photo-details/photo-details.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule ,
    IonicModule,
    PhotosRoutingModule
  ],
  declarations: [PhotosListPage, PhotoDetailsPage],
  providers: [PhotoService]
})
export class PhotosModule {}
