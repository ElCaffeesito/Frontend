import { Component } from '@angular/core';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { User } from '../../types/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UsersDetailsComponent, UsersListComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsuariosComponent {
  selectedUser: User | null = null;

  onUserSelected(user: User): void {
    this.selectedUser = user;
  }

  clearSelectedUser(): void {
    this.selectedUser = null;
  }
}