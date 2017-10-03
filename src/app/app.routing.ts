import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { GetPokemonComponent } from './get-pokemon/get-pokemon.component';

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
    path: 'getPokeman',
    component: GetPokemonComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
