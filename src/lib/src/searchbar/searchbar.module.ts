import {NgModule} from "@angular/core";
import {ScrSearchBarComponent} from "./searchbar.component";
import {MatIconModule, MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [
    ScrSearchBarComponent
  ],
  exports: [
    ScrSearchBarComponent
  ],
  providers: []
})
export class ScrSearchBarModule {

}
