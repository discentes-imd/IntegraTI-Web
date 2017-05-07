import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() user: any;
  habilidades: string = '';

  constructor() { }

  ngOnInit() {
    // Mostrando as 3 primeiras tecnologias com # na frente
    // Da pra fazer mais otimizado com Pipes
    this.habilidades = this.user.skills.slice(0,3).map((x) => '#' + x).join(" ")
  }
}