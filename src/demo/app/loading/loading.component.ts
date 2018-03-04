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
          <scr-loading [waitFor]="dynamicReq">
            <div onInit>
              <button (click)="dynamic()">
                Set Promise
              </button>
            </div>
            <div onFinish>
              <h3>
                Dynamic result
              </h3>
            </div>
          </scr-loading>
        </div>
      </div>
      
      
      <div fxLayout="row">
        <div fxFlex="">
          <h1>Success</h1>
          <scr-loading [waitFor]="loadPromise">
            <div onFinish>
              <h3>
                Some result
              </h3>
            </div>
          </scr-loading>
        </div>
        <div fxFlex="">
          <h1>Failure</h1>
          <scr-loading [waitFor]="loadPromiseFailure">
            <div onFinish>
              <h3>
                Some result
              </h3>
            </div>
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
    this.dynamicReq = new Promise(resolve => setTimeout(resolve, 3000)).then(() => console.log('finished dynamic'));
  }

  private success(milliseconds: number) {
    this.loadPromise = new Promise(resolve => setTimeout(resolve, milliseconds)).then(() => console.log('finished success'));
  }

  private failure(milliseconds: number) {
    this.loadPromiseFailure = new Promise((resolve, reject) => setTimeout(reject, milliseconds)).catch(() => console.log('finished failure'));
  }
}
