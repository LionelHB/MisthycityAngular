import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubCategoryModel } from 'src/app/modele/sub-category/sub-category.component';
import { SubCategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'ns-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
  showCreatureForm: boolean = false;
  toggleCreatureForm() {
    this.showCreatureForm = !this.showCreatureForm;
  }
  groupedSubCategories: SubCategoryModel[][] = [];


  constructor(
    private http: HttpClient,
    private subCategoryService: SubCategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.http
      .get<SubCategoryModel[]>('http://localhost:8000/api/sub_categories', {
        headers: { 'accept': 'application/json' },

      })
      .subscribe((data) => {
        for (let i = 0; i < data.length; i += 3) {
          this.groupedSubCategories.push(data.slice(i, i + 3));
        }
      });
    this.subCategoryService.getAll().subscribe((subCategoryData) => {
      const subCategory = subCategoryData[0];
      this.router.navigate(['/creature/show', subCategory.name]);
    });
  }
}



