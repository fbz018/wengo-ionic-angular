import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoData } from '../models/photo-data';

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) {}

  getPhotosList(): Observable<PhotoData[]> {
    const PHOTO_LIST_PATH = 'https://picsum.photos/v2/list';
    return this.http.get<PhotoData[]>(PHOTO_LIST_PATH);
  }

  getPhotoDetails(param: string) {
    const PHOTO_DATA_PATH = 'https://picsum.photos/id/' + +param + '/info';
    return this.http.get<PhotoData>(PHOTO_DATA_PATH);
  }
}
