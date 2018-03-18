import {Component} from "@angular/core";

@Component({
  selector: '',
  template: `
    <div class="demo">
      <div class="bar">
        <scr-search-bar [value]="value"
                        (valueChange)="value = $event;">
        </scr-search-bar>
      </div>
      <div>
        <h3>Searched value:</h3>
        <p>{{ value }}</p>
      </div>
    </div>
  `,
  styles: [`
    div.demo {
      padding: 24px;  
    }
    
    .bar {
      padding: 0 24px;
      height: 64px;
      background-color: #fff;
    }
  `]
})
export class ScrSearchBarDemoComponent {

  public value: string;
}
