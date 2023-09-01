import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUserNftComponent } from './profil-user-nft.component';

describe('ProfilUserNftComponent', () => {
  let component: ProfilUserNftComponent;
  let fixture: ComponentFixture<ProfilUserNftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilUserNftComponent]
    });
    fixture = TestBed.createComponent(ProfilUserNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
