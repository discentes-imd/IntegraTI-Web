import { Injectable } from '@angular/core';
//import { Http, Headers, RequestOptions, Response } from '@angular/http';

//import { AppConfig } from '../app.config';
import { Evento } from '../_models/evento';

@Injectable()
export class EventoService{
    eventos:[Evento] = [
        new Evento("Minicurso de Angular2", "IMD - Auditório B205", "30/05/2017", "30/05/2017", "Minicurso", "Gelly Vianna", "Weslen Breno", "O minicurso abordará as particularidades do angular2 ..."),
        new Evento("Minicurso de Introdução a Python", "IMD - Sala B204", "30/05/2017", "30/05/2017", "Minicurso", "Gelly Vianna", "Rodrigo Nunes", "Lorem Ipsum dolor dolor sit amet, consectetur adipiscing elit"),
        new Evento("Lançamento do IntegraTI", "IMD - Sala B204", "30/05/2017", "30/05/2017", "Minicurso", "Gelly Vianna", "Equipe IntegraTI", "Lorem Ipsum dolor dolor sit amet, consectetur adipiscing elit"),
    
    ];
}
