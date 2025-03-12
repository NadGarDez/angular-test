import { Component, OnInit } from '@angular/core';
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
  users$!: Observable<UserList>;

  constructor(private service: UserService) {}

  ngOnInit() {
    this.users$ = this.service.getUsers()
  }
}
