import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { adminLteConf } from '../conf';
import { LayoutModule } from 'angular-admin-lte';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule.forRoot(adminLteConf)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
