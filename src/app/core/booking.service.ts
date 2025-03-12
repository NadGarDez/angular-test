import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingList } from '../shared/api.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

    constructor(private http: HttpClient) { }

    url = 'https://test.worldsacross.com/api/booking'
  
    getBooking():Observable<BookingList> {
      return this.http.get<BookingList>(
        this.url,
      )
    }
}
