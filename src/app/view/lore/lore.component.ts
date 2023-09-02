import { Component } from '@angular/core';
import { ContainComponent } from '../../container/contain/contain.component';


@Component({
  selector: 'ns-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.scss']
})
export class LoreComponent {
  currentPage = 1;

  nextPage() {
    if (this.currentPage < 4) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
