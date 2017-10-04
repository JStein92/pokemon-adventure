import { Component, OnInit, Input } from '@angular/core';
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

  @Input() opponent: Pokemon;

  public player: Player;
  public equippedPokemon = [];
  public battlingPokemon: Pokemon;
  public turn = 0;
  public playerAction = null;

  constructor(public pokemonService: PokemonService) {
    this.equippedPokemon = this.pokemonService.getEquippedPokemon();
    this.battlingPokemon = this.equippedPokemon[0];

  }

  ngOnInit() {
  }

  battle(selection: number) {
    this.turn++;

    if (this.opponent.currentHP <= 0) {
      this.battleOver();
    }

    if(this.isPlayerFirstToGo()) {
      this.playerAttack(selection);
      this.opponentAttack(Math.floor(Math.random() * (this.opponent.activeMoves.length)));
    } else {
      this.opponentAttack(Math.floor(Math.random() * (this.opponent.activeMoves.length)));
      this.playerAttack(selection);
    }
  }


  isPlayerFirstToGo() {
    if (this.battlingPokemon.speed >= this.opponent.speed) {
      return true;
    } else {
      return false;
    }
  }

  playerAttack(selection: number) {
    let damageDealt = this.battlingPokemon.attack - this.opponent.defense;
    if (damageDealt <= 0) {
      damageDealt = 1;
    }

    this.opponent.currentHP -= damageDealt;
    if (this.opponent.currentHP <= 0) {
      this.opponent.currentHP = 0;
    }

    console.log(this.battlingPokemon.name + ' used ' + this.battlingPokemon.activeMoves[selection]["name"] + ' and did ' + damageDealt + ' damage to ' + this.opponent.name + '! ' + this.opponent.name + ' has ' + this.opponent.currentHP + ' hp left.');
  }

  opponentAttack(selection) {
    let damageDealt = this.opponent.attack - this.battlingPokemon.defense;
    if (damageDealt <= 0) {
      damageDealt = 1;
    }

    this.battlingPokemon.currentHP -= damageDealt;
    if (this.battlingPokemon.currentHP <= 0) {
      this.battlingPokemon.currentHP = 0;
    }

    console.log(this.opponent.name + ' used ' + this.opponent.activeMoves[selection]["name"] + ' and did ' + damageDealt + ' damage to ' + this.battlingPokemon.name + '! ' + this.battlingPokemon.name + ' has ' + this.battlingPokemon.currentHP + ' hp left.');
  }

  battleOver() {

  }



  // battle() {
  //   this.turn++;
  //   console.log("TURN: " + this.turn);
  //
  //   if (this.myPokemon.speed > this.opponent.speed) {
  //     if (this.playerTurn()) {
  //       if (this.opponentTurn()) {
  //         this.battle();
  //       } else {
  //         console.log("Your pokemon has died!");
  //         // Check if all pokemon are dead, if not, swap one in, else end battle
  //       }
  //     } else {
  //       // If the player pokemon dies before he takes his turn, exit that turn
  //       if (this.opponentTurn()) {
  //         if (this.playerTurn()) {
  //           this.battle();
  //         }
  //       } else {
  //         if (this.checkAllActivePokemonUnconscious()) {
  //           console.log("All your pokemon are dead!");
  //         } else {
  //           //swap in live pokemon
  //           this.battle();
  //         }
  //       }
  //     }
  //   }
  // }
  //
  // playerTurn() {
  //
  //   if (this.playerAction === null) {
  //     alert("Select a move.");
  //   } else {
  //     let damageDealt = this.myPokemon.attack - this.opponent.defense;
  //     if (damageDealt <= 0) {
  //       damageDealt = 1;
  //     }
  //     this.opponent.currentHP -= damageDealt;
  //     console.log(this.myPokemon.name + ' and did ' + damageDealt + ' damage to ' + this.opponent.name + '! ' + this.opponent.name + ' has ' + this.opponent.currentHP + ' left.');
  //     if(this.opponent.currentHP <= 0) {
  //       this.opponent.currentHP = 0;
  //       this.playerAction = null;
  //       return false;
  //     } else {
  //       this.playerAction = null;
  //       return true;
  //     }
  //   }
  // }
  //
  //
  //
  // opponentTurn() {
  //   let damageDealt = this.opponent.attack - this.myPokemon.defense;
  //   if (damageDealt <= 0) {
  //     damageDealt = 1;
  //   }
  //   this.myPokemon.currentHP -= damageDealt;
  //   console.log(this.opponent.name + ' did ' + damageDealt + ' damage to ' + this.myPokemon.name + '! ' + this.myPokemon.name + ' has ' + this.myPokemon.currentHP + ' left.');
  //   // If pokemon dies, set hp to 0 and check to see if player has more pokemon
  //   if(this.myPokemon.currentHP <= 0) {
  //     this.myPokemon.currentHP = 0;
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  //
  // checkAllActivePokemonUnconscious() {
  //   let unconsciousCount = 0;
  //   this.player.activePokemon.forEach(function(pokemon) {
  //     if(pokemon.currentHP <= 0) {
  //       unconsciousCount++;
  //     } else {
  //       return false;
  //     }
  //   });
  //   if (unconsciousCount === this.player.activePokemon.length) {
  //     return true;
  //   }
  // }
  //
  // move(selection: number) {
  //   this.playerAction = selection;
  //   console.log(this.myPokemon.activeMoves[selection]);
  // }
  //
  //
  //
  //
  // flee() {
  // }
  //
  // catchPokemon() {
  //   if (this.player.activePokemon.length < 6) {
  //     this.player.activePokemon.push(this.opponent);
  //   } else {
  //     this.player.inactivePokemon.push(this.opponent);
  //   }
  // }
  //
  // switchPokemon(selectedPokemon: Pokemon) {
  //   this.myPokemon = selectedPokemon;
}
