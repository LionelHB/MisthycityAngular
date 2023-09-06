import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/modele/category/category.component';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: CategoryModel[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = (data as any).hydra.member as CategoryModel[];
    });
  }
}
