import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  userData: User[] = [];
  currentUser: User = new User();

  constructor(private UserService: UserService) {
    this.userData = this.UserService.list;
  }

  onSelectClick(currentUser: User): void {
    this.currentUser = currentUser;
  }

  onUpdateClick(currentUser: User): void {
    this.UserService.updateUser(currentUser);
  }

  onDeleteClick(currentUser: User): void {
    this.UserService.removeUser(currentUser);
  }
}
