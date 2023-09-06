import { Component, Input } from '@angular/core';
import { CategoryModel } from 'src/app/modele/category/category.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  @Input() category: CategoryModel = {} as CategoryModel; 
  constructor() {}
}