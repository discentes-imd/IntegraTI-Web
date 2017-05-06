import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';

export const RegisterRoutes: Routes = [
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    imports: [RouterModule.forChild(RegisterRoutes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule {}
