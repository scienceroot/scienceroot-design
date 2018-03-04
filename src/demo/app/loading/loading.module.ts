import {NgModule} from "@angular/core";
import {ScrLoadingDemoComponent} from "./loading.component";
import {RouterModule} from "@angular/router";
import {ScrLoadingModule} from "design";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'loading', component: ScrLoadingDemoComponent}
    ]),
    ScrLoadingModule
  ],
  declarations: [
    ScrLoadingDemoComponent
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class ScrLoadingDemoModule {

}
