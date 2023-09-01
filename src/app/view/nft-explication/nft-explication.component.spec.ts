import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftExplicationComponent } from './nft-explication.component';

describe('NftExplicationComponent', () => {
  let component: NftExplicationComponent;
  let fixture: ComponentFixture<NftExplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftExplicationComponent]
    });
    fixture = TestBed.createComponent(NftExplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
