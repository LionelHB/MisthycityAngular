import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CategoryModel } from '../modele/category/category.component';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private categoriesSubject$: BehaviorSubject<CategoryModel[]> =
    new BehaviorSubject<CategoryModel[]>([]);
  character$: Observable<CategoryModel[]> = this.categoriesSubject$.asObservable();

  private apiUrl = 'http://localhost:8000/api/categories';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  fetchCategories(url: string = 'http://localhost:8000/api/categories') {
    this.http
      .get(url)
      .pipe(
        tap((response: any) => {
          this.categoriesSubject$.next(response.hydra as CategoryModel[]);
        })
      )
      .subscribe();
  }

}
