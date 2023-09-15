import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../modele/user/user.component';
import { GalleryModel } from '../modele/gallery/gallery';

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
  transformGalleryData(data: any[]): GalleryModel[] {
    return data.map((item: any) => {
      if (item.owner && item.owner.username) {
        item.owner.email = item.owner.username;
        delete item.owner.username; // Supprimer le champ "username" si nécessaire
      }
      return item;
    });
  }
}
