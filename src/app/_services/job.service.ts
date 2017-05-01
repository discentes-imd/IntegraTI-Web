import { Injectable } from '@angular/core';
//import { Http, Headers, RequestOptions, Response } from '@angular/http';

//import { AppConfig } from '../app.config';
import { Job } from '../_models/job';

@Injectable()
export class JobService{
    jobs:[Job] = [
        new Job(1,"Empresa 1", "Av Dos Santos", "Desenvolvedor Python", "Dsenvolver Sistemas", "R$2000,00", "http://fb.com", "(084)99991-9999"),
        new Job(2,"Empresa DNA Sistemas", "Av Dos Anjos", "Desenvolvedor Frontend", "Dsenvolver Sistemas", "R$1800,00", "http://www.sitedaempresa.com/vagas", "(084)99991-9999"),
        new Job(3,"SOS Sistemas", "Av Dos Santos", "Analista de Suporte Júnior", "Dar apoio e suporte a implantação de novos sistemas", "R$2000,00", "www.sitedaempresa.com/vagas", "(084)99991-9999"),
        new Job(4,"Tribunal de Contas do Estado", "Av Dos Santos", "Estagiário de Desenvolvimento", "Dar apoio e suporte a implantação de novos sistemas", "R$800,00", "www.sitedaempresa.com/vagas", "(084)99991-9999"),
       
    ];
}
