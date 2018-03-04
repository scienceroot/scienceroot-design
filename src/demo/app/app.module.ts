import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { RouterModule }      from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ScrLoadingDemoModule} from "./loading/loading.module";
import {ScrThemeStylesDemoComponent} from "./theme-styles.component";

@NgModule({
  imports:      [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'loading', pathMatch: 'full'},
      {path: 'styles', component: ScrThemeStylesDemoComponent}
    ]),
    ScrLoadingDemoModule
  ],
  declarations: [
    AppComponent,
    ScrThemeStylesDemoComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {


  constructor() {
  }


}

