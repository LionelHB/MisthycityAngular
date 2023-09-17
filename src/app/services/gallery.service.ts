import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GalleryModel } from '../modele/gallery/gallery';
import { NftModel } from '../modele/nft/nft.component';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  getGalleries(): Observable<GalleryModel[]> {
    return this.http.get<GalleryModel[]>('http://localhost:8000/api/galleries', {
      headers: { 'accept': 'application/json' },
    });
  }

  getGalleryById(id: number): Observable<GalleryModel> {
    return this.http.get<GalleryModel>(`http://localhost:8000/api/galleries/${id}`, {
      headers: { 'accept': 'application/json' },
    });
  }

}

