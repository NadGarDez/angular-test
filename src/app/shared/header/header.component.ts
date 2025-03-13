import { Component, OnInit, signal, computed } from '@angular/core';
import { Event, NavigationEnd, Router, RouterLink } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule, RouterLink],
})
export class HeaderComponent implements OnInit {
  currentPath = signal<string>('');
  
  isHomeActive = computed(()=> this.currentPath()=== '/home')

  isTutorsActive = computed(()=> this.currentPath()=== '/tutors')
  isStudentsActive = computed(()=> this.currentPath()=== '/students')
  isClassesActive = computed(()=> this.currentPath()=== '/classes')

  constructor(private router: Router, private menu: MenuController) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath.set(event.urlAfterRedirects);
      });
  }

  async openMenu() {
    await this.menu.open('main-content')
    // here the code that will open the side menu
    
  }
}
