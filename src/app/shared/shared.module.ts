import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { 
  translatePokemonType(type: string): string {
    const typeMap: Record<string, string> = {
      normal: "normal",
      fire: "fuego",
      water: "agua",
      grass: "planta",
      electric: "eléctrico",
      ice: "hielo",
      fighting: "lucha",
      poison: "veneno",
      ground: "tierra",
      flying: "volador",
      psychic: "psíquico",
      bug: "bicho",
      rock: "roca",
      ghost: "fantasma",
      dragon: "dragón",
      dark: "siniestro",
      steel: "acero",
      fairy: "hada"
    };
  
    // normalize input (lowercase, trim)
    const key = type.toLowerCase().trim();
  
    // return translation if found, otherwise fallback to original
    return typeMap[key] ?? type;
  }
}
