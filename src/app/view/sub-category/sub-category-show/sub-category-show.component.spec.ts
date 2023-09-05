import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryShowComponent } from './sub-category-show.component';

describe('SubCategoryShowComponent', () => {
  let component: SubCategoryShowComponent;
  let fixture: ComponentFixture<SubCategoryShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubCategoryShowComponent]
    });
    fixture = TestBed.createComponent(SubCategoryShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
