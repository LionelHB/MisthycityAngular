import { CategoryModel } from "../category/category.component";

export interface SubCategoryModel {
  id: number;
  name: string;
  description: string;
  category: CategoryModel;
}
