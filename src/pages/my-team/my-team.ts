import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import { EliteApiProvider } from '../../providers/elite-api/elite-api';
import { TeamHomePage } from '../team-home/team-home';

@Component({
  selector: 'my-team',
  templateUrl: 'my-team.html'
})
export class MyTeamsPage {

  favorites = [
    {
      team: { id: 6128, name: 'HC Elite 7th', coach: 'Michelotti'},
      tournamentId: '3274892oiqwuejaosd-aoshdoaiqw8784932oiu-qweoque',
      tournamentName: 'March Madness Tournament'
    },
    {
      team: { id: 805, name: 'HC Elite', coach: 'Michelotti'},
      tournamentId: '09870349ojodjosf-asdadzxvxd-qweoque',
      tournamentName: 'Holiday Hoops Challenge'
    }
  ];

  constructor(private navCtrl: NavController, private loadingController: LoadingController, private eliteApi: EliteApiProvider) {

  }

  sayHello() {
    console.log('Hello world');
  }

  goToTournaments() {
      this.navCtrl.push(TournamentsPage);
  }

  favoriteTapped($event, favorite) {
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });

    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team));
  }

}
