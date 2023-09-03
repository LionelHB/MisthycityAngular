import { Component } from '@angular/core';
import { ContainComponent } from '../../container/contain/contain.component';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'ns-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.scss']
})
export class LoreComponent {
  constructor(private appComponent: AppComponent) {
    appComponent.showHeaderAndFooter = true; 
  }
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
