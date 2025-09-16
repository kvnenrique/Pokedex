import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLoadingAnimationComponent } from './pokemon-loading-animation.component';

describe('PokemonLoadingAnimationComponent', () => {
  let component: PokemonLoadingAnimationComponent;
  let fixture: ComponentFixture<PokemonLoadingAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonLoadingAnimationComponent]
    });
    fixture = TestBed.createComponent(PokemonLoadingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
