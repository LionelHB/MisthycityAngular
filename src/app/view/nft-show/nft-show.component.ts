import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'ns-nft-show',
  templateUrl: './nft-show.component.html',
  styleUrls: ['./nft-show.component.scss']
})
export class NftShowComponent {
  public isOverlayOpen = false;
  openOverlay() {
    this.isOverlayOpen = true;
  }
  closeOverlay() {
    this.isOverlayOpen = false;
  }
}
