import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'sign', component:SignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
