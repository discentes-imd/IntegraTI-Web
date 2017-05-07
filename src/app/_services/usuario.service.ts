import { Injectable } from '@angular/core';

import { Usuario } from '../_models/usuario.model';

@Injectable()
export class UsuarioService {

    private users: Usuario[] = [
        new Usuario(0,'Weslen Breno', 'weslenbreno@gmail.com', 'http://lorempixel.com/240/240/transport/', ['Angular', 'Django','Javascript']),
        new Usuario(1,'Sarah Raquel', 'sarah@gmail.com', 'http://lorempixel.com/240/240/transport/', ['Angular', 'Frontend','Javascript']),    
        new Usuario(2,'Marcell Guilherme Costa', 'marcell@gmail.com', 'http://lorempixel.com/240/240/transport/', ['Backend', 'Python','Git']),      
        new Usuario(3,'Pedro Raoni', 'pedroraoni@integrati.com', 'http://lorempixel.com/240/240/transport/', ['projectManager']),      
        new Usuario(4,'Gelly Viana', 'gelly@gmail.com', 'http://lorempixel.com/240/240/transport/', ['frontEnd', 'projectManager']),      
        new Usuario(5,'Rodrigo Nunes de Castro', 'rodrigoc@gmail.com', 'http://lorempixel.com/240/240/transport/', ['Backend', 'Python','Git']),      
    ]

    getAllUsers():Usuario[]{
        return this.users;
    }

    addNewUser(usuario:Usuario){
        this.users.push(usuario);    
    }
}