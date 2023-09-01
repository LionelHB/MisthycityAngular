import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGalleryComponent } from './user-gallery.component';

describe('UserGalleryComponent', () => {
  let component: UserGalleryComponent;
  let fixture: ComponentFixture<UserGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserGalleryComponent]
    });
    fixture = TestBed.createComponent(UserGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
