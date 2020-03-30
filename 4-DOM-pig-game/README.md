## DOM: Document Object Model

O [DOM](https://developer.mozilla.org/pt-BR/docs/DOM) é uma API para documentos HTML e XML. Ele fornece uma representação estrutural do documento, permitindo modificar o conteúdo e a apresentação visual usando uma linguagem de script como JavaScript.


## DOM, primeiro acesso e manipulação

O objeto que nos permite acessar o DOM através do JS é o [document](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector). Nele temos vários métodos importantes para manipular qualquer atributo dos elementos na tela como textos, classes, etc.

Um exemplo é o querySelector que retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.

Para alterar o texto de um elemento:

```javascript
// Retorna o primeiro elemento de id score-0 encontrado no DOM. Para selecionar um elemento pela classe usamos o prfixo '.', e também podemos selecionar um elemento por tag, exemplo document.querySelector('body')
var el = document.querySelector('#score-0');

// SETTER: Adiciona o text content 10 no elemento selecionado acima
el.textContent = 10;

console.log(el.textContent) // GETTER: retorna 10, o valor do text content do elemento em questão;
```

Existem muitos outros métodos para manipulação do DOM no JS, como o ```el.innerHTML``` que nos permite alterar o HTML de um elemento.

```javascript
var name = 'Maicon';

document.querySelector('#score-0').innerHTML = '<p>' + name + '</p>'; // Add <p>Maicon</p> to element
```

## Event and Event Handling

[Eventos](https://developer.mozilla.org/pt-BR/docs/Web/API/EventListener) são como notificações enviadas pelo navegador para informar o código que algo aconteceu. Podemos usar os Event Listenings para codificar respostas(funções) a determinados eventos, como ao clicar em algo mostrar uma animação, exibir um pop-up, executar um cálculo, etc.
