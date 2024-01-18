import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  count = 0;
  handleClick(event: Event) {
    console.log('event', event);
    console.log('event.target', event.target);
    this.count++;
  }
}
