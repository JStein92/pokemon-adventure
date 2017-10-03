import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

import { AuthenticationService } from '../authentication.service';
import * as firebase from "firebase";


@Component({
  selector: 'app-get-pokemon',
  templateUrl: './get-pokemon.component.html',
  styleUrls: ['./get-pokemon.component.css'],
  providers:[PokemonService]
})

export class GetPokemonComponent implements OnInit {
private user;
  returnedData;
  habitats = null;
  apiURL:string = "http://pokeapi.co/api/v2/";

  difficulty;

  constructor(private pokemonService: PokemonService, public authService: AuthenticationService) { }

  ngOnInit() {
    this.pokemonService.getHabitats().subscribe(habitat=>{
      this.habitats = (habitat);
      //console.log(this.habitats)

    })

  }

  ngDoCheck() {
  this.user = firebase.auth().currentUser;
}


  catchTestPokemon(name,sprites,types,level,currentLevelXP,totalLevelXP,totalAccruedXP,currentHP,maxHP,speed,attack,defense,activeMoves,allMoves,equipped){
    let newPokemon:Pokemon = new Pokemon(name,sprites, types,level,currentLevelXP,totalLevelXP,totalAccruedXP,currentHP,maxHP,speed,attack,defense,activeMoves,allMoves,equipped = false);
    console.log(newPokemon);
    this.pokemonService.catchPokemon(newPokemon);
  }


}
