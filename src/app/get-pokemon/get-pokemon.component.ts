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
  console.log(this.user);
}

  searchHabitat(habitatToSearch, difficulty){
    let randomPokemon = Math.floor(Math.random()*habitatToSearch.pokemon_species.length);
    //console.log(habitatToSearch.pokemon_species[randomPokemon].name)
    this.apiURL = habitatToSearch.pokemon_species[randomPokemon].url;
    this.difficulty = difficulty;
    this.apiCall()
  }

  apiCall(){
    this.pokemonService.getData(this.apiURL).subscribe(
      returnedJSON => {
          this.returnedData = returnedJSON;
        },
      returnedJSON => {
          console.log("ERROR: ",returnedJSON);
      },
      () => {
          // console.log(this.returnedData);
          this.buildPokemon(this.returnedData);

      }
    );
  }

  catchTestPokemon(name,types,level,currentLevelXP,totalLevelXP,totalAccruedXP,currentHP,maxHP,activeMoves,allMoves,playerActive){
    let newPokemon:Pokemon = new Pokemon(name, types,level,currentLevelXP,totalLevelXP,totalAccruedXP,currentHP,maxHP,activeMoves,allMoves,playerActive);
    console.log(newPokemon);
    this.pokemonService.catchPokemon(newPokemon);
  }

  buildPokemon(pokemonToBuild){
    let name = pokemonToBuild.name;
    let types = pokemonToBuild.types;
    let level = this.difficulty;
    let currentLevelXP = 0;
    let totalLevelXP = level*100;
    let totalAccruedXP= 0;
    let currentHP = pokemonToBuild.stats[5];
    let maxHP = pokemonToBuild.stats[5];
    let activeMoves = pokemonToBuild.moves[0];
    let allMoves = pokemonToBuild.moves;
    let playerActive = false;

    let newPokemon:Pokemon = new Pokemon(name, types,level,currentLevelXP,totalLevelXP,totalAccruedXP,currentHP,maxHP,activeMoves,allMoves,playerActive);

    console.log(newPokemon);

  }

  showName() {
    let name = this.returnedData.name;
    console.log(name);
  }

}
