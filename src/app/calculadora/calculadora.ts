import { Component } from '@angular/core';

export class CalculadoraComponent {

  numero1 = 0;
  
  numero2 = 0;
  
  resultado = 0;
  
  }

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {}
