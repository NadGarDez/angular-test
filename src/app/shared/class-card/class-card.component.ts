import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../api.model';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class ClassCardComponent  {

  @Input() booking!: Booking

}
