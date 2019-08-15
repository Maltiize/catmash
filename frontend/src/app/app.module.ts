import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoteImgComponent } from './vote-img/vote-img.component';
import { VoteComponent } from './vote/vote.component';
import { VoteCountComponent } from './vote-count/vote-count.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteImgComponent,
    VoteComponent,
    VoteCountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
