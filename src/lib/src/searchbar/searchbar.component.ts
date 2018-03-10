import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'scr-search-bar',
  template: `
    <div class="scr-search-bar">
      <mat-form-field floatLabel="never" 
                      floatPlaceholder="never">
        <mat-icon matPrefix="">search</mat-icon>
        <mat-placeholder>
          {{placeholder}}
        </mat-placeholder>
        <input  matInput=""
                [ngModel]="value"
                (ngModelChange)="valueChange.emit($event)"
                type="search" />
      </mat-form-field>
    </div>
  `,
  styles: [`
    mat-form-field { width: 100%; }
  `]
})
export class ScrSearchBarComponent {

  @Input() value: string;
  @Input() placeholder: string = 'Search...';

  @Output() valueChange: EventEmitter<string> = new EventEmitter();
}
