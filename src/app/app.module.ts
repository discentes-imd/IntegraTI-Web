import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { GuiaDoAlunoComponent } from './guia-do-aluno/guia-do-aluno.component';

// Modules 
import { EventosModule } from './eventos/eventos.module';
import { JobsModule } from './jobs/jobs.module';
import { AboutModule } from './about/about.module';

// Services
import { EventoService } from './_services/evento.service';
import { JobService } from './_services/job.service';
import { UsuarioService } from './_services/usuario.service';

// Configs
import { routing } from './app.routing';
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    GuiaDoAlunoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    EventosModule,
    JobsModule,
    AboutModule
  ],
  providers: [
    AppConfig,
    JobService,
    EventoService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
