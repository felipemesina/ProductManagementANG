import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  newProduct: Product = new Product();
  products: Array<Product>;

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    } )
  }


  ngOnInit() {
    this.newProduct = new Product();
  }

  onSubmit(){
    if (this.newProduct.imgUrl.length < 1 ||
        this.newProduct.imgUrl === 'null' ||
        this.newProduct.imgUrl === null)  {
          this.newProduct.imgUrl = null;
        }
    this.products.push(this.newProduct);
    this._productService.updateProducts(this.products);
    this.newProduct = new Product();
    this._router.navigate(['/products']);
  }

}
