import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs/operators';
import { PhotoData } from '../models/photo-data';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos-list.page.html',
  styleUrls: ['photos-list.page.scss'],
})
export class PhotosListPage implements OnInit {
  public photosItems$: Observable<PhotoData[]>;
  public filteredItems$: Observable<PhotoData[]>;
  public searchControl: FormControl;
  public filterInput$: Observable<string>;

  constructor(private photoservice: PhotoService) {
    this.searchControl = new FormControl('');
    this.filterInput$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      distinctUntilChanged()
    );
  }

  ngOnInit() {
    this.photosItems$ = this.photoservice.getPhotosList();
    this.filteredItems$ = combineLatest([
      this.photosItems$,
      this.filterInput$,
    ]).pipe(
      map(([photos, value]) =>
        photos.filter(
          (item: PhotoData) =>
            item.author.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
      )
    );
  }

  public loadData(event: Event) {
    setTimeout(() => {
      this.photosItems$ = this.photoservice.getPhotosList();
      (event.target as HTMLIonInfiniteScrollElement).complete();
    }, 500);
  }
}
