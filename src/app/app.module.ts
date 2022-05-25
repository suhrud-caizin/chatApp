import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat.component';
import { DisplayComponent } from './display.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    AppComponent,ChatComponent,DisplayComponent,UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
