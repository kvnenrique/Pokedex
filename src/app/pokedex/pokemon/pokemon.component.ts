import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailsDialogComponent } from '../pokemon-details-dialog/pokemon-details-dialog.component';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Pokemon = {} as Pokemon;
  isSvgImage: boolean = false

  constructor(private matDialog: MatDialog){}

  formatPokemonId(id: number): string {
    return id.toString().padStart(3, '0');
  }

  translatePokemonType(type: string): string {
    return new SharedModule().translatePokemonType(type)
  }

  openPokemonDetailsDialog() {
    this.matDialog.open(PokemonDetailsDialogComponent, {
      data: this.pokemon
    })
  }

  ngOnInit(): void {
    // Comprueba si la imagen es un SVG
    this.isSvgImage = this.pokemon.imageUrl.endsWith('.svg');
  }
}
