import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { CreationDeCompteViewComponent } from './view/creation-de-compte-view/creation-de-compte-view.component';
import { UserComponent } from './user/user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SelectViewComponent } from './view/select-view/select-view.component';
import { AboutComponent } from "./about/about.component";
import { ClientComponent } from './client/client.component';
import { ResultComponent } from './view/result-view/result.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginViewComponent, pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent},
  { path: 'CreationDeCompte', component: CreationDeCompteViewComponent, pathMatch: 'full'},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'user', component: UserComponent, pathMatch: 'full' },
  { path: 'Area', component: SelectViewComponent, pathMatch: 'full'},
  //{ path: 'result', component: ResultComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'AreaResult', component: ResultComponent},
  { path: 'client.apk', component: ClientComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
