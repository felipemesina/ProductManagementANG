import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  products: Array<Product>;
  product: Product;

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router
  ) {

    this._productService.productsObservable
    .subscribe( (products) => {
      this.products = products;
    });

    this._route.params
    .subscribe( param => {
      for (let idx = 0; idx < this.products.length; idx++) {
        if (this.products[idx].id == param.id) {
          this.product = this.products[idx];
          break;
        }
      }
    });

  }

  ngOnInit() {
  }

}
