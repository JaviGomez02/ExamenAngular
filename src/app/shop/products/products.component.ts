import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Categoria } from '../../_interfaces/categoria';
import { Producto } from '../../_interfaces/producto.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor(private servicio:AccountService, private route:ActivatedRoute) { }

  lista:Producto[]=[]

  ngOnInit(): void {
    this.servicio.getProductoByCategoria(this.route.snapshot.queryParams['categoria'])
    .subscribe({
      next:(resp)=>{
        this.lista=resp.productos
      }
    })
  }

}
