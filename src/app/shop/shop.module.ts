import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { ProductsComponent } from './products/products.component';
import { CategoriasRoutingModule } from './shop-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoriesComponent,
    AddCategoriesComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShopModule { }
