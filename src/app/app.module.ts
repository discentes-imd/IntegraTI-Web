import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { RegisterComponent } from './register/register.component';
import { EventosModule } from './eventos/eventos.module';
import { JobsModule } from './jobs/jobs.module';
import { AboutComponent } from './about/about.component';
import {AppConfig} from './app.config';
import {JobService} from './_services/job.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    EventosModule,
    JobsModule
  ],
  providers: [
    AppConfig,
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
