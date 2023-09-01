import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnairComponent } from './partnair.component';

describe('PartnairComponent', () => {
  let component: PartnairComponent;
  let fixture: ComponentFixture<PartnairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnairComponent]
    });
    fixture = TestBed.createComponent(PartnairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
