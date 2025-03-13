import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPageRoutingModule } from './student-routing.module';

import { StudentPage } from './student.page';
import { UserService } from 'src/app/core/user.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPageRoutingModule,
    HeaderComponent
  ],
  declarations: [StudentPage],
  providers: [UserService]
})
export class StudentPageModule {}
