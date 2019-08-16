import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';


import {MatTableModule} from '@angular/material/table'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';


import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VoteImgComponent } from './vote-img/vote-img.component';
import { VoteComponent } from './vote/vote.component';
import { VoteCountComponent } from './vote-count/vote-count.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const appRoutes: Routes = [
  { path: '', component: VoteComponent },
  { path: 'leaderboard',component: LeaderboardComponent },
  { path: '**', component: VoteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VoteImgComponent,
    VoteComponent,
    VoteCountComponent,
    LeaderboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
