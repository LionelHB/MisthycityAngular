import { Component } from '@angular/core';

@Component({
  selector: 'ns-nft-explication',
  templateUrl: './nft-explication.component.html',
  styleUrls: ['./nft-explication.component.scss']
})
export class NftExplicationComponent {
  currentPage = 1;

  nextPage() {
    if (this.currentPage < 5) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

}
