import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SecdoNgComponent } from './secdo-ng.component';
import { SecdoNgService } from './secdo-ng.service';

@NgModule({
  declarations: [SecdoNgComponent],
  exports: [SecdoNgComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SecdoNgService],
  bootstrap: [SecdoNgComponent]
})
export class SecdoNgModule { }