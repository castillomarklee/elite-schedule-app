import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';

@Component({
  selector: 'my-team',
  templateUrl: 'my-team.html'
})
export class MyTeamsPage {

  constructor(private navCtrl: NavController) {

  }

  sayHello() {
    console.log('Hello world');
  }

  goToTournaments() {
      this.navCtrl.push(TournamentsPage);
  }

}
