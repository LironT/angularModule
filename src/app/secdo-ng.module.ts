import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AgGridModule} from "ag-grid-angular/main";

import {SecdoNgComponent} from './secdo-ng.component';
import {SecdoNgService} from './secdo-ng.service';

import {AngularFontAwesomeModule} from "angular-font-awesome";

import {LoaderComponent} from "./loader/loader.component";

import {SecdoGridComponent} from "./secdo-grid/secdo-grid.component";
import {RedComponentComponent} from "./red-component/red-component.component";
import {HeaderComponent} from "./secdo-grid/header/secdo-header.component";

@NgModule({
  declarations: [
    SecdoNgComponent,
		LoaderComponent,
    SecdoGridComponent,
    RedComponentComponent,
		HeaderComponent
  ],
  exports: [SecdoNgComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		AngularFontAwesomeModule,
    AgGridModule.withComponents([RedComponentComponent, HeaderComponent])
  ],
  providers: [SecdoNgService],
  bootstrap: [SecdoNgComponent]
})
export class SecdoNgModule { }