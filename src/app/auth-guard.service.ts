import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService } from './_services/account.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(private router: Router, private servicio:AccountService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.servicio.token!=''){
        return true
    }
    else{
        this.router.navigateByUrl('account/login')
        return false
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.servicio.token!=''){
        return true
    }
    else{
        this.router.navigateByUrl('account/login')
        return false
    }
  }

}