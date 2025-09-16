import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-pokemon-details-dialog',
  templateUrl: './pokemon-details-dialog.component.html',
  styleUrls: ['./pokemon-details-dialog.component.scss']
})
export class PokemonDetailsDialogComponent implements OnInit {
  isSvgImage: boolean = false

  constructor(
    @Inject(MAT_DIALOG_DATA) public pokemon: Pokemon, 
    private matDialogRef: MatDialogRef<PokemonDetailsDialogComponent>
  ) {}

  ngOnInit(): void {
    // Comprueba si la imagen es un SVG
    this.isSvgImage = this.pokemon.imageUrl.endsWith('.svg');
  }

  formatPokemonId(id: number): string {
    return id.toString().padStart(3, '0');
  }

  translatePokemonType(type: string): string {
    return new SharedModule().translatePokemonType(type)
  }

  close() {
    this.matDialogRef.close()
  }
}
