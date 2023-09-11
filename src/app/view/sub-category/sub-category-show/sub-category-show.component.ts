import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategoryModel } from 'src/app/modele/sub-category/sub-category.component';
import { SubCategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sub-category-show',
  templateUrl: './sub-category-show.component.html',
  styleUrls: ['./sub-category-show.component.scss']
})
export class SubCategoryShowComponent implements OnInit {
  subCategoryName: string | undefined;
  subCategoryDescription: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private subCategoryService: SubCategoryService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.subCategoryName = params['name'];
      this.loadSubCategoryDescription();
    });
  }
  loadSubCategoryDescription() {
    this.subCategoryService.getAll().subscribe((response: any) => {
      const subCategoryData = response['hydra:member'];
      const subCategory = subCategoryData.find(
        (subCat: SubCategoryModel) => subCat.name === this.subCategoryName
      );
      if (subCategory) {
        this.subCategoryDescription = subCategory.description;
      } else {
        this.subCategoryDescription = 'Sous-catégorie introuvable';
      }
    });
  }
}