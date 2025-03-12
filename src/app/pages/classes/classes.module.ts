import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassesPageRoutingModule } from './classes-routing.module';

import { ClassesPage } from './classes.page';
import { BookingService } from 'src/app/core/booking.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassesPageRoutingModule // importar el servicio http aqui
  ],
  declarations: [ClassesPage],
  providers: [BookingService]
})
export class ClassesPageModule {}
