export interface GalleryModel {
  id: number;
  owner_id: number;
  name: string;
  is_public: boolean;
  description: string;
  creation_date: Date;
}






// async ngOnInit(): Promise<void> {
//   try {
//     this.galleries = await this.galleryService.getGalleries().toPromise();
//     console.log('Galleries:', this.galleries); 
//   } catch (error) {
//     console.error('Error loading galleries:', error);
//   }
// }