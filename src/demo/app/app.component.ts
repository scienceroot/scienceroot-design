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
        <li>
          <a [routerLink]="['loading']">Loading</a>
        </li>
        <li>
          <a [routerLink]="['search-bar']">SearchBar</a>
        </li>
      </ul>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: [`
    
  `]
})
export class AppComponent {

}

