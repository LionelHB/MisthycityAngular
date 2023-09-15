import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../modele/category/category.component';
import { SubCategoryModel } from '../modele/sub-category/sub-category.component';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:8000/api/galleries';

  constructor(private http: HttpClient) { }

  getAll(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.apiUrl);
  }

  getCategoryById(id: number): Observable<CategoryModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CategoryModel>(url);
  }
}
@Injectable()
export class SubCategoryService {
  private apiUrl = 'http://localhost:8000/api/sub_categories';

  constructor(private http: HttpClient) { }

  getAll(): Observable<SubCategoryModel[]> {
    return this.http.get<SubCategoryModel[]>(this.apiUrl);
  }

  getSubCategoryById(id: number): Observable<SubCategoryModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<SubCategoryModel>(url);
  }
}
