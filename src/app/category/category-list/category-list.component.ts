import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories = []

  private categoryService : CategoryService
  
  constructor(categoryservice:CategoryService) { 
    this.categoryService = categoryservice
  }

  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories(){
    const observable = this.categoryService.getCategory()
    observable.subscribe(response =>{
      if(response['status'] == 'success'){
        this.categories = response['data']
      }
    })
  }

  onDelete(category){
    const observable = this.categoryService.deleteCategory(category.id)
    observable.subscribe(response =>{
      if(response['status'] == 'success'){
       alert('deleted category successfully')
       //refresh list of categories
       this.loadCategories()
      }
    })

  }

}
