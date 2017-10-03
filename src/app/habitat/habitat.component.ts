import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
@Component({
  selector: 'app-habitat',
  templateUrl: './habitat.component.html',
  styleUrls: ['./habitat.component.css'],
  providers: [PokemonService]
})

export class HabitatComponent implements OnInit {
  habitatId: string;
  habitatToDisplay;
  returnedData;
  apiURL:string = "http://pokeapi.co/api/v2/";

  difficulty;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.habitatId = urlParameters['id'];
    });
    this.pokemonService.getHabitatById(this.habitatId).subscribe(dataLastEmittedFromObserver => {
      this.habitatToDisplay = dataLastEmittedFromObserver;

      console.log(this.habitatToDisplay);
    })
    // this.habitatToDisplay = this.pokemonService.getHabitatById(this.habitatId);
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
    let speed = pokemonToBuild.stats[0];
    let attack = pokemonToBuild.stats[4];
    let defense = pokemonToBuild.stats[3];
    let activeMoves = pokemonToBuild.moves[0];
    let allMoves = pokemonToBuild.moves;
    let playerActive = false;

    let newPokemon:Pokemon = new Pokemon(name, types,level,currentLevelXP,totalLevelXP,totalAccruedXP,currentHP,maxHP,speed,attack,defense,activeMoves,allMoves,playerActive);

    console.log(newPokemon);

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

  searchHabitat(habitatToSearch, difficulty){
    let randomPokemon = Math.floor(Math.random()*habitatToSearch.pokemon_species.length);
    //console.log(habitatToSearch.pokemon_species[randomPokemon].name)
    this.apiURL = habitatToSearch.pokemon_species[randomPokemon].url;
    this.difficulty = difficulty;
    this.apiCall()
  }

}
