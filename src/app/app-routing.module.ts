import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SendComponent} from './send/send.component';
import { HomeComponent } from './components/home/home.component';
import {SeeProfileComponent} from './see-profile/see-profile.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {DeleteAccountComponent} from './delete-account/delete-account.component';
import {PasswordForgottenComponent} from './password-forgotten/password-forgotten.component';
import {ManagementComponent} from './admin/management/management.component';
import {ListClientsComponent} from './admin/list-clients/list-clients.component';
import {ListSuperAdminsComponent} from './admin/list-super-admins/list-super-admins.component';
import {ListAdminsComponent} from './admin/list-admins/list-admins.component';
import {UserContentComponent} from './admin/user-content/user-content.component';
import {SigninComponent} from './signin/signin.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'connexion', component: LoginComponent},
  { path: 'inscription', component: RegisterComponent},
  { path: 'accueil', component: HomeComponent},
  { path: 'envoyer-de-l\'argent', component: SendComponent},
  { path: 'voir-son-profil', component: SeeProfileComponent},
  { path: 'modifier-son-profil', component: UpdateProfileComponent},
  { path: 'contacter-l-administrateur', component: ContactUsComponent},
  { path: 'supprimer-son-compte', component: DeleteAccountComponent},
  { path: 'mot-de-passe-oublie', component: PasswordForgottenComponent},
  { path: 'admin', component: ManagementComponent},
  { path: 'admin/liste-des-super-admins', component: ListSuperAdminsComponent},
  { path: 'admin/liste-des-admins', component: ListAdminsComponent},
  { path: 'admin/liste-des-clients', component: ListClientsComponent},
  { path: 'admin/user-content', component: UserContentComponent},
  { path: '**', component: LoginComponent},
  { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
