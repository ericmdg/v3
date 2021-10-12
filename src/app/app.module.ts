import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { adminLteConf } from '../conf';
import { LayoutModule } from 'angular-admin-lte';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarLeftComponent } from './sidebar/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar/sidebar-right/sidebar-right.component';
import { FooterLeftComponent } from './footer/footer-left/footer-left.component';
import { FooterRightComponent } from './footer/footer-right/footer-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FooterLeftComponent,
    FooterRightComponent,
    SidebarComponent,
    SidebarLeftComponent,
    SidebarRightComponent
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
