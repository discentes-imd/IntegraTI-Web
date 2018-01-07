import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core'

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { RegisterComponent } from './register/register.component';
import { JobsComponent } from './jobs/jobs.component';
import { AboutComponent } from './about/about.component';
import { GuiaDoAlunoComponent } from './guia-do-aluno/guia-do-aluno.component';
import { JobsFormComponent } from './jobs/jobs-form/jobs-form.component';
import { EventosFormComponent } from './eventos/eventos-form/eventos-form.component';
const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);