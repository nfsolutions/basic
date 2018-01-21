import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgxTypeaheadModule} from 'ngx-typeahead';
import { StaticListComponent } from './static-list/static-list.component';
import { HttpListComponent } from './http-list/http-list.component';
import { CustomTemplateListComponent } from './custom-template-list/custom-template-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StaticListComponent,
    HttpListComponent,
    CustomTemplateListComponent
  ],
  imports: [
    BrowserModule, NgxTypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
