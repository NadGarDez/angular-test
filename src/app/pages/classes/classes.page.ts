import { Component, computed, OnInit, Signal, signal } from '@angular/core';
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
  inputValue = signal('');
  booking = signal<BookingList>([]);

  filteredBooking:Signal<BookingList> = computed(()=> this.booking().filter(item=>item.user.email.includes(this.inputValue()) || item.staff.email.includes(this.inputValue()))) 

  constructor(private service: BookingService) {}

  ngOnInit() {
    this.service.getBooking().subscribe((item) => {
      this.booking.set(item);
    });
  }
  onInput(event: any) {
    this.inputValue.set(event.target.value);
  }
}
