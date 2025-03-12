import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorService } from 'src/app/core/tutor.service';
import { TutorList } from 'src/app/shared/api.model';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  standalone: false,
})
export class TutorsPage implements OnInit {
  tutors$!: Observable<TutorList>
  constructor(private service: TutorService) {}

  ngOnInit() {
    this.tutors$ = this.service.getTutors()
  }
}
