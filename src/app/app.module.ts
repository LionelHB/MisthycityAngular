import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component'; 
import { FooterComponent } from './shared/footer/footer.component'; 

import { ContainComponent } from './container/contain/contain.component';
import { AccordionComponent } from './container/accordion/accordion.component';

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
import { NotfoundComponent } from './view/notfound/notfound.component';
import { HomeComponent } from './view/home/home.component';
import { SubCategoryShowComponent } from './view/sub-category/sub-category-show/sub-category-show.component';
import { ProfilUserNftAdministerComponent } from './view/profil/profil-user-nft-administer/profil-user-nft-administer.component';
import { ProfilGalleryComponent } from './view/profil/profil-gallery/profil-gallery.component';
import { ProfilGalleryNewComponent } from './view/profil/profil-gallery-new/profil-gallery-new.component';
import { ProfilUserNftComponent } from './view/profil/profil-user-nft/profil-user-nft.component';
import { NftShowComponent } from './view/nft-show/nft-show.component';
import { GalleryShowComponent } from './view/gallery/galleryShow/gallery-show/gallery-show.component';


import { CreatureAddFormComponent } from './creature-add-form/creature-add-form.component';
import { RegisterFormComponent } from './form/register-form/register-form.component';

import { GraphComponent } from './container/graphics/graph/graph.component';
import { TextDisplayComponent } from './tools/text-display/text-display.component';
import { StarAnimationComponent } from './tools/star-animation/star-animation.component';
import { ModalConfirmationComponent } from './tools/modal/modal-confirmation/modal-confirmation.component';

import { CategoryService, SubCategoryService } from './services/category.service';
import { GalleryService } from './services/gallery.service';
import { UserService } from './services/user.service';
import { PaginationService } from './services/pagination.service';
import { NftService } from './services/nft.service';
import { ProfilUserNftNewComponent } from './view/profil/profil-user-nft-new/profil-user-nft-new.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainComponent,
    LoreComponent,
    NftExplicationComponent,
    AboutUsComponent,
    CategoryComponent,
    SubCategoryComponent,
    GalleryComponent,
    PartnairComponent,
    ProfilComponent,
    SocialMediasComponent,
    LoginRegisterComponent,
    NotfoundComponent,
    HomeComponent,
    AccordionComponent,
    CreatureAddFormComponent,
    TextDisplayComponent,
    RegisterFormComponent,
    SubCategoryShowComponent,
    StarAnimationComponent,
    NftShowComponent,
    GalleryShowComponent,
    GraphComponent,
    ProfilGalleryComponent,
    ProfilGalleryNewComponent,
    ProfilUserNftComponent,
    ModalConfirmationComponent,
    ProfilUserNftAdministerComponent,
    ProfilUserNftNewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
   
  ],
  providers: [CategoryService, SubCategoryService, GalleryService, UserService, PaginationService, NftService],
  bootstrap: [AppComponent], 
  
})
export class AppModule { }
