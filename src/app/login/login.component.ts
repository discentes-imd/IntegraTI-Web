import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  last_url: string = '/';

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  fazerLogin(form: any) {
    if (this.auth.autenticarUsuario(form.username, form.password)) {
      this.router.navigate([this.last_url]);
    }
  }

  ngOnInit() {
    // Busca a ultima rota para redirecionar após o Login
    this.route.fragment.subscribe((url) => {
      this.last_url = url ? url : '/';
    })
  }

}
