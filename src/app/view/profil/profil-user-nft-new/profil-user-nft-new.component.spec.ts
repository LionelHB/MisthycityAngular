import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUserNftNewComponent } from './profil-user-nft-new.component';

describe('ProfilUserNftNewComponent', () => {
  let component: ProfilUserNftNewComponent;
  let fixture: ComponentFixture<ProfilUserNftNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilUserNftNewComponent]
    });
    fixture = TestBed.createComponent(ProfilUserNftNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
