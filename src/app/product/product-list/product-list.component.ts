import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //for testing purpose only
  products=[]
  service: ProductService

  //object created 
  //Dependency injection
  //create an an obj of dependency automatically
  // it uses singleton design pattern
  // productListComponent is dependent on ProductService class

  constructor(service: ProductService) {
    this.service = service
   }

  ngOnInit(): void {
    //component class got created successfully

   const observable = this.service.getProducts()
   //when the response is received .. do something
  
   observable.subscribe(response =>{
    console.log(response)
    //get the product list only when the status is success
    if(response['status'] == 'success'){
      this.products = response['data']
    }

   })
  }

}
