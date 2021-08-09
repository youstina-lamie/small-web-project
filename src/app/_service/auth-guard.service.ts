import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuardService implements CanActivate{
  constructor(private authService: AuthService,private router:Router) {}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) :Observable<boolean> | Promise<boolean> |boolean{
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
    } else {
      return this.authService.isAuthenticated();
    }
  }
}
