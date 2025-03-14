import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { User } from '../api.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
  imports:[IonicModule, CommonModule]
})
export class StudentCardComponent  {

  @Input() student!: User;

}
