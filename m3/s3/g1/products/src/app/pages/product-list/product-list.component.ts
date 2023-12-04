import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { iProduct } from '../../Modules/iProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

productArr:iProduct[] | string | null=[];


constructor(private productSvc:ProductsService) {
}


ngOnInit(){
if (!this.productArr){
  this.productSvc.getAll().subscribe(data =>{
    this.productArr = data.products;
    localStorage.setItem('productArr',JSON.stringify(this.productArr));
    console.log(this.productArr);
  });
}
else{
  this.productArr = (localStorage.getItem('productArr'));
  console.log(this.productArr);
}
}

}
