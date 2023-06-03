import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  // styleUrls: ['./display-details.component.css']
  styles: [`
    .fifth {
      color: white;
    }
  `]
})
export class DisplayDetailsComponent {
  count = 0;
  paragraphDisplay = false;
  clicks = [];

  showParagraph() {
    if (this.paragraphDisplay == true) {
      this.paragraphDisplay = false;
    } else {
      this.paragraphDisplay = true;
    }
    this.count += 1;
    this.clicks.push(new Date());
  }

  getColor() {
    return this.count >= 5 ? 'blue' : 'white';
  }
}
