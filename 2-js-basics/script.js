/****************************
 * Variaveis e Data Types
 *
 * Variaveis: São espaço em memória usado para armazenar um valor
 */

var age = 28;
var name = 'Maicon Silva';
var fullAge = true;
var job;



/****************************
 * Primitive JavaScript Data Types
 *
 * Number: Floating point numbers, for decimals and integers
 * String: Sequence of Characteres, used for text
 * Boolean: Logical data type that can only be `true` or `false`
 * Undefined: Data Types of a variable that does not hava a value yet
 * Null: Also means `non-existent`
 *
 * Não podemos usar caracteres especiais para nomes de variáveis, e também não podemos usar palavras reservadas pela lingagem
 * como `function`.
 */
console.log('number: ', age);
console.log('string: ', name);
console.log('boolena: ', fullAge);
console.log('undefined: ', job);
// console.log('null', x);



/****************************
 * Variable Mutation and Type Coercion
 *
 * A correção de tipo acontece quando concatenamos uma variavel do tipo string com number. O JS
 * faz a correçã, transformando o número em string.
 *
 * Mutação de Variável acontece quando mudamos o valor de uma variavel. JS não é uma linguagem de tipagem forte, o que facilita
 * esse processo.
 */

// Type Coercion age(number) to string
console.log('Type Coercion: ', name + ' ' + age);

// Variable Mutation
age = 24;
job = prompt('What is ' + name + '`s job?');

console.log('Variable Mutation: ', 'Age: ' + age + ', Job: ' + job);



/****************************
 * Basic operators
 *
 * Operadores Matemáticos: São operadores matemáticos que podemos usar no JS, como +, -, *, % etc
 * Opeardores Lógicos: São operadores usados basicamente para validar alguma lógica no código, como >, <, ==, ===, ! etc
 * Operador typeof: São operadores que verificam se uma varivel é do tipo x de dado, como number, string etc
 */

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



/****************************
 * Operator precedence
 *
 * Precedência de Operador: Determina a ordem em que eles são aplicados quando uma expressão é avaliada.
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 *
 * Quando o JS interpreta uma linha, ele avalia quais operadores serão interpretados antes.
 * Ex: var n = 10 - 9 * 21;
 *
 * O operador de atribuição "-" será interpretado antes de "*" e "=" etc;
 *
 * Em alguns momentos é necessário o uso de parênteses para manipularmos a precedência dos operadores.
 */

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

// Isso acontece, pois o JS irá interpretar os operadores por ordem de precedência seguindo a tabela da mozzila no link acima.
// O agrupamento será executado antes dos operadores matemáticos e depois a atribuição, sendo z = 26, y = z e x = y, que também é 26
console.log('Multiple assignments: ', x, y, z);

// More operators
console.log('More operators: ', x += 10, x *= 2, x -= 5, x++, x--);



/****************************
 * If / else statements
 *
 * Estrutura que permite tomar "decisões" usando JS. O If / veririca se um valor atende a uma determinada condição,
 * caso veradeiro executa um trecho de código x, caso false executa o trecho y.
 */

var firtsName = 'Maicon';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log('If: ', firtsName + ' is married.');
} else {
    console.log('Else: ', firtsName + ' is not married.');
}



/****************************
 * Boolean Logic
 *
 * https://en.wikipedia.org/wiki/Truth_table
 *
 * Seguinte a "tablea da verdade", temos alguns operadores lógicos que podem ser usados para validação
 * Ex: !, ||, ==, && etc
 */

var lastName = 'Silva';

if (firtsName === 'Maicon' && civilStatus === 'single') {
    console.log('Boolean Logic: ', true);
}



/****************************
 * The Ternary Operator and Switch Statements
 *
 * Operador ternário: É basicamente o if de uma linha, onde verifica alguma condição e executa a instrução
 * ex: firtsName === 'Maicon' ? console.log(true) : console.log(false)
 *
 * Switch: Valida uma serie de condições para decidir qual bloco de código será executado, podendo ter um default
 */

// Ternary Operator
var isMaicon = firtsName === 'Maicon' ? true : false;

console.log('Ternary Operator', isMaicon);

// Swtich Statements
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



/****************************
 * Truthy and Falsy Values and Equality Operators
 *
 * Truthy values: NOT falsy values
 * Falsy values: undefined, null, 0, '', NaN
 *
 * Equality Operators: Valida uma condição de igualdade. Em JS podemos usar "==" para verificar se os valores são
 * iguais ou "===" para validar se os valoes e tipos são iguais
 */

// Truthy and Falsy
console.log('Truthy values: ', Boolean(ageMaicon), Boolean('Hit'), Boolean(10), Boolean(true));
console.log('Falsy values: ', Boolean(undefined), Boolean(null), Boolean(0), Boolean(''), Boolean(NaN));

// Equality Operators
console.log('Equality Operators: ', 20 == '20');
console.log('Equality Operators: ', 20 === '20');
console.log('Equality Operators: ', 20 === 20);



/****************************
 * Functions
 *
 * Funções são como um container que armazenam um trecho de código. Também recebem e argumento e podem retornar
 * um valor.
 */

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



/****************************
 * Function Statements and Expressions
 *
 * É basicamente "outras maneiras" de se criar uma função em JS
 */

var sum = function (a, b) {
    return a + b;
}

console.log('Function Statements: ', sum(1, 2));



/****************************
 * Arrays
 *
 * Armazena uma coleção de dados. O array é capaz de armazenar dados simples como números e string, mas também pode armazena objetos
 * complexos.
 *
 * Arrays possuem métodos e propriedades de manipulação.
 * Ex: para ver o tamanho de um array "array.length"
 *
 * O primeiro item do array é sempre 0, e podemos acessa-lo da seguinte maneira:
 *
 * array[0] // primeiro item
 * array[1] // segundo item
 *
 * Também podemos adicionar e remover items de array através de métodos como pop, push, shift, unshift, indexOf etc
 *
 * array.push('Add this item')
 */

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



/****************************
 * Objects and Properties
 *
 * Um objeto é composto por chave-valor, podendo ser aninhado e armazenar diferentes tipos de dados.
 */

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


/*****************************
 * Objects and methods
 *
 * Podemos armazenar métodos nas propriedades de um objeto.
 */

var maiconObj2 = {
    birthYear: 1995,
    calcAge: function () {
        return 2020 - this.birthYear;
    }
};

console.log('Objects and methods: ', maiconObj2.calcAge());


