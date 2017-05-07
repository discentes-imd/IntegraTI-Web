import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { RegisterComponent } from './register.component';

// Módules
import { RegisterRoutingModule } from './register.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent]
})

export class RegisterModule { }
