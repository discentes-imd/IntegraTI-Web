import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiaDoAlunoComponent } from './guia-do-aluno.component';

export const GuiaDoAlunoRoutes: Routes = [
    { path: 'guia-do-aluno', component: GuiaDoAlunoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(GuiaDoAlunoRoutes)],
    exports: [RouterModule]
})
export class GuiaDoAlunoRoutingModule { }
