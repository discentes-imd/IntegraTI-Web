import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosComponent } from './eventos.component';
import { EventoDetalheComponent } from './evento-detalhe/evento-detalhe.component';
import { EventosFormComponent } from './eventos-form/eventos-form.component';
import { EventosRoutingModule } from './eventos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    EventosRoutingModule
  ],
  declarations: [
    EventosComponent,
    EventoDetalheComponent,
    EventosFormComponent
  ],
  exports: [
    EventosComponent
  ]
})
export class EventosModule { }
