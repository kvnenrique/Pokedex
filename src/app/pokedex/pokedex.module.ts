import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex.routes';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { SharedModule } from '@shared/shared.module';
import { PokemonLoadingAnimationComponent } from './pokemon-loading-animation/pokemon-loading-animation.component';
import { PokemonDetailsDialogComponent } from './pokemon-details-dialog/pokemon-details-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatTabsModule } from '@angular/material/tabs'


@NgModule({
  declarations: [
    PokedexPageComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonLoadingAnimationComponent,
    PokemonDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule
  ]
})
export class PokedexModule { }
