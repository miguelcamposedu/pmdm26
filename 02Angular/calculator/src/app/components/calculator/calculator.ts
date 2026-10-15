import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculator',
  styleUrl: './calculator.css',
  templateUrl: './calculator.html',
})
export class Calculator {


  screen = '0';
  operando1 = 0;
  operando2 = 0;

  escribirNumero1() {
    if(this.screen == '0') {
   this.screen = '1';
    } else {
      this.screen = this.screen + '1';
    }
  }

  escribirNumero2() {
    if(this.screen == '0') {
   this.screen = '2';
    } else {
      this.screen = this.screen + '2';
    }  
  }

  sumar() {
    // Concatenar el simbolo + al operando que hay en screen.
    this.screen += '+';
  }

  resultado() {
    this.operando1 = Number(this.screen.split("+")[0]);
    this.operando2 = Number(this.screen.split("+")[1]);
    let resultadoSuma = this.operando1 + this.operando2;
    this.screen = resultadoSuma.toString();
}


  
}
