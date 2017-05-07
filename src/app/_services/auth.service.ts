import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private autheticated: boolean = false;

    constructor() { }

    autenticarUsuario(username, password): boolean {
        if (username === "admin" && password === "admin") {
            this.autheticated = true;
            return true;
        }
        return false;
    }

    get isAuthenticated(){
        return this.autheticated;
    }
}