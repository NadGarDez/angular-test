import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingService } from 'src/app/core/booking.service';
import { BookingList } from 'src/app/shared/api.model';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
  standalone: false,
})
export class ClassesPage implements OnInit {

  booking$!: Observable<BookingList>;
  constructor(private service: BookingService) { }

  ngOnInit() { 
    this.booking$ = this.service.getBooking()
  }

}
