import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [
    new Product(1, 'Coffee Maker', 40.00, '../../assets/coffeemaker.jpeg'),
    new Product(2, 'Bicyle', 65.00, '../../assets/bike.jpeg')
  ];

  constructor(private _productService: ProductService){
    this._productService.updateProducts(this.products);
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    });
  }

}
