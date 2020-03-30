## Variáveis e Data Types

Básicamente, [variávies](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Vari%C3%A1veis) são espaço em memória(do computador) utilizado para armazenar valores.

```javascript
var age = 24;
var name = 'Maicon Silva';
var fullAge = true;
var job;
```

## Primitive JavaScript Data Types

Todas as linguagens de programação têm sua própria [estrutura de dados](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures) embutida, mas essa estrutura frequentemente difere uma da outra.

Em JavaScript temos os seguintes dados embutidos de forma primitiva na linguagem, isso quer dizer que é nativo do próprio JavaScript.

* Number: Floating point numbers, for decimals and integers
* String: Sequence of Characteres, used for text
* Boolean: Logical data type that can only be `true` or `false`
* Undefined: Data Types of a variable that does not hava a value yet
* Null: Also means `non-existent`

## Variable Mutation and Type Coercion

JavaScript é uma linguagem de tipagem dinâmica. Isso significa que você não necessita declarar o tipo de uma variável antes de sua atribuição. O tipo será automaticamente determinado quando o programa for processado. Isso também significa que você pode reatribuir uma mesma variável com um tipo diferente:

```javascript
var foo = 42;    // foo é um Number agora
foo     = "bar"; // foo é um String agora
foo     = true;  // foo é um Boolean agora
```

Mutação de Variável acontece quando mudamos o valor de uma variavel. JS não é uma linguagem de tipagem forte, o que facilita esse processo.

A correção de tipo acontece quando concatenamos uma variavel do tipo string com number. O JS faz a correçã, transformando o número em string.


## Basic operators

Operadores Matemáticos: São operadores matemáticos que podemos usar no JS, como +, -, *, % etc

Opeardores Lógicos: São operadores usados basicamente para validar alguma lógica no código, como >, <, ==, ===, ! etc

Operador typeof: São operadores que verificam se uma varivel é do tipo x de dado, como number, string etc

```javascript
var now = 2020;
var ageMaicon = 24;
var ageJac = 25;

var yearMaicon = now - ageMaicon;
var yearJac = now - ageJac;

var maiconOlder = ageMaicon > ageJac;

console.log('Maicon Year: ', yearMaicon);
console.log('Jac Year: ', yearJac);
console.log('Logical Operator: ', maiconOlder);
console.log('typeof Operator: ', typeof ageMaicon);
```

[Aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators) você pode ver a lista completa de operadores do JavaScript.


## Operator precedence

A [Precedência do Operador](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) determina a ordem em que eles são aplicados quando uma expressão é avaliada.

Quando o JS interpreta uma linha, ele avalia quais operadores serão interpretados antes.

```javascript
var n = 10 - 9 * 21;
```

O operador matemático "-" será interpretado antes de "*" e "=" etc;

Em alguns momentos é necessário o uso de parênteses para manipularmos a precedência dos operadores.

```javascript

var fullAge = 18;

// Multiple operators
var isFullAge = now - yearMaicon >= fullAge;

console.log('Multiple operators: ', isFullAge);

// Grouping
var avarage = (ageMaicon + ageJac) / 2;

console.log('Avarage: ', avarage);

// Multiple assignments
var x, y, z;

x = y = z = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26

// Isso acontece, pois o JS irá interpretar os operadores por ordem de precedência seguindo a tabela da mozila no link acima.
// O agrupamento será executado antes dos operadores matemáticos e depois a atribuição, sendo z = 26, y = z e x = y, que também é 26
console.log('Multiple assignments: ', x, y, z);

// More operators
console.log('More operators: ', x += 10, x *= 2, x -= 5, x++, x--);
```

## If / else statements

Uma [expressão](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else) que pode ser avaliada como verdadeira (true) ou falsa (false), veja lógica de programação para entender melhor.

```javascript
var firtsName = 'Maicon';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log('If: ', firtsName + ' is married.');
} else {
    console.log('Else: ', firtsName + ' is not married.');
}
```

## Boolean Logic

Seguindo a "tablea da verdade", temos alguns [operadores lógicos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) que podem ser usados para validação de lógica como !, ||, ==, &&, etc.

```javascript
var lastName = 'Silva';
var civilStatus = 'single';

if (firtsName === 'Maicon' && civilStatus === 'single') {
    console.log('Boolean Logic: ', true);
}
```

## The Ternary Operator and Switch Statements

Podemos resumir o [operador ternário](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Condicional) como o ```if``` de uma linha, onde é verificado alguma condição e depois executado a instrução.

