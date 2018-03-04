import {Component} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Component({
  selector: '',
  template: `
    <div>
      
      <div fxLayout="row">
        <div fxFlex="">
          <h2>
            Empty input
          </h2>
          <scr-loading [waitFor]="">
            <h3>
              Empty result
            </h3>
          </scr-loading>
        </div>
        <div fxFlex="">
          <h2>
            Add dynamically
          </h2>
          <div>
            <button (click)="dynamic()">
              Set Promise (30s)
            </button>
          </div>
          <scr-loading [waitFor]="dynamicReq">
            <h3>
              Dynamic result
            </h3>
          </scr-loading>
        </div>
      </div>
      
      
      <div fxLayout="row">
        <div fxFlex="">
          <h1>Success</h1>
          <h2>
            Load Promise
          </h2>
          <scr-loading [waitFor]="loadPromise">
            <h3>
              Some result
            </h3>
          </scr-loading>
        </div>
        <div fxFlex="">
          <h1>Failure</h1>
          <h2>
            Load Promise
          </h2>
          <scr-loading [waitFor]="loadPromiseFailure">
            <h3>
              Some result
            </h3>
          </scr-loading>
        </div>
      </div>
      
      
    </div>
  `,
  styles: [`
  
  `]
})
export class ScrLoadingDemoComponent {

  public dynamicReq: Promise<any>;
  public loadPromise: Promise<any>;
  public loadPromiseFailure: Promise<any>;

  constructor() {
    this.success(2000);
    this.failure(3000);
  }

  public dynamic() {
    this.dynamicReq = new Promise(resolve => setTimeout(resolve, 30000)).then(() => console.log('finished dynamic'));
  }

  private success(milliseconds: number) {
    this.loadPromise = new Promise(resolve => setTimeout(resolve, milliseconds)).then(() => console.log('finished success'));
  }

  private failure(milliseconds: number) {
    this.loadPromiseFailure = new Promise((resolve, reject) => setTimeout(reject, milliseconds)).catch(() => console.log('finished failure'));
  }
}
