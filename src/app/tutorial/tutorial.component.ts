import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
    providers: [PokemonService]
})
export class TutorialComponent implements OnInit {
  line = 0;
  apiUrl;
  constructor(private pokemonService: PokemonService,private router: Router) { }

  ngOnInit() {
    this.pokemonService.playSong("../assets/music/tutorial.mp3");

  }
  next(){
    this.line++;
    if (this.line===7){
        this.pokemonService.stopSong();
        this.router.navigate(['map']);
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

    console.log(newPokemon);

  }

  bulbasaur(){
    this.apiUrl= "https://pokeapi.co/api/v2/pokemon/bulbasaur/"
    this.apiCall();
  }
  squirtle(){
    this.apiUrl= "https://pokeapi.co/api/v2/pokemon/squirtle/"
    this.apiCall();
  }
  charmander(){
    this.apiUrl= "https://pokeapi.co/api/v2/pokemon/charmander/"
    this.apiCall();
  }


  apiCall(){
    this.pokemonService.getData(this.apiUrl).subscribe(
      returnedJSON => {
          this.returnedData = returnedJSON;
        },
      returnedJSON => {
        //  console.log("ERROR: ",returnedJSON);
      },
      () => {
          // console.log(this.returnedData);
        this.buildPokemon(this.returnedData);
        this.next();
      }
    );
  }

}
