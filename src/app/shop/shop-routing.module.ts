import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from '../auth-guard.service';


const routes: Routes = [
    
            { path: '', component: CategoriesComponent },
            {   
                path: 'add',
                canActivate:[AuthGuard], 
                component: AddCategoriesComponent 
            },
            { path: 'products', component: ProductsComponent }
        
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriasRoutingModule { }