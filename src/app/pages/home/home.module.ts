import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterLink,
    RouterLinkActive,
    HeaderComponent
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
