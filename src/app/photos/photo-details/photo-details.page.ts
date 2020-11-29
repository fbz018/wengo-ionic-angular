import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PhotoData } from '../models/photo-data';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.page.html',
  styleUrls: ['./photo-details.page.scss'],
})
export class PhotoDetailsPage implements OnInit {
  public photoDetails$: Observable<PhotoData>;

  constructor(private photoService: PhotoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.photoDetails$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.photoService.getPhotoDetails(params.get('id'))));
  }

  public goBack(): void {
    this.router.navigate(['/photos']);
  }
}
