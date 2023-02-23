import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from './_services/account.service';
import { Observable } from 'rxjs';
import { Usuario } from './_interfaces/categoria';
import { User } from './_interfaces/user';

@Injectable()
export class RolGuard implements CanActivate {
  
  constructor(private router: Router, private servicio:AccountService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
    return this.servicio.userValue?.rol=="ADMIN_ROLE"
  }

}