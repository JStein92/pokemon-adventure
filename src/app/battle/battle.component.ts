import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';
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
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
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
          animate(".7s 0s ease", keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(5px)',  offset: 0.99}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ]))
        ]),
      ]),
      trigger('flyInFromRightSide', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          animate("0s 0s", keyframes([
            style({opacity: 0, transform: 'translateX(100%)', offset: 0}),
          ])),
          animate(".7s 1s ease", keyframes([
            style({opacity: 0, transform: 'translateX(100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(5px)',  offset: 0.99}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ]))
        ]),
      ])
    ]
})
export class BattleComponent implements OnInit {

  @Input() opponent: Pokemon;

  public player: Player;
  public equippedPokemon = [];
  public battlingPokemon: Pokemon;
  public turn = 0;
  public playerAction = null;
  public battleWon: boolean;
  public battling: boolean;

  constructor(public pokemonService: PokemonService) {
    this.equippedPokemon = this.pokemonService.getEquippedPokemon();
    this.battlingPokemon = this.equippedPokemon[0];
    this.battling = true;
    this.battleWon = null;
  }

  ngOnInit() {
  }

  battle(selection: number) {
    this.turn++;

    if(this.isPlayerFirstToGo()) {
      this.playerAttack(selection);
      if(this.opponent.currentHP > 0) {
        this.opponentAttack(Math.floor(Math.random() * (this.opponent.activeMoves.length)));
        if(this.battlingPokemon.currentHP <= 0) {
          if (this.checkAllEquippedPokemonUnconscious()) {
            // the false argument denotes that the player lost
            this.battleOver(false);
          } else {
            alert(this.battlingPokemon.name + ' has fainted! Pick a new pokemon to battle!');
          }
        }
      } else {
        // the true argument denotes that the player won
        this.battleOver(true);
      }


    } else {
      this.opponentAttack(Math.floor(Math.random() * (this.opponent.activeMoves.length)));
      if(this.battlingPokemon.currentHP > 0) {
        this.playerAttack(selection);
        if(this.opponent.currentHP <= 0) {
          this.battleOver(true);
        }
      } else {
        if (this.checkAllEquippedPokemonUnconscious()) {
          this.battleOver(false);
        } else {
          alert(this.battlingPokemon.name + ' has fainted! Pick a new pokemon to battle!');
        }
      }
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

  switchPokemon(pokemonToSwitch: Pokemon) {
    if (pokemonToSwitch.currentHP > 0) {
      this.battlingPokemon = pokemonToSwitch;
    } else {
      alert(pokemonToSwitch.name + ' has already fainted!');
    }

  }

  battleOver(victor: boolean) {
    this.battling = false;
    if(victor) {
      this.battleWon = true;
    } else {
      this.battleWon = false;
    }
  }

  checkAllEquippedPokemonUnconscious() {
    let unconsciousCount = 0;
    this.equippedPokemon.forEach(function(pokemon) {
      if(pokemon.currentHP <= 0) {
        unconsciousCount++;
      } else {
        return false;
      }
    });
    if (unconsciousCount === this.equippedPokemon.length) {
      return true;
    }
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
  //         if (this.checkAllEquippedPokemonUnconscious()) {
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
