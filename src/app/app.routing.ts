import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';

import { MapComponent } from './map/map.component';
import { HabitatComponent } from './habitat/habitat.component';
import {HomeComponent} from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'battle',
    component: BattleComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'habitat/:id',
    component: HabitatComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
  ,
  {
    path: 'tutorial',
    component: TutorialComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
