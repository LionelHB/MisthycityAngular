import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './shared/header/header.component'; 
import { FooterComponent } from './shared/footer/footer.component'; 

import { ContainComponent } from './container/contain/contain.component';
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

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccordionComponent } from './container/accordion/accordion.component';

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
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
