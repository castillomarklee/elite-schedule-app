import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MyTeamsPage } from '../my-team/my-team';
import { TeamsPage } from '../teams/teams';
import { EliteApiProvider } from '../../providers/elite-api/elite-api';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {
  public tournaments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private EliteApi: EliteApiProvider, private loadingController: LoadingController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TournamentsPage');
  // }

  itemTapped($event, tournament) {
    this.navCtrl.push(TeamsPage, tournament);
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments...'
    });

    loader.present().then(() => {
      this.EliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });
  }

}
