import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../types/user';

@Component({
  selector: 'app-users-details',
  standalone: true,
  imports: [],
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.scss'
})

export class UsersDetailsComponent {
  @Input() selectedUser: User | null = null;
  @Output() clearUserSelection = new EventEmitter<void>();

  clearSelection(): void {
    this.clearUserSelection.emit();
  }
}