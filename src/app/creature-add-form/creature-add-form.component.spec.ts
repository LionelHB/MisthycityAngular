import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureAddFormComponent } from './creature-add-form.component';

describe('CreatureAddFormComponent', () => {
  let component: CreatureAddFormComponent;
  let fixture: ComponentFixture<CreatureAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureAddFormComponent]
    });
    fixture = TestBed.createComponent(CreatureAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
