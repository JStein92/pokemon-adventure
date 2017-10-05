import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PokemonService {

habitats: FirebaseListObservable<any[]>;
allPokemon: FirebaseListObservable<any[]>;

audio = new Audio();


constructor(private http: Http, private database: AngularFireDatabase) {
  this.allPokemon = database.list('allPokemon');
  this.habitats = database.list('habitats');
}

healPokemon(){
  let allPokemon;
  this.getAllPokemon().subscribe(allPokemonFromFirebase => {
    allPokemon = (allPokemonFromFirebase);

  })
  for (let i = 0; i < allPokemon.length; i++) {
      allPokemon[i].currentHP = allPokemon[i].maxHP;
      let pokemonEntryInFirebase = this.getPokemonById(allPokemon[i]);
      pokemonEntryInFirebase.update({currentHP:allPokemon[i].currentHP});
  }

}

deleteAllPokemon(){
  let allPokemon = this.database.object('allPokemon/');
  allPokemon.remove();
}

playSong(song){
  this.audio.pause();
  this.audio.currentTime=0;
  this.audio.loop=true;
  this.audio.src = song;
  this.audio.load();
  this.audio.play();
}
stopSong(){
  this.audio.pause();
  this.audio.currentTime=0;
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

  getPokemonById(pokemon){
    return this.database.object('/allPokemon/' + pokemon.$key);
  }

  getAllPokemon() {
    //console.log(this.allPokemon);
    return this.allPokemon;
  }

  unequipPokemon(pokemonToUnequip){
    let pokemonEntryInFirebase = this.getPokemonById(pokemonToUnequip);
    pokemonEntryInFirebase.update({equipped:false});
  }
  equipPokemon(pokemonToEquip){
    let pokemonEntryInFirebase = this.getPokemonById(pokemonToEquip);
    pokemonEntryInFirebase.update({equipped:true});
  }



  getHabitatById(habitatId) {
    habitatId -= 1;
    let returnedHabitat = this.database.object('habitats/' + habitatId);
  //  console.log(returnedHabitat);
    return returnedHabitat;
  }

  getEquippedPokemon() {

    let equippedPokemon = [];

    this.getAllPokemon().subscribe(allPokemonFromFirebase => {
      let allPokemon = (allPokemonFromFirebase);
      for (let i = 0; i < allPokemon.length; i++) {
          if (allPokemon[i].equipped){
            equippedPokemon.push(allPokemon[i]);
          }
      }
    })
    return equippedPokemon;

  }

}
