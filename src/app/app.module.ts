import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SendComponent } from './send/send.component';
import { DispositionsComponent } from './components/dispositions/dispositions.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SeeProfileComponent } from './see-profile/see-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { PasswordForgottenComponent } from './password-forgotten/password-forgotten.component';
import { ManagementComponent } from './admin/management/management.component';
import { ListClientsComponent } from './admin/list-clients/list-clients.component';
import { ListAdminsComponent } from './admin/list-admins/list-admins.component';
import { ListSuperAdminsComponent } from './admin/list-super-admins/list-super-admins.component';
import { UserContentComponent } from './admin/user-content/user-content.component';
import { SigninComponent } from './signin/signin.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { UserService } from './services/user.service';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    SendComponent,
    DispositionsComponent,
    SeeProfileComponent,
    UpdateProfileComponent,
    ContactUsComponent,
    DeleteAccountComponent,
    PasswordForgottenComponent,
    ManagementComponent,
    ListClientsComponent,
    ListAdminsComponent,
    ListSuperAdminsComponent,
    UserContentComponent,
    SigninComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
