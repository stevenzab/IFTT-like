import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './homeComponent/home/home.component';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';

import { CreationDeCompteComponent } from './CreationDeCompte/creation-de-compte/creation-de-compte.component';
import { CreationDeCompteViewComponent } from './view/creation-de-compte-view/creation-de-compte-view.component';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { HomeGridComponent } from './homeComponent/home-grid/home-grid.component';
import { LoginViewComponent } from './view/login-view/login-view.component';
import { MeteoCardComponent } from './SideBarServices/cards/meteo-card/meteo-card.component';
import { WebService } from './services/web.service';
import { GoogleCardComponent } from './SideBarServices/cards/google-card/google-card.component';
import { SteamCardComponent } from './SideBarServices/cards/steam-card/steam-card.component';
import { OutlookCardComponent } from './SideBarServices/cards/outlook-card/outlook-card.component';
import { PornhubCardComponent } from './SideBarServices/cards/pornhub-card/pornhub-card.component';
import { DiscordCardComponent } from './SideBarServices/cards/discord-card/discord-card.component';
import { SelectViewComponent } from './view/select-view/select-view.component';
import { CatresponseCardComponent } from './SideBarServices/cards/catresponse-card/catresponse-card.component';
import { DogresponseCardComponent } from './SideBarServices/cards/dogresponse-card/dogresponse-card.component';
import { EdamamCardComponent } from './SideBarServices/cards/edamam-card/edamam-card.component';
import { RandomUserGenCardComponent } from './SideBarServices/cards/random-user-gen-card/random-user-gen-card.component';
import { MeteoContentComponent } from './SideBarServices/leftContent/meteo-content/meteo-content.component';
import { SteamContentComponent } from './SideBarServices/leftContent/steam-content/steam-content.component';
import { OutlookContentComponent } from './SideBarServices/leftContent/outlook-content/outlook-content.component';
import { GoogleContentComponent } from './SideBarServices/leftContent/google-content/google-content.component';
import { CatresponseContentComponent } from './SideBarServices/leftContent/catresponse-content/catresponse-content.component';
import { DogresponseContentComponent } from './SideBarServices/leftContent/dogresponse-content/dogresponse-content.component';
import { PornhubContentComponent } from './SideBarServices/leftContent/pornhub-content/pornhub-content.component';
import { EdamamContentComponent } from './SideBarServices/leftContent/edamam-content/edamam-content.component';
import { DiscordContentComponent } from './SideBarServices/leftContent/discord-content/discord-content.component';
import { RandomUserGenContentComponent } from './SideBarServices/leftContent/random-user-gen-content/random-user-gen-content.component';
import { IpCardComponent } from './SideBarServices/cards/ip-card/ip-card.component';
import { KittenCardComponent } from './SideBarServices/cards/kitten-card/kitten-card.component';
import { NumbCardComponent } from './SideBarServices/cards/numb-card/numb-card.component';
import { FactCardComponent } from './SideBarServices/cards/fact-card/fact-card.component';
import { IpContentComponent } from './SideBarServices/leftContent/ip-content/ip-content.component';
import { KittenContentComponent } from './SideBarServices/leftContent/kitten-content/kitten-content.component';
import { NumbContentComponent } from './SideBarServices/leftContent/numb-content/numb-content.component';
import { FactContentComponent } from './SideBarServices/leftContent/fact-content/fact-content.component';
import { ResultComponent } from './view/result-view/result.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    ForgotPasswordComponent,
    CreationDeCompteComponent,
    CreationDeCompteViewComponent,
    HomeViewComponent,
    HomeGridComponent,
    LoginViewComponent,
    NotFoundComponent,
    MeteoCardComponent,
    GoogleCardComponent,
    SteamCardComponent,
    OutlookCardComponent,
    PornhubCardComponent,
    DiscordCardComponent,
    SelectViewComponent,
    CatresponseCardComponent,
    DogresponseCardComponent,
    EdamamCardComponent,
    RandomUserGenCardComponent,
    MeteoContentComponent,
    SteamContentComponent,
    OutlookContentComponent,
    GoogleContentComponent,
    CatresponseContentComponent,
    DogresponseContentComponent,
    PornhubContentComponent,
    EdamamContentComponent,
    DiscordContentComponent,
    RandomUserGenContentComponent,
    AboutComponent,
    IpCardComponent,
    KittenCardComponent,
    NumbCardComponent,
    FactCardComponent,
    IpContentComponent,
    KittenContentComponent,
    NumbContentComponent,
    FactContentComponent,
    ClientComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    CommonModule,
  ],
  exports: [],
  
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
