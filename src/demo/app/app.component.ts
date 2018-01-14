import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <div>
      <h1 class="scr-primary-text">@scienceroot/design</h1>
      <ul>
        <li>
          <a [routerLink]="['']">Home</a>
        </li>
      </ul>

    </div>

    <div class="scr-primary">
      Some colorful div.
    </div>    
  `,
  styles: [`
    
  `]
})
export class AppComponent {

}

