import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationEvent
} from '@angular/animations';
@Component({
  selector: 'app-habitat',
  templateUrl: './habitat.component.html',
  styleUrls: ['./habitat.component.css'],
  providers: [PokemonService],
  animations: [
      trigger('flyInFromTop', [
        state('in', style({transform: 'translateY(0)'})),
        transition('void => *', [
          animate(".9s ease", keyframes([
            style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(5px)',  offset: 0.99}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
          ]))
        ]),
      ]),
      trigger('flyInFromSide', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          animate("0s 0s", keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          ])),
          animate(".7s 1s ease", keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(5px)',  offset: 0.99}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ]))
        ]),
      ])
    ]
})

export class HabitatComponent implements OnInit {
  habitatId: string;
  habitatToDisplay;
  returnedData;
  newPokemon = null;
  apiURL:string = "http://pokeapi.co/api/v2/";
  equippedPokemon = [];
  allPokemon=[];
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
    })

    this.pokemonService.getAllPokemon().subscribe(allPokemonFromFirebase => {
      this.allPokemon = (allPokemonFromFirebase);
      this.populateEquippedPokemonArray()
    })

    if(this.habitatId==="1"){
      this.pokemonService.playSong("../assets/music/cave.mp3");
    } else if (this.habitatId==="2"){
      this.pokemonService.playSong("../assets/music/habitat.mp3");
    }else if (this.habitatId==="3"){
      this.pokemonService.playSong("../assets/music/grassland.mp3");
    }else if (this.habitatId==="4"){
      this.pokemonService.playSong("../assets/music/mountain.mp3");
    }else if (this.habitatId==="5"){
      this.pokemonService.playSong("../assets/music/rare.mp3");
    }else if (this.habitatId==="6"){
      this.pokemonService.playSong("../assets/music/rough-terrain.mp3");
    }else if (this.habitatId==="7"){
      this.pokemonService.playSong("../assets/music/sea.mp3");
    }else if (this.habitatId==="8"){
      this.pokemonService.playSong("../assets/music/urban.mp3");
    }else if (this.habitatId==="9"){
      this.pokemonService.playSong("../assets/music/water-side.mp3");
    }


  }
  populateEquippedPokemonArray(){
    this.equippedPokemon=[];
    for (let i = 0; i < this.allPokemon.length; i++) {
        if (this.allPokemon[i].equipped){
          this.equippedPokemon.push(this.allPokemon[i]);
        }
    }
  }

  stopSong(){
    this.pokemonService.stopSong();
  }

  buildPokemon(pokemonToBuild){

    let activeMoves = [];
    let movesNumber = 2;

    if (this.difficulty === "easy") {
      movesNumber = 2;
    } else if (this.difficulty==="medium") {
      movesNumber = 3;
    } else if (this.difficulty==="hard") {
      movesNumber = 4;
    }

    for(let i = 0; i < movesNumber; i++) {
      activeMoves[i] = pokemonToBuild.moves[Math.floor(Math.random()*(pokemonToBuild.moves.length))].move;
    }

    let name = pokemonToBuild.name;
    let sprites = [pokemonToBuild.sprites.front_default, pokemonToBuild.sprites.back_default];
    let types = pokemonToBuild.types;
    let level = this.difficulty;
    let currentLevelXP = 0;
    let totalLevelXP = level * 20;
    let totalAccruedXP= 0;
    let currentHP = pokemonToBuild.stats[5].base_stat + level;
    let maxHP = pokemonToBuild.stats[5].base_stat + level;
    let speed = pokemonToBuild.stats[0].base_stat + level;
    let attack = pokemonToBuild.stats[4].base_stat + level;
    let defense = pokemonToBuild.stats[3].base_stat + level;
    let allMoves = pokemonToBuild.moves;
    let equipped=false;

    this.newPokemon = new Pokemon(name,sprites, types,level,currentLevelXP,totalLevelXP,totalAccruedXP,currentHP,maxHP,speed,attack,defense,activeMoves,allMoves,equipped);

    //this.pokemonService.catchPokemon(this.newPokemon);

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
    if (difficulty === "easy"){
        this.difficulty = Math.floor(Math.random()*(10-1)+1);
        console.log(this.difficulty)
    } else if (difficulty==="medium")
    {
      this.difficulty = Math.floor(Math.random()*(30-10)+10);
      console.log(this.difficulty)
    } else if (difficulty==="hard")
    {
      this.difficulty = Math.floor(Math.random()*(70-30)+30);
      console.log(this.difficulty)
    }

    this.apiCall()
  }

}
