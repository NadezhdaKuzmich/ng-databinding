import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  value: string = 'User';

  handleInput(newValue: string) {
    this.value = newValue;
  }
}
