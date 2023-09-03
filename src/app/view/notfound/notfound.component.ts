import { Component} from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'ns-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent {
  constructor(private appComponent: AppComponent) {
    appComponent.showHeaderAndFooter = false; 
  }
}
