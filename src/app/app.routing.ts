import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { GetPokemonComponent } from './get-pokemon/get-pokemon.component';
import { MapComponent } from './map/map.component';
import { HabitatComponent } from './habitat/habitat.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'battle',
    component: BattleComponent
  },
  {
    path: 'getPokemon',
    component: GetPokemonComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'habitat/:id',
    component: HabitatComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
