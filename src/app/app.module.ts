import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatdosComponent } from './chatdos/chatdos.component';
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    ConversationComponent,
    ChatdosComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
