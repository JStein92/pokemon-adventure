import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [PokemonService]
})

export class MapComponent implements OnInit {
  habitats = null;
  needHealing = false;

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getHabitats().subscribe(habitats => {
      this.habitats = (habitats);
      //console.log(this.habitats)
    })

    this.pokemonService.playSong("../assets/music/map.mp3");
  }
healedPokemon(){
  this.needHealing=false;

}
  stopSong(){
    this.pokemonService.stopSong();
  }

  goToHabitat(clickedHabitat) {
    this.needHealing=false;
    let allowed = false;
    this.pokemonService.stopSong();
    this.pokemonService.getEquippedPokemon().forEach(function(pokemon){
      if (pokemon.currentHP>0){
        allowed=true;
      }
    });

    if (allowed){
      this.router.navigate(['habitat', clickedHabitat.id]);

    } else{
      this.needHealing=true;
    }

  }
}
