import {Component, Input} from "@angular/core";

@Component({
  selector: 'scr-loading',
  template: `
    <bd-loading [waitFor]="waitFor">
      <div onInit>
        <ng-content select="[onInit]">
        </ng-content>
      </div>
      <div onLoad>
        <div  fxLayout="row"
              fxLayoutAlign="center">
          <div fxFlex="120px">
            <div class="container">
              <span class="dots"></span>
              <span class="dots"></span>
              <span class="dots"></span>
              <span class="dots"></span>
              <span class="dots"></span>
              <span class="dots"></span>
              <span class="dots"></span>
              <span class="dots"></span>
              <span class="dots"></span>
              <span class="dots"></span>
            </div>
          </div>
        </div>
      </div>
      <div onFinish>
        <ng-content select="[onFinish]">
        </ng-content>
      </div>
    </bd-loading>  
  `,
  styles: [`
    .container {
      display: inline-block;
      position: relative;
    }

    .dots {
      display: inline-block;
      position: relative;
      vertical-align: middle;
    }
    .dots:not(:last-child) {
      margin-right: 9px;
    }
    .dots:before, .dots:after {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
    }
    .dots:nth-child(1):before {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
      -webkit-animation: animBefore 1s linear infinite;
      animation: animBefore 1s linear infinite;
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
      background-color: #0c4ff1;
    }
    .dots:nth-child(1):after {
      -webkit-transform: translateY(200%);
      transform: translateY(200%);
      -webkit-animation: animAfter 1s linear infinite;
      animation: animAfter 1s linear infinite;
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
      background-color: #8845fa;
    }
    .dots:nth-child(2):before {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
      -webkit-animation: animBefore 1s linear infinite;
      animation: animBefore 1s linear infinite;
      -webkit-animation-delay: -1.8s;
      animation-delay: -1.8s;
      background-color: #0c4ff1;
    }
    .dots:nth-child(2):after {
      -webkit-transform: translateY(200%);
      transform: translateY(200%);
      -webkit-animation: animAfter 1s linear infinite;
      animation: animAfter 1s linear infinite;
      -webkit-animation-delay: -1.8s;
      animation-delay: -1.8s;
      background-color: #8845fa;
    }
    .dots:nth-child(3):before {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
      -webkit-animation: animBefore 1s linear infinite;
      animation: animBefore 1s linear infinite;
      -webkit-animation-delay: -2.7s;
      animation-delay: -2.7s;
      background-color: #0c4ff1;
    }
    .dots:nth-child(3):after {
      -webkit-transform: translateY(200%);
      transform: translateY(200%);
      -webkit-animation: animAfter 1s linear infinite;
      animation: animAfter 1s linear infinite;
      -webkit-animation-delay: -2.7s;
      animation-delay: -2.7s;
      background-color: #8845fa;
    }
    .dots:nth-child(4):before {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
      -webkit-animation: animBefore 1s linear infinite;
      animation: animBefore 1s linear infinite;
      -webkit-animation-delay: -3.6s;
      animation-delay: -3.6s;
      background-color: #0c4ff1;
    }
    .dots:nth-child(4):after {
      -webkit-transform: translateY(200%);
      transform: translateY(200%);
      -webkit-animation: animAfter 1s linear infinite;
      animation: animAfter 1s linear infinite;
      -webkit-animation-delay: -3.6s;
      animation-delay: -3.6s;
      background-color: #8845fa;
    }
    .dots:nth-child(5):before {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
      -webkit-animation: animBefore 1s linear infinite;
      animation: animBefore 1s linear infinite;
      -webkit-animation-delay: -4.5s;
      animation-delay: -4.5s;
      background-color: #0c4ff1;
    }
    .dots:nth-child(5):after {
      -webkit-transform: translateY(200%);
      transform: translateY(200%);
      -webkit-animation: animAfter 1s linear infinite;
      animation: animAfter 1s linear infinite;
      -webkit-animation-delay: -4.5s;
      animation-delay: -4.5s;
      background-color: #8845fa;
    }
    .dots:nth-child(6):before {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
      -webkit-animation: animBefore 1s linear infinite;
      animation: animBefore 1s linear infinite;
      -webkit-animation-delay: -5.4s;
      animation-delay: -5.4s;
      background-color: #0c4ff1;
    }
    .dots:nth-child(6):after {
      -webkit-transform: translateY(200%);
      transform: translateY(200%);
      -webkit-animation: animAfter 1s linear infinite;
      animation: animAfter 1s linear infinite;
      -webkit-animation-delay: -5.4s;
      animation-delay: -5.4s;
      background-color: #8845fa;
    }
    .dots:nth-child(7):before {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
      -webkit-animation: animBefore 1s linear infinite;
      animation: animBefore 1s linear infinite;
      -webkit-animation-delay: -6.3s;
      animation-delay: -6.3s;
      background-color: #0c4ff1;
    }
    .dots:nth-child(7):after {
      -webkit-transform: translateY(200%);
      transform: translateY(200%);
      -webkit-animation: animAfter 1s linear infinite;
      animation: animAfter 1s linear infinite;
      -webkit-animation-delay: -6.3s;
      animation-delay: -6.3s;
      background-color: #8845fa;
    }
    .dots:nth-child(8):before {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
      -webkit-animation: animBefore 1s linear infinite;
      animation: animBefore 1s linear infinite;
      -webkit-animation-delay: -7.2s;
      animation-delay: -7.2s;
      background-color: #0c4ff1;
    }
    .dots:nth-child(8):after {
      -webkit-transform: translateY(200%);
      transform: translateY(200%);
      -webkit-animation: animAfter 1s linear infinite;
      animation: animAfter 1s linear infinite;
      -webkit-animation-delay: -7.2s;
      animation-delay: -7.2s;
      background-color: #8845fa;
    }
    .dots:nth-child(9):before {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
      -webkit-animation: animBefore 1s linear infinite;
      animation: animBefore 1s linear infinite;
      -webkit-animation-delay: -8.1s;
      animation-delay: -8.1s;
      background-color: #0c4ff1;
    }
    .dots:nth-child(9):after {
      -webkit-transform: translateY(200%);
      transform: translateY(200%);
      -webkit-animation: animAfter 1s linear infinite;
      animation: animAfter 1s linear infinite;
      -webkit-animation-delay: -8.1s;
      animation-delay: -8.1s;
      background-color: #8845fa;
    }
    .dots:nth-child(10):before {
      -webkit-transform: translateY(-200%);
      transform: translateY(-200%);
      -webkit-animation: animBefore 1s linear infinite;
      animation: animBefore 1s linear infinite;
      -webkit-animation-delay: -9s;
      animation-delay: -9s;
      background-color: #0c4ff1;
    }
    .dots:nth-child(10):after {
      -webkit-transform: translateY(200%);
      transform: translateY(200%);
      -webkit-animation: animAfter 1s linear infinite;
      animation: animAfter 1s linear infinite;
      -webkit-animation-delay: -9s;
      animation-delay: -9s;
      background-color: #8845fa;
    }

    @-webkit-keyframes animBefore {
      0% {
        -webkit-transform: scale(1) translateY(-200%);
        z-index: 1;
      }
      25% {
        -webkit-transform: scale(1.3) translateY(0);
        z-index: 1;
      }
      50% {
        -webkit-transform: scale(1) translateY(200%);
        z-index: -1;
      }
      75% {
        -webkit-transform: scale(0.7) translateY(0);
        z-index: -1;
      }
      100% {
        -webkit-transform: scale(1) translateY(-200%);
        z-index: -1;
      }
    }
    @keyframes animBefore {
      0% {
        transform: scale(1) translateY(-200%);
        z-index: 1;
      }
      25% {
        transform: scale(1.3) translateY(0);
        z-index: 1;
      }
      50% {
        transform: scale(1) translateY(200%);
        z-index: -1;
      }
      75% {
        transform: scale(0.7) translateY(0);
        z-index: -1;
      }
      100% {
        transform: scale(1) translateY(-200%);
        z-index: -1;
      }
    }
    @-webkit-keyframes animAfter {
      0% {
        -webkit-transform: scale(1) translateY(200%);
        z-index: -1;
      }
      25% {
        -webkit-transform: scale(0.7) translateY(0);
        z-index: -1;
      }
      50% {
        -webkit-transform: scale(1) translateY(-200%);
        z-index: 1;
      }
      75% {
        -webkit-transform: scale(1.3) translateY(0);
        z-index: 1;
      }
      100% {
        -webkit-transform: scale(1) translateY(200%);
        z-index: 1;
      }
    }
    @keyframes animAfter {
      0% {
        transform: scale(1) translateY(200%);
        z-index: -1;
      }
      25% {
        transform: scale(0.7) translateY(0);
        z-index: -1;
      }
      50% {
        transform: scale(1) translateY(-200%);
        z-index: 1;
      }
      75% {
        transform: scale(1.3) translateY(0);
        z-index: 1;
      }
      100% {
        transform: scale(1) translateY(200%);
        z-index: 1;
      }
    }

  `]
})
export class ScrLoadingComponent {

  @Input() waitFor: Promise<any>;
}
