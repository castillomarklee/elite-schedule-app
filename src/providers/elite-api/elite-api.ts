import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the EliteApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EliteApiProvider {
  private baseUrl = 'https://elite-schedule-application-i2.firebaseio.com';
  private currentTournament: any = {};

  constructor(public http: Http) {
  }

  getTournaments() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/tournaments.json`).subscribe(res => resolve(res.json()));
    })
  }

  getTournamentData(tournamentId) : Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${tournamentId}.json`).map(response => {
      this.currentTournament = response.json();
      return this.currentTournament;
    });
  }

  getCurrentTournament() {
    return this.currentTournament;
  }
}
