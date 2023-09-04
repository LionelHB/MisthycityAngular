import { Component } from '@angular/core';

@Component({
  selector: 'ns-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent {
  showCreatureForm: boolean = false; 
  toggleCreatureForm() {
    this.showCreatureForm = !this.showCreatureForm; 
  }
}



