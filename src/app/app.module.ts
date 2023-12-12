import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './module/core/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ProfileComponent } from './component/profile/profile.component';
import { JwtModule } from '@auth0/angular-jwt';
import { CoreModule } from './module/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    RegistrationComponent,
    LoginComponent,
    WelcomeComponent,
    ProfileComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,CoreModule,
    JwtModule.forRoot({
    config: {
      allowedDomains: ['localhost:4200'], // replace with your actual API domain
      disallowedRoutes: ['localhost:4200/login'], // replace with your login route
    },
  }),ReactiveFormsModule,NgxCaptchaModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
