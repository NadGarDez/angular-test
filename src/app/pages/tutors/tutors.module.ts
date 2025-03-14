import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorsPageRoutingModule } from './tutors-routing.module';

import { TutorsPage } from './tutors.page';
import { TutorService } from 'src/app/core/tutor.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { TutorCardComponent } from 'src/app/shared/tutor-card/tutor-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorsPageRoutingModule,
    HeaderComponent,
    TutorCardComponent
  ],
  declarations: [TutorsPage],
  providers: [TutorService]
})
export class TutorsPageModule {}
