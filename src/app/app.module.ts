import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyTeamsPage } from '../pages/my-team/my-team';
import { GamePage } from '../pages/game/game';
import { TeamsPage } from '../pages/teams/teams';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { StandingsPage } from '../pages/standings/standings';
import { TeamHomePage } from '../pages/team-home/team-home';
import { EliteApiProvider } from '../providers/elite-api/elite-api';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    StandingsPage,
    TeamHomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    StandingsPage,
    TeamHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApiProvider
  ]
})
export class AppModule {}
