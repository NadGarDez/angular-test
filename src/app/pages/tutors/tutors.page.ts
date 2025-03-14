import { Component, computed, OnInit, Signal, signal } from '@angular/core';
import { TutorService } from 'src/app/core/tutor.service';
import { TutorList } from 'src/app/shared/api.model';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  standalone: false,
})
export class TutorsPage implements OnInit {
  
  inputValue = signal('')
  tu = signal<TutorList>([])

  filteredTutors: Signal<TutorList> = computed(()=> this.tu().filter(item=> item.first_name.includes(this.inputValue()) || item.last_name.includes(this.inputValue())))
  
  constructor(private service: TutorService) {}

  ngOnInit() {
    this.service.getTutors().subscribe(
      item => {
        this.tu.set(item)
      }
    )
  }
  onInput(event: any) {
    this.inputValue.set(event.target.value);
  }
  
}

