import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 private url = 'http://localhost:4000/category'
private httpClient: HttpClient

  constructor(httpClient :HttpClient) { 
    this.httpClient = httpClient
  }
  
  getCategory(){
      return this.httpClient.get(this.url)
  }

  deleteCategory(id){
    return this.httpClient.delete(this.url + '/'+ id)
  }

  addCategory(title: string, description: string){
    const body={
      title:title,
      description: description
    }
    return this.httpClient.post(this.url,body)
  }
}
