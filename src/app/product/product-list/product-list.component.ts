import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any
  
  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  
    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => {
        this.products = data.foundProducts
      },
      (err) => {
        console.log('次のエラーが発生しました: ' + err);
      },
      () => {
        console.log('完了');
      }
    );
}
  
}
