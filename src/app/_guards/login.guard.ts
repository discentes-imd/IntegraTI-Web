import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private _auth: AuthService) { }

  // Se o usuário já tiver logado a página de Login não será mais mostrada
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._auth.isAuthenticated) {
      return false;
    }
    return true;
  }
}