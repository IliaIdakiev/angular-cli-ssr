import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ssr-ng-seed' }),
    ServerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModuleServer { }
