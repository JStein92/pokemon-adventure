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
  public battling = true;

  constructor(public pokemonService: PokemonService) {

    this.myPokemon = new Pokemon('charmander', ['fire', 'dragon'], 3, 100, 400, 600, 49, 50, ['tail lash', 'char'], ['all'], true);

    this.opponent = new Pokemon('bulbasaur', ['grass', 'dragon'], 3, 100, 400, 600, 49, 50, ['vine whip', 'sunbeam'], ['all'], false);

    this.commenceBattle();
  }

  ngOnInit() {
    // console.log('test');
    // this.pokemonService.getData("https://pokeapi.co/api/v2/pokemon/5/").subscribe(returnedJSON => {
    //   console.log(returnedJSON);
    // })
  }
  commenceBattle() {
    let turn = 1;
    do {
      this.myPokemon.currentHP--;
      this.checkBattleOver();
    } while (this.battling);
  }

  checkBattleOver() {
    if(this.myPokemon.currentHP <= 0 || this.opponent.currentHP <= 0) {
      this.battling = false;
    }
  }
}
