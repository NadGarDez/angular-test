import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderComponent, IonicModule.forRoot(), AppRoutingModule, IonicModule.forRoot({})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
