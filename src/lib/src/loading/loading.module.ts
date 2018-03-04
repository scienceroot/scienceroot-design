import {NgModule} from "@angular/core";
import {ScrLoadingComponent} from "./loading.component";
import {BdLoadingModule} from "@bindoc/loading";

@NgModule({
  imports: [
    BdLoadingModule
  ],
  declarations: [
    ScrLoadingComponent
  ],
  exports: [
    ScrLoadingComponent
  ],
  providers: []
})
export class ScrLoadingModule {

}
