import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _auth: AuthService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this._auth.isAuthenticated) {
            /* Se o usuário não estiver autenticado eles será redirecionado
               para a página de login.*/
            this._router.navigate(['/login'], {fragment:state.url});            
            return false;
        }
        return true;
    }
}  