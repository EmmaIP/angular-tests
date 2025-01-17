import { TestBed } from '@angular/core/testing';
import { KarmaJasmineService } from './karma-jasmine.service';

describe('KarmaJasmineService', () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería sumar dos números correctamente', () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });

  it('debería restar dos números correctamente', () => {
    const resultado = service.restar(3, 2);
    expect(resultado).toBe(1);
  });

  it('debería restar números negativos correctamente', () => {
    const resultado = service.restar(-5, -3);
    expect(resultado).toBe(-2);
  });

  it('debería restar un número positivo y un número negativo correctamente', () => {
    const resultado = service.restar(-5, 10);
    expect(resultado).toBe(-15);
  });


  it('debería multiplicar dos números correctamente', () => {
    const resultado = service.multiplicar(3, 2);
    expect(resultado).toBe(6);
  });

  it('debería multiplicar números negativos correctamente', () => {
    const resultado = service.multiplicar(-5, -3);
    expect(resultado).toBe(15);
  });

  it('debería multiplicar un número positivo y un número negativo correctamente', () => {
    const resultado = service.multiplicar(-5, 10);
    expect(resultado).toBe(-50);
  });

  it('debería dividir dos números correctamente', () => {
    const resultado = service.dividir(4, 2);
    expect(resultado).toBe(2);
  });

  it('debería dividir números negativos correctamente', () => {
    const resultado = service.dividir(-12, -3);
    expect(resultado).toBe(4);
  });

  it('debería dividir un número positivo y un número negativo correctamente', () => {
    const resultado = service.dividir(-10, 5);
    expect(resultado).toBe(-2);
  });

  it('debería indicar si el número es par', () => {
    const resultado = service.par(8);
    expect(resultado).toBe(0);
  })

  it('debería comprobar que es un palíndromo', () => {
    const resultado = service.palindromo("reconocer");
    expect(resultado).toEqual("reconocer");
  })

  it('debería calcular el factorial del número', () => {
    const resultado = service.factorial(5);
    expect(resultado).toBe(120);
  })

  it('debería obtener el número máximo', () => {
    const resultado = service.maximo(5, 8);
    expect(resultado).toBe(8);
  })

  it('debería cambiar a mayúsculas', () => {
    const resultado = service.cadena("estoy llegando");
    expect(resultado).toEqual("ESTOY LLEGANDO");
  })

  it('debería comprobar si es primo o no', () => {
    const resultado = service.primo(7);
    expect(resultado).toBe("Es primo");
  })

  it('debería comprobar si es positivo o no', () => {
    const resultado = service.positivo(-7);
    expect(resultado).toBe("No es positivo");
  })

  it('debería calcular el número de elementos', () => {
    const resultado = service.array(["hola", "mundo"]);
    expect(resultado).toBe(2);
  })

  it('debería verificar si contiene un substring', () => {
    const resultado = service.substring(["perro", "gato", "pez"], "pez");
    expect(resultado).toBe("Sí contiene");
  })

  it('debería comprobar si es primo o no', () => {
    const resultado = service.primo(8);
    expect(resultado).toBe("No es primo");
  })

  it('verifcar que es positivo o no', () => {
    const resultado = service.positivo2(6);
    expect(resultado).toBe(true);
  })

  it('debería comprobar el promedio', () => {
    const resultado = service.promedio([5, 3, 4]);
    expect(resultado).toBe(4);
  })

  it('debería comprobar que pasa una cadena a array', () => {
    const resultado = service.cadenaArray("hola");
    expect(resultado).toEqual(["h", "o", "l", "a"]);
  })

  it('debería sumar los dígitos', () => {
    const resultado = service.sumaDigitos("123");
    expect(resultado).toBe(6);
  })

  it('debería verificar si es un anagrama', () => {
    const resultado = service.anagrama("sergio", "riesgo");
    expect(resultado).toBe(true);
  })

  it('debería comprobar el aréa de un polígono', () => {
    const resultado = service.areaPoligono(5, 3, 4);
    expect(resultado).toBe(30);
  })

  it('debería encontrar la moda', () => {
    const resultado = service.moda([5, 3, 4, 3, 4, 4, 4]);
    expect(resultado).toBe(4);
  })

  it('debería encontrar el duplicado', () => {
    const resultado = service.duplicado([5, 3, 4, 6, 4, 4, 4]);
    expect(resultado).toEqual([4, 4, 4]);
  })

});
