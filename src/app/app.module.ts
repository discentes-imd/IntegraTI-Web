import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
import { AuthGuard } from './_guards/auth.guard';
import { LoginGuard } from './_guards/login.guard';
import { GithubService } from './_services/github.service';

import { AuthService } from './_services/auth.service';

// Configs
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopMenuComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EventosModule,
    JobsModule,
    AboutModule,
    RegisterModule,
    GuiaDoAlunoModule,
    AppRoutingModule
  ],
  providers: [
    AppConfig,
    JobService,
    EventoService,
    UsuarioService,
    AuthService,
    AuthGuard,
    LoginGuard,
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
