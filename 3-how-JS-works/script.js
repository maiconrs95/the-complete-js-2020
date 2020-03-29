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
 */
