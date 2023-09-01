import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilGalleryComponent } from './profil-gallery.component';

describe('ProfilGalleryComponent', () => {
  let component: ProfilGalleryComponent;
  let fixture: ComponentFixture<ProfilGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilGalleryComponent]
    });
    fixture = TestBed.createComponent(ProfilGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
