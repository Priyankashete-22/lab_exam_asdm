import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//this is the 
export class ProductService {

  private url = 'http://localhost:4000/product'
  private httpClient : HttpClient
  //DI
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
   }

  addProducts(title: string, description: string, price:number, category:number){ 
    const body={
      title:title,
      description:description,
      price:price,
      category:category
    } 
    
    return this.httpClient.post(this.url,body)
  
  }

  getProducts(){ 
    // send GET request to the middleware asynchronously (on separate thread)
    return this.httpClient.get(this.url)
  }

  editProducts(){ 
    // send GET request to the middleware asynchronously (on separate thread)
    const observable = this.httpClient.get(this.url)
  }

  deleteProducts(){ 
    // send GET request to the middleware asynchronously (on separate thread)
    const observable = this.httpClient.get(this.url)
  }

}
