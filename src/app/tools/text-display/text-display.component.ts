import { Component, Input, OnInit } from '@angular/core';
import { textInterface } from '../../container/textInterface';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent implements OnInit {
  @Input() textsData!: textInterface[];
  currentTextData!: textInterface;

  currentPage: number = 1;

  ngOnInit(): void {
this.currentTextData = this.textsData[0];
  }

  nextPage() {
    if (this.textsData && this.currentPage < this.textsData.length) {
      this.currentPage++;
      this.currentTextData = this.textsData[this.currentPage - 1];
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.currentTextData = this.textsData[this.currentPage - 1];
    }
  }
}
