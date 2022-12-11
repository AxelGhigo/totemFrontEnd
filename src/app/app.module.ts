import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotemorizontaleComponent } from './totemorizontale/totemorizontale.component';
import { TabelloneComponent } from './tabellone/tabellone.component';

@NgModule({
  declarations: [
    AppComponent,
    TotemorizontaleComponent,
    TabelloneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
