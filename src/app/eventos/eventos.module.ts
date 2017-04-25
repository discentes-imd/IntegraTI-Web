import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosComponent } from './eventos.component';
import { EventoDetalheComponent } from './evento-detalhe/evento-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EventosComponent,
    EventoDetalheComponent
  ],
  exports:[
    EventosComponent
  ]
})
export class EventosModule { }
