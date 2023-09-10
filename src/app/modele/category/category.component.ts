import { SubCategoryModel } from "../sub-category/sub-category.component";

export interface CategoryModel {
  id: number;
  name: string;
  description: string;
  subCategory: SubCategoryModel[]; 
  isExpanded: boolean;
}

export class CategoryModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public subCategory: SubCategoryModel[],
    public isExpanded: boolean = false 
  ) {}
}
