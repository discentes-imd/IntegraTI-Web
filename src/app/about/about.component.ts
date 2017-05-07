import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../_services/usuario.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  users: any[] = [];

  constructor(private _usuarioService: UsuarioService) {
    this.users = this._usuarioService.getAllUsers();
  }

  ngOnInit() {
  }

}
