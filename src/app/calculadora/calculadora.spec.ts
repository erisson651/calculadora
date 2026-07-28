import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});