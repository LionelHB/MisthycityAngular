import { Component, OnInit } from '@angular/core';
import { GalleryModel } from 'src/app/modele/gallery/gallery';
import { NftModel } from 'src/app/modele/nft/nft.component';
import { GalleryService } from 'src/app/services/gallery.service';
import { NftService } from 'src/app/services/nft.service';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleries: GalleryModel[] | undefined;
  pageSize = 6;
  currentPage = 1;
  pageData: GalleryModel[] = [];
  nftsByOwner: { [userId: number]: NftModel[] | undefined } = {};


  constructor(
    private galleryService: GalleryService,
    private paginationService: PaginationService,
    private nftService: NftService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.galleries = await this.galleryService.getGalleries().toPromise();

      if (this.galleries) {
        for (const gallery of this.galleries) {
          const userId = gallery.owner?.id;
          if (userId) {
            if (!this.nftsByOwner[userId]) {
              this.nftsByOwner[userId] = await this.nftService.getNftsByUserId(userId).toPromise();
            }
            const nfts = this.nftsByOwner[userId];
            if (nfts && nfts.length > 0) {
            }
          }
        }


        this.galleries.sort((a, b) => {
          const dateA = new Date(a.creationDate);
          const dateB = new Date(b.creationDate);
          return dateB.getTime() - dateA.getTime();
        });
        console.log('Galleries:', this.galleries);
      }

      this.updatePageData();
    } catch (error) {
      console.error('Error loading galleries:', error);
    }
  }


  updatePageData() {
    this.pageData = this.paginationService.paginate(
      this.galleries || [],
      this.currentPage,
      this.pageSize
    );
  }

  changePage(newPage: number) {
    this.currentPage = newPage;
    this.updatePageData();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageData();
    }
  }

  nextPage() {
    const totalPages = Math.ceil((this.galleries?.length || 0) / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.updatePageData();
    }
  }
  getTotalPages(): number {
    const totalPages = Math.ceil((this.galleries?.length || 0) / this.pageSize);
    return totalPages;
  }

  getRandomNft(userId: number): NftModel | undefined {
    const nfts = this.nftsByOwner[userId];
    if (nfts && nfts.length > 0) {
      const randomIndex = Math.floor(Math.random() * nfts.length);
      return nfts[randomIndex];
    }

    return undefined;
  }

  loadGalleries(): void {
    this.galleryService.getGalleries().subscribe(
      (data) => {
        this.galleries = data;

        this.galleries.forEach((gallery) => {
          gallery.owner.nft = [];
          this.nftService.getNftsByUserId(gallery.owner.id).subscribe(
            (nftsData: NftModel[]) => {
              gallery.owner.nft = nftsData;
            },
            (nftsError: any) => {
              console.error('Erreur lors du chargement des NFTs : ', nftsError);
            }
          );

        });
      },
      (error) => {
        console.error('Erreur lors du chargement des galeries : ', error);
      }
    );
  }
  getGalleryUrl(galleryName: string): string {
    return `/galerie/show/${galleryName}`;
  }
}


