import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUserFavorisComponent } from './profil-user-favoris.component';

describe('ProfilUserFavorisComponent', () => {
  let component: ProfilUserFavorisComponent;
  let fixture: ComponentFixture<ProfilUserFavorisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilUserFavorisComponent]
    });
    fixture = TestBed.createComponent(ProfilUserFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