```javascript
var isMaicon = firtsName === 'Maicon' ? true : false;

console.log('Ternary Operator', isMaicon);
```

Já o operador [switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch) avalia uma série de condições para decidir qual bloco de código será executado, podendo ter um default.

```javascript
var job = 'programmer';

switch (job) {
    case 'programmer':
        console.log(firtsName + ' write code');
        break;

    default:
        console.log('Sorry, this is default');
}

switch (true) {
    case ageMaicon > fullAge:
        console.log('Maicon is full age');
        break;

    default:
        console.log('Not is full age.');
}
```

## Truthy and Falsy Values and Equality Operators

Quando o JS avalia uma expressão, ele entende alguns tipos de dados como [verdadeiro](https://developer.mozilla.org/pt-BR/docs/Glossario/Truthy) e outros como [falso](https://developer.mozilla.org/pt-BR/docs/Glossario/Falsy). Podemos resumir da seguinte forma:

```javascript
// Truthy values: NOT falsy values
// Falsy values: undefined, null, 0, '', NaN

console.log('Truthy values: ', Boolean(ageMaicon), Boolean('Hit'), Boolean(10), Boolean(true));
console.log('Falsy values: ', Boolean(undefined), Boolean(null), Boolean(0), Boolean(''), Boolean(NaN));
```

O JavaScript possui comparações estritas e conversão de tipos. Uma comparação estrita  '===' somente é verdade se os operandos forem do mesmo tipo e de conteúdo correspondente. A comparação abstrata mais comumente utilizada '==' converte os operandos no mesmo tipo antes da comparação. Para comparações abstratas relacionais (e.g., <=), os operandos são primeiro convertidos em primitivos, depois para o mesmo tipo, depois comparados.

```javascript
console.log('Equality Operators: ', 20 == '20') // true;
console.log('Equality Operators: ', 20 === '20') // false;
console.log('Equality Operators: ', 20 === 20) // true;
```

## Functions

[Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function) são como um container que armazenam um trecho de código. Também recebem e argumento e podem retornar
um valor.


```javascript
function calculateAge(birthYear) {
    return now - birthYear;
}

console.log('Functions: ', calculateAge(1995));

function yearsUntilRetirement(year, firtsName) {
    var age = calculateAge(year);
    var retirment = 65 - age;

    if (retirment > 0) {
        console.log(firtsName + 'retires in ' + retirment + ' years');
    } else {
        console.log(firtsName + ' is alread retired.');
    }
}

yearsUntilRetirement(1995, 'Maicon Silva');
```

## Function Statements and Expressions

É basicamente "outras maneiras" de se criar uma função em JS.

```javascript
var sum = function (a, b) {
    return a + b;
}

console.log('Function Statements: ', sum(1, 2));
```

## Arrays

O Objeto [Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) é capaz de armazenar uma
coleção de dados. Funciona como uma lista.

Arrays possuem métodos e propriedades de manipulação como ```array.length```.

O primeiro item do array é sempre 0, e podemos acessa-lo da seguinte maneira:

```javascript
array[0] // primeiro item
array[1] // segundo item
```

Também podemos adicionar e remover items de array através de métodos como pop, push, shift, unshift, indexOf, etc.

```javascript
// Initialize new array
var array = [1, 2, 3, 'Maicon', 'Jac', 'Soraia'];
var array2 = new Array(4, 5, 6, 'Celso', 'Luana', 'Vitória');

console.log('Initialize new array: ', array, array2, array[0], array2[1]);

// Mutate array data
array[1] = 10;
array2[4] = 'New string';

console.log('Mutate array data: ', array, array2);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');

console.log(john);

john.pop();
john.pop();
john.shift();

console.log(john);
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';

console.log(isDesigner);
```

## Objects and Properties

Um [Objeto](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object) é composto por chave-valor, podendo ser aninhado e armazenar diferentes tipos de dados.

```javascript
// Literal object
// var maiconObj = new Object();
var maiconObj = {
    firtsName: 'Maicon',
    age: 25,
    family: ['Soraia', 'Celso', 'Luana', 'Vitória'],
    job: 'Programmer',
    isMarried: false,
};

console.log('Object: ', maiconObj);
console.log('Objects and Properties: ', maiconObj.firtsName, maiconObj['age'], maiconObj.family[0]);
```

## Objects and

Também podemos armazenar métodos nas propriedades de um objeto.

```javascript
var maiconObj2 = {
    birthYear: 1995,
    calcAge: function () {
        return 2020 - this.birthYear;
    }
};

console.log('Objects and methods: ', maiconObj2.calcAge());
```
