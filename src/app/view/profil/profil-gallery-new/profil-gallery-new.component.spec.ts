import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilGalleryNewComponent } from './profil-gallery-new.component';

describe('ProfilGalleryNewComponent', () => {
  let component: ProfilGalleryNewComponent;
  let fixture: ComponentFixture<ProfilGalleryNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilGalleryNewComponent]
    });
    fixture = TestBed.createComponent(ProfilGalleryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
