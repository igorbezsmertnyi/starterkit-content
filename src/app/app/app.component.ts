import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  client:any = {
    x: 0,
    y: 0
  }

  @HostListener('mousemove', ['$event'])
  mouseMove(e) {
    this.client = {
      x: (e.clientX * (-1)) / 100,
      y: (e.clientY * (-1)) / 100
    }
  }
}
