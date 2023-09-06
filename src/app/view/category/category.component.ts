import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/modele/category/category.component';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: CategoryModel[] = [];



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<CategoryModel[]>('http://localhost:8000/api/categories?page=1', { headers: { 'accept': 'application/json' } })
    .subscribe((data) => {
      this.categories = data;
      console.log(this.categories);
    });
  }
}