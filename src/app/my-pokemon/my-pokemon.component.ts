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

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getAllPokemon().subscribe(allPokemon => {
      this.allPokemon = (allPokemon);
      console.log(allPokemon);
    })
  }

}
