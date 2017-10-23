import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import * as firebase from "firebase";
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
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.css'],
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

export class MyPokemonComponent implements OnInit {
  @Input() battling: boolean;

  @Output() healPokemonSender = new EventEmitter();
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

  healPokemon(){ //send action up to MapComponent 
    this.pokemonService.healPokemon();
    this.healPokemonSender.emit();
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
    if (this.equippedPokemon.length>1){
      this.pokemonService.unequipPokemon(pokemonToUnequip);
      this.populateEquippedPokemonArray()
    } else {
      alert("You must have at least one pokemon equipped!")
    }

  }

  equip(pokemonToEquip){
    if (this.equippedPokemon.length<6){
      this.pokemonService.equipPokemon(pokemonToEquip);
      this.populateEquippedPokemonArray()
    }
    else{
      alert("Maximun of six pokemon can be equipped at a time!");
    }

  }


  showAllPokemon(){
    if (this.showAllPokemonBool === false){
      this.showAllPokemonBool  = true;
    } else {
      this.showAllPokemonBool  = false;
    }
  }


}
