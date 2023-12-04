import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { iProduct } from './Modules/iProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
api_url:string="https://dummyjson.com/docs/products"
subject:Subject<iProduct> = new Subject();

  constructor(private http:HttpClient) { }

getAll():Observable<iProduct[]>{
return this.http.get<iProduct[]>(this.api_url);
}

getById(id:string):Observable<iProduct>{
return this.http.get<iProduct>(`${this.api_url}/${id}`);
}




}
