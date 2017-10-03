import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GetPokemonComponent } from './get-pokemon/get-pokemon.component';
import { BattleComponent } from './battle/battle.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { MapComponent } from './map/map.component';
import { MyPokemonComponent } from './my-pokemon/my-pokemon.component';
import { HabitatComponent } from './habitat/habitat.component';
import { ActivePokemonComponent } from './active-pokemon/active-pokemon.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};
@NgModule({
  declarations: [
    AppComponent,
    GetPokemonComponent,
    BattleComponent,
    MapComponent,
    MyPokemonComponent,
    HabitatComponent,
    ActivePokemonComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    HttpModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
