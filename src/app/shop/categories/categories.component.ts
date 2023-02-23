import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../_interfaces/categoria';
import { AccountService } from '../../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {

  constructor(private servicio: AccountService, private route:Router) { }

  lista: Categoria[]=[]

  ngOnInit(): void {
    this.servicio.getCategorias()
    .subscribe({
      next:(resp)=>{
        this.lista=resp.categorias
      }
    })
  }

  verProductos(id:string){
    this.route.navigateByUrl('/shop/products?categoria='+id)
  }

}
