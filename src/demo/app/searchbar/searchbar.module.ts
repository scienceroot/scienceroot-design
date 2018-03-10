import {NgModule} from "@angular/core";
import {ScrSearchBarModule} from "design";
import {RouterModule} from "@angular/router";
import {ScrSearchBarDemoComponent} from "./searchbar.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'search-bar', component: ScrSearchBarDemoComponent}
    ]),
    ScrSearchBarModule
  ],
  declarations: [
    ScrSearchBarDemoComponent
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class ScrSearchBarDemoModule {

}
