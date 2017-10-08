import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosComponent } from './eventos.component';
import { EventosFormComponent } from './eventos-form/eventos-form.component';
import { AuthGuard } from '../_guards/auth.guard';

export const eventosRoutes: Routes = [
    { path: 'eventos', component: EventosComponent},
    { path: 'eventos/novo', component: EventosFormComponent },
];

@NgModule({
    imports: [RouterModule.forChild(eventosRoutes)],
    exports: [RouterModule]
})
export class EventosRoutingModule { }
