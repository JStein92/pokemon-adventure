import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePokemonComponent } from './active-pokemon.component';

describe('ActivePokemonComponent', () => {
  let component: ActivePokemonComponent;
  let fixture: ComponentFixture<ActivePokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivePokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
