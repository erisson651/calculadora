import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class CalculadoraComponent {

  numero1 = 0;
  numero2 = 0;
  resultado = 0;
  erro = '';

  somar() {
    this.erro = '';
    this.resultado = this.numero1 + this.numero2;
  }

  subtrair() {
    this.erro = '';
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.erro = '';
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    if (this.numero2 === 0) {
      this.erro = 'Não é possível dividir por zero.';
      this.resultado = 0;
      return;
    }
    this.erro = '';
    this.resultado = this.numero1 / this.numero2;
  }
}