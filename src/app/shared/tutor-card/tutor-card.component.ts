import { Component, Input, OnInit } from '@angular/core';
import { Tutor } from '../api.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.scss'],
  imports:[IonicModule, CommonModule]
})
export class TutorCardComponent  {
  @Input() tutor!: Tutor

}
