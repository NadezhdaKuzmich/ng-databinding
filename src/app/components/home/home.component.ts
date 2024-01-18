import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isBlue = true;
  interpolation: string = 'Some text from interpolation';
  toggle() {
    this.isBlue = !this.isBlue
  }
}
