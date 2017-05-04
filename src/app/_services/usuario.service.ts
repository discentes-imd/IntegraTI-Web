import { Injectable } from '@angular/core';

import { Usuario } from '../_models/usuario';

@Injectable()
export class UsuarioService {
    private users: Usuario[] = [
        new Usuario('Weslen Breno', 'weslenbreno@gmail.com', ['Angular', 'Django','Javascript']),
        new Usuario('Sarah Raquel', 'sarah@gmail.com', ['Angular', 'Frontend','Javascript']),    
        new Usuario('Marcell Guilherme Costa', 'marcell@gmail.com', ['Backend', 'Python','Git']),      
        new Usuario('Rodrigo Nunes de Castro', 'rodrigondec@gmail.com', ['Backend', 'Python','Git']),      
    ]

    getAllUsers():Array<Usuario>{
        return this.users;
    }

    addNewUser(usuario:Usuario):void {
        this.users.push(usuario);    
    }
}