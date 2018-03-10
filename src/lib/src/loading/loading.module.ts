import {NgModule} from "@angular/core";
import {ScrLoadingComponent} from "./loading.component";
import {BdLoadingModule} from "@bindoc/loading";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    FlexLayoutModule,
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
