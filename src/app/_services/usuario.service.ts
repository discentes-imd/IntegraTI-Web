import { Injectable } from '@angular/core';

import { Usuario } from '../_models/usuario';

@Injectable()
export class UsuarioService {
    private users: Usuario[] = [
        new Usuario('Weslen Breno', 'weslenbreno@gmail.com', 'http://lorempixel.com/240/240/transport/', ['Angular', 'Django','Javascript']),
        new Usuario('Sarah Raquel', 'sarah@gmail.com', 'http://lorempixel.com/240/240/transport/', ['Angular', 'Frontend','Javascript']),    
        new Usuario('Marcell Guilherme Costa', 'marcell@gmail.com', 'http://lorempixel.com/240/240/transport/', ['Backend', 'Python','Git']),      
        new Usuario('Pedro Raoni', 'pedroraoni@integrati.com', 'http://lorempixel.com/240/240/transport/', ['projectManager']),      
        new Usuario('Gelly Viana', 'gelly@gmail.com', 'http://lorempixel.com/240/240/transport/', ['frontEnd', 'projectManager']),      
        new Usuario('Rodrigo Nunes de Castro', 'rodrigoc@gmail.com', 'http://lorempixel.com/240/240/transport/', ['Backend', 'Python','Git']),      
    ]

    getAllUsers():Array<Usuario>{
        return this.users;
    }

    addNewUser(usuario:Usuario){
        this.users.push(usuario);    
    }
}