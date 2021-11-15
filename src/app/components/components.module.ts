import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonYouComponent } from './molecule/button-you/button-you.component';
import { TituloComponent } from './molecule/titulo/titulo.component';
import { TextoComponent } from './molecule/texto/texto.component';
import { ImageComponent } from './molecule/image/image.component';
import { BannerHomeComponent } from './atom/banner-home/banner-home.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { LoginComponent } from './shared/login/login.component';

const molecules = [
  ButtonYouComponent,
  TituloComponent,
  TextoComponent,
  ImageComponent
]

const atom = [
  BannerHomeComponent
]

const shared =[
  NavBarComponent
]

@NgModule({
  declarations: [
    molecules,
    atom,
    shared,
    LoginComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  exports: [atom, shared, molecules]
})
export class ComponentsModule {}
