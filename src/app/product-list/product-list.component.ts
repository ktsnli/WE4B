import { Component,OnInit } from '@angular/core';
import { Product } from 'src/classes/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productArray:Product[]=[];
  constructor(){
    this.productArray.push(new Product(1,'pen','nice',12,'newthing','../assets/img/1.png'))
    this.productArray.push(new Product(1,'pen','nice',12,'newthing','../assets/img/2.png'))
  };
  ngOnInit():void{};

}
