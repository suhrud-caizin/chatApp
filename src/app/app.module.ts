import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './channel.component';
import { ChatComponent } from './chat.component';
import { ChatWindowComponent } from './chat.window.component';
import { DisplayComponent } from './display.component';
import { UserComponent } from './user.component';
import { CurrentuserDirective } from './currentuser.directive';

@NgModule({
  declarations: [
    AppComponent,ChatComponent,DisplayComponent,UserComponent,ChannelComponent,ChatWindowComponent, CurrentuserDirective
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
