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
  public myPokemon2: Pokemon;
  public opponent: Pokemon;
  public battling = true;

  constructor(public pokemonService: PokemonService) {

    this.myPokemon = new Pokemon('charmander', ['fire', 'dragon'], 3, 100, 400, 600, 49, 50, 5, 5, 3, ['tail lash', 'char'], ['all'], true);
    this.myPokemon2 = new Pokemon('squirtle', ['water'], 3, 100, 400, 600, 49, 50, 3, 4, 6, ['water gun', 'tail whip'], ['all'], true);

    this.opponent = new Pokemon('bulbasaur', ['grass', 'dragon'], 3, 100, 400, 600, 49, 50, 3, 5, 5, ['vine whip', 'sunbeam'], ['all'], false);

    this.player = new Player("Ash", [], [this.myPokemon, this.myPokemon2]);

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
      this.myPokemon.currentHP -= 5;
      this.myPokemon2.currentHP -= 10;
      this.checkAllActivePokemonUnconscious();
      this.checkOpponentKO();
      console.log("pokemon1 HP: " + this.myPokemon.currentHP);
      console.log("pokemon2 HP: " + this.myPokemon2.currentHP);
    } while (this.battling);
  }

  checkAllActivePokemonUnconscious() {
    let unconsciousCount = 0;
    this.player.activePokemon.forEach(function(pokemon) {
      if(pokemon.currentHP <= 0) {
        unconsciousCount++;
      } else {
        return false;
      }
    });

    if (unconsciousCount === this.player.activePokemon.length) {
      this.battling = false;
      return true;
    }
  }

  checkOpponentKO() {
    if(this.opponent.currentHP <= 0) {
      this.battling = false;
    }
  }

  flee() {
    this.battling = false;
  }

  catch() {
    if (this.player.activePokemon.length < 6) {
      this.player.activePokemon.push(this.opponent);
    } else {
      this.player.inactivePokemon.push(this.opponent);
    }
    this.battling = false;
  }

  switchPokemon(selectedPokemon: Pokemon) {
    this.myPokemon = selectedPokemon;
  }
}
