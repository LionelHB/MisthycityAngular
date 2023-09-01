import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryAddFormComponent } from './sub-category-add-form.component';

describe('SubCategoryAddFormComponent', () => {
  let component: SubCategoryAddFormComponent;
  let fixture: ComponentFixture<SubCategoryAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubCategoryAddFormComponent]
    });
    fixture = TestBed.createComponent(SubCategoryAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
