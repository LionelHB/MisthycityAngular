// accordion.component.ts
import { Component, Input } from '@angular/core';
import { CategoryModel } from 'src/app/modele/category/category.component';
import { slideInOut } from '../../animation/collapse.animation'; 

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [slideInOut],
})
export class AccordionComponent {
  @Input() category!: CategoryModel;
  @Input() categories!: CategoryModel[]; 
  state = 'in';

  toggleAccordion(categoryToToggle: CategoryModel) {
    this.categories.forEach((category) => {
      if (category !== categoryToToggle) {
        category.isExpanded = false;
      }
    });
    categoryToToggle.isExpanded = !categoryToToggle.isExpanded;
    console.log(`Category ${categoryToToggle.name} is expanded: ${categoryToToggle.isExpanded}`);
  }
}
