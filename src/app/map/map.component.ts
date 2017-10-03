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

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getHabitats().subscribe(habitats => {
      this.habitats = (habitats);
      //console.log(this.habitats)
    })
  }

  goToHabitat(clickedHabitat) {
    this.router.navigate(['habitat', clickedHabitat.id])
  }
}
