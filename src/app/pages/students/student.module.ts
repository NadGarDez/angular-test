import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPageRoutingModule } from './student-routing.module';

import { StudentPage } from './student.page';
import { UserService } from 'src/app/core/user.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { StudentCardComponent } from 'src/app/shared/student-card/student-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPageRoutingModule,
    HeaderComponent,
    StudentCardComponent
  ],
  declarations: [StudentPage],
  providers: [UserService]
})
export class StudentPageModule {}
