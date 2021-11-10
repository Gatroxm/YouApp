import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonYouComponent } from './molecule/button-you/button-you.component';
import { TituloComponent } from './molecule/titulo/titulo.component';
import { TextoComponent } from './molecule/texto/texto.component';
import { ImageComponent } from './molecule/image/image.component';
import { BannerHomeComponent } from './atom/banner-home/banner-home.component';

const molecules = [
  ButtonYouComponent,
  TituloComponent,
  TextoComponent,
  ImageComponent
]

const atom = [
  BannerHomeComponent
]


@NgModule({
  declarations: [
    molecules,
    atom,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  exports: [atom]
})
export class ComponentsModule {}
