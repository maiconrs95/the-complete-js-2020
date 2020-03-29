/****************************
 * How Our Code is Executed: JavaScript Parses and Engines
 *
 * O Host onde nosso código JS está sendo execudo é interpretado por um Parser, que básicamente verifica a sintaxe
 * do código. Se houver qualquer tipo de erro de sintaxe no código o Parser emite um erro e interrompe a execução do programa.
 *
 * Depois do código ser analisado e interpretado pelo Parser(V8 engine etc), o Parser produz uma estrutura de dados
 * conhecida como Abstract Syntax Tree, que é traduzida em código de máquina(conjunto de instruções que pode ser executada
 * diretamente pelo processador do computador). Após esse processo nosso código é executado.
 *
 *
 *
 * Execution Contexts and the Execution Stack
 *
 * Execution Contexts: Todo código JS precisa ser executado em algum ambiente, e esse é ambiente nós chamamos de Execution Context.
 * O contexto padrão do JS é o Global. Onde todo o código está sendo executado. Global é um objeto do JS que é acessível por todo
 * o código.
 *
 * Execution Stack: Basicamente a pilha de execução que gerencia o JS. Quando chamamos uma função ela é colocada no topo do
 * Execution Stack criando seu próprio contexto e após seu processamento é removida.
 *
 *
 *
 * Execution Contexts in Details: Creation and Executing Phases and Hoisting
 *
 * Execution context object: Um objecto que contém 3 propriedades sendo
 *                              - Variable Object: contém argumentos de funções e variavéis
 *                              - Scope Chain: Contém o objeto de variáveis atuais e também de todos os parentes
 *                              - This
 *
 * A criação de um contexto de execução acontece em duas fases
 * .1 - Creation Phase:
 *      - A) Creation of the Variable Object (VO)
 *      - B) Creation the Scope Chain
 *      - C) Determinate value of the 'this' variable
 *
 * .2 - Execution Phase: O código ta função atual é gerado e executado linha por linha
 *
 * De forma resumida um contexto é criado e armazena todas as variáveis será utilizada enquanto o código é executado.
 *
 *
 *
 * Hosting in Practice
 */

// functions hoisting
calculateAge(1995); // Hosting funciona para funções declaradas, pois as funções são armazenadas no objeto global antes de sua execução.

function calculateAge(year) {
    console.log(2020 - year);
}

// retirement(1995); Hosting não funciona para expreções de função. Pois a função está armazenada em uma variável, que ainda não armazena a função

var retirement = function (year) {
    console.log(65 - (2020 - year));
}

// variables hoisting
console.log(age); // undefined, pois a variável foi declarada, mas ainda não possui valor no contexto global

// Global context
var age = 26

console.log(age); // 26

function foo() {
    // Local context
    console.log(age); // undefined, pois a variável foi declarada, mas ainda não possui valor no contexto de função

    var age = 65;

    console.log(age); // 65
}

foo();



/****************************
 * Scoping and the Scope Chain
 *
 * Lexical Scope: A posição(escopo) onde algo esta no código.
 *                  - O escopo lexico permite que funções filhas tenha acesso a variáveis de funções pai, e assim sucessivamente.
 */

// Lexical Scope
var a = 'Hello!'; // Global Scope
first();

function first() {
    var b = 'Hi!'; // first Scope [V01] + [V0Global]
    second();

    function second() {
        var c = 'Hey!' // second Scope [V02] + [V01] + [V0Global]

        // Acessa as variáveis dos escopos acima.
        console.log(a + b + c);
    }
}



/****************************
 * The 'this' Keyword
 *
 * Regular function: Por padrão variável this aponta para o objeto global.
 * Method call: Em um método o this aponta para o objeto onde o método está anexado.
 *
 * O valor de 'this' só é atribuido no momento em que o método ou função de seu escopo é executado.
 */

console.log('Global this:', this);

var maicon = {
    name: 'Maicon Silva',
    yearOfBirth: 1995,
    calculateAge: function () {
        console.log('Method Call this:', this);
        console.log(2020 - this.yearOfBirth);

        // Regular function inside method
        function innerFunction() {
            console.log('Regular function inside method:', this);
        }

        innerFunction();
    },
};

maicon.calculateAge();

var soraia = {
    name: 'Soraia',
    yearOfBirth: 1974,
};

soraia.calculateAge = maicon.calculateAge;

soraia.calculateAge();
