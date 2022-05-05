import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngAdmin-third';

  showContents = true;
  showTemplate = true;
  items = ['a', 'b', 'c', 'd'];
}
