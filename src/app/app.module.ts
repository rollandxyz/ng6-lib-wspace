import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng6RxjsLibDemoModule } from 'ng6-rxjs-lib-demo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng6RxjsLibDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
