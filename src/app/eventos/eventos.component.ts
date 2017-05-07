import { Component, OnInit } from '@angular/core';

import { EventoService } from '../_services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  listaEventos: [any];
  constructor(public EventoService: EventoService) {
    this.listaEventos = EventoService.eventos;
  }

  ngOnInit() {
  }

}
