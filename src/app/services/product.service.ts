import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { AppState, getAllItems, getDataState } from '../reducers';
import * as DataActions from "../actions/data.actions";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:4200/api/products';

  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) { }

  getProductList(): Observable<Product> {
    return this.http.get<Product>(this.apiUrl);
  }

  loadData() {
    return this.http.get<Product>(this.apiUrl);
  }

  load() {
    this.store.dispatch(new DataActions.LoadDataBegin());
  }

  getData() {
    return this.store.select(getDataState);
  }

  getItems() {
    return this.store.select(getAllItems);
  }
}
