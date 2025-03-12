import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorList } from '../shared/api.model';

@Injectable({
  providedIn: 'root',
})
export class TutorService {
  constructor(private http: HttpClient) {}

  url = 'https://test.worldsacross.com/api/tutors';

  getTutors(): Observable<TutorList> {
    return this.http.get<TutorList>(this.url);
  }
}
