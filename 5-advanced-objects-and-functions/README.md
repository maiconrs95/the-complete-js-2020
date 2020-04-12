# Advanced JavaScript: Objects and Functions

## Everything is an Object: Inhertiance and the Prototype Chain

Podemos definir JavaScript como 2 tipos de dados "importantes", primitivos e objetos.

Dados primitivos são todos aqueles apresentados na seção js-basics. São eles:

- Numbers
- Strings
- Booleans
- Undefined
- Null

E todo o resto são objetos.

- Arrays
- Functions
- Objects
- Dates
- Wrappers for Numbers, String, Booleans...

Todos objeto JavaScript possui uma propriedade ```prototype```, que possibilita a herança em JavaScript.

A propriedade ```prototype``` de um objeto é onde colocamos métodos e propriedades que queremos que outros objetos herdem.

A propriedade ```prototype``` do construtor não é o protótipo do contrutor em sí, mas é o prtótipo de todas as instancias criadas através dele.

Quando um determinado método, ou propriedade, é chamado, a pesquisa começa no próprio objeto e se não puder ser encontrada, a pesquisa será movida para cima no protótipo do objeto. Isso continua até que o método seja encontrado. Essa é a cadeia de protótipos.
