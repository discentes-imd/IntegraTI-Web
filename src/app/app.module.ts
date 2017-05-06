import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

// Modules 
import { EventosModule } from './eventos/eventos.module';
import { JobsModule } from './jobs/jobs.module';
import { AboutModule } from './about/about.module';
import { RegisterModule } from './register/register.module';
import { GuiaDoAlunoModule } from './guia-do-aluno/guia-do-aluno.module';
import { AppRoutingModule } from './app.routing.module';

// Services
import { EventoService } from './_services/evento.service';
import { JobService } from './_services/job.service';
import { UsuarioService } from './_services/usuario.service';

// Configs
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    EventosModule,
    JobsModule,
    AboutModule,
    RegisterModule,
    GuiaDoAlunoModule
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
