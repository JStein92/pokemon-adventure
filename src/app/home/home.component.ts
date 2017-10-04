import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PokemonService]

})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }
amountOfPokemon;
  ngOnInit() {

    this.pokemonService.getAllPokemon().subscribe(allPokemonFromFirebase => {
      this.amountOfPokemon = (allPokemonFromFirebase.length);
    })

    if (this.amountOfPokemon === 0){
      this.apiCall(); //give pikachu
      console.log("no pokemon, gave pikachu");

    }

  }
  returnedData;
  buildPokemon(pokemonToBuild){

    let activeMoves = [];
    let movesNumber = 2;

    for(let i = 0; i < movesNumber; i++) {
      activeMoves[i] = pokemonToBuild.moves[Math.floor(Math.random()*(pokemonToBuild.moves.length))].move;
    }

    let name = pokemonToBuild.name;
    let sprites = [pokemonToBuild.sprites.front_default, pokemonToBuild.sprites.back_default];
    let types = pokemonToBuild.types;
    let level = 1;
    let currentLevelXP = 0;
    let totalLevelXP = level*100;
    let totalAccruedXP= 0;
    let currentHP = pokemonToBuild.stats[5].base_stat;
    let maxHP = pokemonToBuild.stats[5].base_stat;
    let speed = pokemonToBuild.stats[0].base_stat;
    let attack = pokemonToBuild.stats[4].base_stat;
    let defense = pokemonToBuild.stats[3].base_stat;
    let allMoves = pokemonToBuild.moves;
    let equipped=true;

    let newPokemon = new Pokemon(name,sprites, types,level,currentLevelXP,totalLevelXP,totalAccruedXP,currentHP,maxHP,speed,attack,defense,activeMoves,allMoves,equipped);

    this.pokemonService.catchPokemon(newPokemon);

  }


  apiCall(){
    this.pokemonService.getData("https://pokeapi.co/api/v2/pokemon/pikachu/").subscribe(
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

}
