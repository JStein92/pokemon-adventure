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

  public playerLog: string;
  public opponentLog: string;
  public player: Player;
  public equippedPokemon = [];
  public battlingPokemon: Pokemon;
  public turn = 0;
  public playerAction = null;
  public battleWon: boolean;
  public battling: boolean;

  constructor(public pokemonService: PokemonService) {
    this.equippedPokemon = this.pokemonService.getEquippedPokemon();

    this.battling = true;
    this.battleWon = null;
    this.battlingPokemon = this.equippedPokemon[0];

    if(this.checkAllEquippedPokemonUnconscious()) {
      this.battlingPokemon = this.equippedPokemon[0];
      this.battling = false;
      this.battleWon = false;
    } else {
      for (let i = 0; i < this.equippedPokemon.length; i++) {
        if (this.equippedPokemon[i].currentHP > 0) {
          this.battlingPokemon = this.equippedPokemon[i];
          break;
        }
      }
    }
  }

  ngOnInit() {
  }

  battle(selection: number) {
    this.turn++;
    console.log("number of equipped pokemon: " + this.equippedPokemon.length);
    // this.equippedPokemon = this.pokemonService.getEquippedPokemon();

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

    this.playerLog = this.battlingPokemon.name + ' used ' + this.battlingPokemon.activeMoves[selection]["name"] + ' and did ' + damageDealt + ' damage to ' + this.opponent.name + '!';
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

    this.pokemonService.updateStats(this.battlingPokemon);
    this.equippedPokemon = this.pokemonService.getEquippedPokemon();

    this.opponentLog = this.opponent.name + ' used ' + this.opponent.activeMoves[selection]["name"] + ' and did ' + damageDealt + ' damage to ' + this.battlingPokemon.name + '!';
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
      this.battlingPokemon.currentLevelXP += this.opponent.level * 5
      this.pokemonService.updateXP(this.battlingPokemon);
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

  catchPokemon() {
    // if(this.opponent.currentHP < (this.opponent.maxHP / 4)) {
    //
    // }
    if (this.equippedPokemon.length < 6) {
      this.opponent.equipped = true;
      this.pokemonService.catchPokemon(this.opponent);
    } else {
      this.pokemonService.catchPokemon(this.opponent);
    }
    this.battleOver(true);
  }

}
