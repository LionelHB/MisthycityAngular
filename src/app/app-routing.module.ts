import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './view/notfound/notfound.component';
import { HomeComponent } from './view/home/home.component';
import { LoreComponent } from './view/lore/lore.component';
import { NftExplicationComponent } from './view/nft-explication/nft-explication.component';
import { AboutUsComponent } from './view/about-us/about-us.component';
import { CategoryComponent } from './view/category/category.component';
import { SubCategoryComponent } from './view/sub-category/sub-category.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { PartnairComponent } from './view/partnair/partnair.component';
import { ProfilComponent } from './view/profil/profil/profil.component';
import { SocialMediasComponent } from './view/social-medias/social-medias.component';
import { LoginRegisterComponent } from './view/login-register/login-register.component';

import { authentificationGuard } from './guard/authentification.guard';
import { SubCategoryShowComponent } from './view/sub-category/sub-category-show/sub-category-show.component';
import { NftShowComponent } from './view/nft-show/nft-show.component';
import { GalleryShowComponent } from './view/gallery/galleryShow/gallery-show/gallery-show.component';
import { ProfilGalleryComponent } from './view/profil/profil-gallery/profil-gallery.component';
import { ProfilGalleryNewComponent } from './view/profil/profil-gallery-new/profil-gallery-new.component';
import { ProfilUserNftComponent } from './view/profil/profil-user-nft/profil-user-nft.component';
import { ProfilUserNftAdministerComponent } from './view/profil/profil-user-nft-administer/profil-user-nft-administer.component';
import { ProfilUserNftNewComponent } from './view/profil/profil-user-nft-new/profil-user-nft-new.component';
import { CanLoadAuthGuard } from './guard/can-load.guard';



const routes: Routes = [  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'histoire', component: LoreComponent },
  { path: 'nft-explication', component: NftExplicationComponent },
  { path: 'qui-suis-je', component: AboutUsComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'creatures', component: SubCategoryComponent },
  { path: 'galeries', component: GalleryComponent },
  { path: 'partenaires', component: PartnairComponent },
  { path: 'reseaux-sociaux', component: SocialMediasComponent },
  { path: 'connexion-inscription', component: LoginRegisterComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'connexion-inscription' },
  {
    path: 'restricted',
    canLoad: [CanLoadAuthGuard], // Utilisez le guard CanLoadAuthGuard
    canActivateChild: [authentificationGuard],
    children: [
      { path: 'creature/show/:name', component: SubCategoryShowComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'profil/mes-galeries', component: ProfilGalleryComponent },
      { path: 'profil/nouvelle-galerie', component: ProfilGalleryNewComponent },
      { path: 'profil/mes-nfts', component: ProfilUserNftComponent },
      { path: 'profil/modifier-nft', component: ProfilUserNftAdministerComponent },
      { path: 'profil/ajouter-nft', component: ProfilUserNftNewComponent },
      { path: 'nft/show/:name', component: NftShowComponent },
      { path: 'galerie/show/:name', component: GalleryShowComponent },
    ],
  },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { } 
