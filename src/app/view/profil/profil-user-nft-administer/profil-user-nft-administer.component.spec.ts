import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUserNftAdministerComponent } from './profil-user-nft-administer.component';

describe('ProfilUserNftAdministerComponent', () => {
  let component: ProfilUserNftAdministerComponent;
  let fixture: ComponentFixture<ProfilUserNftAdministerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilUserNftAdministerComponent]
    });
    fixture = TestBed.createComponent(ProfilUserNftAdministerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
