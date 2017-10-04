import { Component, OnInit } from '@angular/core';
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
  allPokemon = null;
  equippedPokemon = [];
  showAllPokemonBool = false;

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getAllPokemon().subscribe(allPokemonFromFirebase => {
      this.allPokemon = (allPokemonFromFirebase);

      this.populateEquippedPokemonArray()

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

  unequip(pokemonToUnequip){
    this.pokemonService.unequipPokemon(pokemonToUnequip);
    this.populateEquippedPokemonArray()
  }

  equip(pokemonToEquip){
    this.pokemonService.equipPokemon(pokemonToEquip);
    this.populateEquippedPokemonArray()
  }

  showAllPokemon(){
    if (this.showAllPokemonBool === false){
      this.showAllPokemonBool  = true;
    } else {
      this.showAllPokemonBool  = false;
    }
  }
}
