import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassesPageRoutingModule } from './classes-routing.module';

import { ClassesPage } from './classes.page';
import { BookingService } from 'src/app/core/booking.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { ClassCardComponent } from 'src/app/shared/class-card/class-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassesPageRoutingModule, // importar el servicio http aqui
    HeaderComponent,
    ClassCardComponent
  ],
  declarations: [ClassesPage],
  providers: [BookingService]
})
export class ClassesPageModule {}
