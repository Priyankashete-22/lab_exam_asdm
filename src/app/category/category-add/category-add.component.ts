import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  title=''
  description=''
  categoryService :CategoryService

  constructor(categoryService :CategoryService) { 
    this.categoryService = categoryService
  }

  ngOnInit(): void {
  }

  onAdd(){

   const observable = this.categoryService.addCategory(this.title, this.description)
    observable.subscribe(response =>{
      if(response['status'] == 'success'){
        alert('added category successfully!!!!')
        this.onCancel()
      }
    })
  }

  onCancel(){
    this.title=''
    this.description=''

  }
}
