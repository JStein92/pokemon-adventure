import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.css'],
  providers: [PokemonService]
})

export class MyPokemonComponent implements OnInit {
  @Input() battling: boolean;
  @Output() switchPokemonSender = new EventEmitter();
  allPokemon = null;
  equippedPokemon = [];
  showAllPokemonBool = false;

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getAllPokemon().subscribe(allPokemonFromFirebase => {
      this.allPokemon = (allPokemonFromFirebase);

      this.populateEquippedPokemonArray();

    })
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

  unequip(pokemonToUnequip){
    this.pokemonService.unequipPokemon(pokemonToUnequip);
    this.populateEquippedPokemonArray()
  }

  equip(pokemonToEquip){
    if (this.equippedPokemon.length<6){
      this.pokemonService.equipPokemon(pokemonToEquip);
      this.populateEquippedPokemonArray()
    }
    else{
      alert("Only 6 Pokemon Can be Equipped At A Time");
    }

  }

  showAllPokemon(){
    if (this.showAllPokemonBool === false){
      this.showAllPokemonBool  = true;
    } else {
      this.showAllPokemonBool  = false;
    }
  }

  switchPokemon(pokemonToSwitch: Pokemon) {
    this.switchPokemonSender.emit(pokemonToSwitch);
    console.log(pokemonToSwitch);
  }
}
