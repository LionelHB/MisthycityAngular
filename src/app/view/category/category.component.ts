import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/modele/category/category.component';
import { CategoryService, SubCategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  categories: CategoryModel[] = [];
  @Input() category: CategoryModel | null = null;



  constructor(
    private http: HttpClient,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.http
      .get<CategoryModel[]>('http://localhost:8000/api/categories', {
        headers: { 'accept': 'application/json' },
        
      })
      .subscribe((data) => {
        this.categories = data;
        this.categories.forEach((category) => {
          category.isExpanded = false;
        });
        
      });
      this.subCategoryService.getAll().subscribe((subCategoryData) => {
        const subCategory = subCategoryData[0]; 
        this.router.navigate(['/creature/show', subCategory.name]);
      });
  }
}