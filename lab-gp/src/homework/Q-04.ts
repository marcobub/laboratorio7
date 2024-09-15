(() => {

  // Función reutilizable para sumar y multiplicar
  function sumAndMultiply(a: number, b: number, c: number): number {
    let sumResult = a + b;
    return sumResult * c;
  }

  // Uso de la función reutilizable
  function calculateOperation1(a: number, b: number, c: number): number {
    return sumAndMultiply(a, b, c);
  }

  function calculateOperation2(x: number, y: number, z: number): number {
    return sumAndMultiply(x, y, z);
  }

  // Función reutilizable para calcular el área
  function calculateArea(type: string, ...args: number[]): number {
    switch (type) {
      case 'rectangle':
        return args[0] * args[1];
      case 'circle':
        return Math.PI * args[0] * args[0];
      default:
        throw new Error('Tipo de área no soportado');
    }
  }

  // Uso de la función reutilizable
  function calculateRectangleArea(length: number, width: number): number {
    return calculateArea('rectangle', length, width);
  }

  function calculateCircleArea(radius: number): number {
    return calculateArea('circle', radius);
  }

  // No es necesario cambiar el tercer ejercicio ya que no hay mucho código repetitivo.
  function validateEmail(email: string): boolean {
    // ...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    // ...some code for validate here
    return false;
  }

})();
