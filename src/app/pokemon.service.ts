import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PokemonService {

habitats: FirebaseListObservable<any[]>;
allPokemon: FirebaseListObservable<any[]>;


constructor(private http: Http, private database: AngularFireDatabase) {
  this.allPokemon = database.list('myPokemon');
  this.habitats = database.list('habitats');
}

  getData(apiURL) {
    return this.http.get(apiURL)
    .map(this.extractData);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  getHabitats(){
    return this.habitats;
  }

  catchPokemon(pokemonToAdd){
    this.allPokemon.push(pokemonToAdd);
  }

  getAllPokemon() {
    console.log(this.allPokemon);
    return this.allPokemon;
  }

  getHabitatById(habitatId) {
    habitatId -= 1;
    let returnedHabitat = this.database.object('habitats/' + habitatId);
    console.log(returnedHabitat);
    return returnedHabitat;
  }

}
