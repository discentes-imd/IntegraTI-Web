import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { GuiaDoAlunoComponent } from './guia-do-aluno.component';

// Modules
import { GuiaDoAlunoRoutingModule } from './guia-do-aluno.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GuiaDoAlunoRoutingModule
  ],
  declarations: [GuiaDoAlunoComponent]
})
export class GuiaDoAlunoModule { }
