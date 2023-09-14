import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryModel } from 'src/app/modele/gallery/gallery';

@Component({
  selector: 'ns-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleries: GalleryModel[] = [];


  constructor(private http: HttpClient) {
    this.galleries = [];
  }

  ngOnInit(): void {
    this.http.get<any>('http://127.0.0.1:8000/api/galleries').subscribe(data => {
      this.galleries = data['hydra:member'];
      console.log(this.galleries);
    });
  }
}