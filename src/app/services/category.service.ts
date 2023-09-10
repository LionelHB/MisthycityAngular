// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, tap } from 'rxjs';
// import { CategoryModel } from '../modele/category/category.component';


// @Injectable({
//   providedIn: 'root',
// })
// export class CategoryService {

//   private categoriesSubject$: BehaviorSubject<CategoryModel[]> =
//     new BehaviorSubject<CategoryModel[]>([]);
//   character$: Observable<CategoryModel[]> = this.categoriesSubject$.asObservable();

//   private apiUrl = 'http://localhost:8000/api/categories';

//   constructor(private http: HttpClient) { }

//   getAll(): Observable<any> {
//     return this.http.get(this.apiUrl);
//   }

//   fetchCategories(url: string = 'http://localhost:8000/api/categories') {
//     this.http
//       .get(url)
//       .pipe(
//         tap((response: any) => {
//           this.categoriesSubject$.next(response.hydra as CategoryModel[]);
//         })
//       )
//       .subscribe();
//   }

// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../modele/category/category.component';
import { SubCategoryModel } from '../modele/sub-category/sub-category.component';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:8000/api/categories';

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
export class CategorySubService {
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
