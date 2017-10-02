import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  providers: [PokemonService]
})
export class BattleComponent implements OnInit {

  public player: Player;
  public myPokemon: Pokemon;
  public opponent: Pokemon;

  constructor(public pokemonService: PokemonService) {

  }

  ngOnInit() {
    this.pokemonService.getData("https://pokeapi.co/api/v2/pokemon/5/").subscribe(returnedJSON => {
      console.log(returnedJSON);
    },
      returnedJSON => {
        console.log("ERROR: ", returnedJSON);
      },
      () => {
        console.log("Completed");
      }
    );
  }
}
