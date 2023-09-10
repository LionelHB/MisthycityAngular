import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-category-show',
  templateUrl: './sub-category-show.component.html',
  styleUrls: ['./sub-category-show.component.scss']
})
export class SubCategoryShowComponent implements OnInit {
  subCategoryName: string | undefined; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.subCategoryName = params['name'];
    });
  }
  
}