## SOLID
SOLID es un acrónimo que representa cinco principios de diseño orientados a objetos. Estos principios fueron introducidos por Robert C. Martin, también conocido como "Uncle Bob", y están destinados a hacer que el software sea más comprensible, flexible y mantenible. Los principios SOLID son:

S - Single Responsibility Principle (SRP)
O - Open/Closed Principle (OCP)
L - Liskov Substitution Principle (LSP)
I - Interface Segregation Principle (ISP)
D - Dependency Inversion Principle (DIP)
1. Single Responsibility Principle (SRP)
Una clase debe tener una, y solo una, razón para cambiar. En otras palabras, una clase debe tener una única responsabilidad o propósito.
2. Open/Closed Principle (OCP)
Las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación. Esto significa que debe ser posible añadir nuevas funcionalidades sin cambiar el código existente.
3. Liskov Substitution Principle (LSP)
Los objetos de una clase derivada deben ser reemplazables por objetos de la clase base sin alterar el correcto funcionamiento del programa. Esto garantiza que una subclase pueda usarse en lugar de su clase base.
4. Interface Segregation Principle (ISP)
Una clase no debe estar obligada a implementar interfaces que no utiliza. Es mejor tener interfaces específicas y pequeñas que interfaces grandes y generales.
5. Dependency Inversion Principle (DIP)
Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones.