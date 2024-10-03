import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../../services/user-service.service';
import { User } from '../../../types/user';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})

export class UsersListComponent implements OnInit {
  users: User[] = [];
  selectedUserId: number | null = null;

  @Output() userSelected = new EventEmitter<User>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  selectUser(user: User): void {
    this.selectedUserId = user.id;
    this.userSelected.emit(user);
  }

  clearSelection(): void {
    this.selectedUserId = null;
  }
}