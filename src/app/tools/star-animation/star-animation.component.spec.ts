import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarAnimationComponent } from './star-animation.component';

describe('StarAnimationComponent', () => {
  let component: StarAnimationComponent;
  let fixture: ComponentFixture<StarAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarAnimationComponent]
    });
    fixture = TestBed.createComponent(StarAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
