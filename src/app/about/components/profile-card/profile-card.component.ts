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
    this.habilidades = this.user.habilidades.slice(0,3).map((x) => '#' + x).join(" ")
  }
}