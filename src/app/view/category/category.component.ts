import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CategoryModel } from 'src/app/modele/category/category.component';
import { CategoryService } from 'src/app/services/category.service';


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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.http
      .get<CategoryModel[]>('http://localhost:8000/api/categories?page=1', {
        headers: { 'accept': 'application/json' },
      })
      .subscribe((data) => {
        this.categories = data;
        this.categories.forEach((category) => {
          category.isExpanded = false;


        });
        console.log('Categories:', this.categories);
      });

  }
}