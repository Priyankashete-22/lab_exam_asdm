import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  title = ''
  description = ''
  price = 0
  category = 0

  private productService: ProductService
  private categoryService: CategoryService
  categories = []

  constructor(
    categoryService: CategoryService,
    productService: ProductService) {

    this.categoryService = categoryService
    this.productService = productService
  }

  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories() {
    const observable = this.categoryService.getCategory()
    observable.subscribe(response => {
      if (response['status'] == 'success') {
        this.categories = response['data']
      }
    })
  }

  onAdd() {
    const observable = this.productService.addProducts(this.title, this.description, this.price, this.category)
    observable.subscribe(response => {
      if (response['status'] == 'success') {
        alert('added product successfully')
        this.onCancel()
      }
    })
  }

  onCancel() {
    this.title = ''
    this.description = ''
    this.price = 0
    this.category = 0
  }
}