import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../modele/category/category.component';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://127.0.0.1:8000/api/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.apiUrl + '?page=1');
  }
}
