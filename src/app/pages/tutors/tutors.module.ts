import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorsPageRoutingModule } from './tutors-routing.module';

import { TutorsPage } from './tutors.page';
import { TutorService } from 'src/app/core/tutor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorsPageRoutingModule
  ],
  declarations: [TutorsPage],
  providers: [TutorService]
})
export class TutorsPageModule {}
