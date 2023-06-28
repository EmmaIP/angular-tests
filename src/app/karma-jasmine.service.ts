import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KarmaJasmineService {

  constructor() { }

  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  dividir(a: number, b: number): number {
    return a / b;
  }


  par(a: number): number {
    return a % 2;
  }

  palindromo(a: any): any {
    return a.split("").reverse().join("");
  }

  factorial(a: number): number {
    var factor = 1;
    for (var i = 1; i <= a; i++) {
      factor *= i;
    }
    return factor;
  }

  maximo(a: number, b: number): number {
    if (a > b) {
      return a;
    }
    else {
      return b;
    }
  }

  cadena(a: any): any {
    return a.toUpperCase();
  }

  primo(a: number): string {
    let numeroPrimo = true;
    for (var i = 2; i < a; i++) {

      if (a % i == 0) {
        numeroPrimo = false;
      }
    }
    if (numeroPrimo == true) {
      let cierto: string = "Es primo";
      return cierto;
    } else {
      let noCierto: string = "No es primo";
      return noCierto;
    }
  }

  positivo(a: number): string {
    if (a > 0) {
      let cierto: string = "Es positivo";
    } else {
      let noCierto: string = "No es positivo";
      return noCierto;
    }
  }
}
