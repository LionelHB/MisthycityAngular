import { Component, OnInit } from '@angular/core';
import { GalleryModel } from 'src/app/modele/gallery/gallery';
import { GalleryService } from 'src/app/services/gallery.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleries: GalleryModel[] | undefined;

  constructor(
    private galleryService: GalleryService,
    private userService: UserService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.galleries = await this.galleryService.getGalleries().toPromise();
      console.log('Galleries:', this.galleries);
    } catch (error) {
      console.error('Error loading galleries:', error);
    }
  }
}
