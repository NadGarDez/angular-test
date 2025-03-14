import { Component, computed, OnInit, Signal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user.service';
import { UserList } from 'src/app/shared/api.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  standalone: false,
})
export class StudentPage implements OnInit {

  inputValue = signal('')
  users = signal<UserList>([])

  filteredUsers: Signal<UserList> = computed(()=> this.users().filter(item=> item.first_name.includes(this.inputValue()) || item.last_name.includes(this.inputValue())))
  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getUsers().subscribe(
      item => {
        this.users.set(item)
      }
    )
  }

  onInput(event: any) {
    this.inputValue.set(event.target.value);
  }
}
