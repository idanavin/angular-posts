

import { Injectable } from '@angular/core';
import { CanActivate ,ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { map, tap, take } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class LoginGuard implements CanActivate{
    constructor (private loginService: LoginService , private router: Router){}
    // path: ActivatedRouteSnapshot[];
    // route: ActivatedRouteSnapshot;
   

    

    canActivate( route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
       if (this.loginService.isLogged) {
           return true
       } else {
           return this.router.parseUrl("/login");
       }
    }
}



    // return this.loginService.user.pipe(
        //     take(1),
        //     map(user => {
        //     const isLogged = !!user;
        //     if (isLogged){
        //         return true;
        //     }
        //      return this.router.createUrlTree(['/login']);
        // })
     
        // );