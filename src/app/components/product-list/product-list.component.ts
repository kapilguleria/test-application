import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;
  productList: any;
  filtersLoaded: Promise<boolean>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.getData()
      .subscribe(response => {
        console.log(response);
        this.filtersLoaded = Promise.resolve(true);
        this.productList = response.items;
      });
  }

}
