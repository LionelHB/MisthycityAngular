import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from 'src/app/services/gallery.service';
import { GalleryModel } from 'src/app/modele/gallery/gallery';
import { NftService } from 'src/app/services/nft.service';

@Component({
  selector: 'app-gallery-show',
  templateUrl: './gallery-show.component.html',
  styleUrls: ['./gallery-show.component.scss']
})
export class GalleryShowComponent implements OnInit {
  gallery: GalleryModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService,
    private nftService: NftService
  ) { }

  ngOnInit() {
    const galleryIdParam = this.route.snapshot.paramMap.get('id');

    if (galleryIdParam !== null) {
      const galleryId = +galleryIdParam;

      this.galleryService.getGalleryById(galleryId).subscribe(galleryData => {
        console.log('Données de la galerie reçues :', galleryData);

        this.gallery = galleryData;

        if (this.gallery?.owner) {
          console.log('Propriétaire de la galerie :', this.gallery.owner);

          this.nftService.getNftsByUserId(galleryId).subscribe(nftData => {
            console.log('Données NFT reçues :', nftData);

            if (this.gallery?.owner?.nft) {
              console.log('NFT existent. Affectation des données NFT à la galerie...');
              this.gallery.owner.nft = nftData;
              console.log('Données de la galerie avec NFT :', this.gallery);
            }
          });
        }
      });
    }
  }

  
}
