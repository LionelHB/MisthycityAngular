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



const routes: Routes = [  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [authentificationGuard]},

  { path: 'histoire', component: LoreComponent },
  { path: 'nft-explication', component: NftExplicationComponent },
  { path: 'qui-suis-je', component: AboutUsComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'creatures', component: SubCategoryComponent },
  { path: 'creature/show/:name', component: SubCategoryShowComponent },
  { path: 'galeries', component: GalleryComponent },
  { path: 'partenaires', component: PartnairComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'reseaux-sociaux', component: SocialMediasComponent },
  { path: 'connexion-inscription', component: LoginRegisterComponent },

  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { } 
