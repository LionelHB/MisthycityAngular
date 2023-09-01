import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftShowComponent } from './nft-show.component';

describe('NftShowComponent', () => {
  let component: NftShowComponent;
  let fixture: ComponentFixture<NftShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftShowComponent]
    });
    fixture = TestBed.createComponent(NftShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
