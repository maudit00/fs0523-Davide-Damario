import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { iProduct } from '../../Modules/iProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

productArr!:iProduct[];


constructor(private productSvc:ProductsService) {
}


ngOnInit(){
  this.productSvc.getAll().subscribe(data =>{
    this.productArr = data.products;
  });
}


}
