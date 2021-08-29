# Desafio Indiviaul – Formulário Pessoal

### Autor:

- Ronilson Almeida Vieira
- **Idade**: 24 anos
- **Tipo de deficiência:** Cegueira total
- **CID:** H35 H54

### Objetivo:

Desenvolver um cadastro pessoal num *site* pequeno e acessível, com campos do formulários, além de validações e expressões regulares.

### Ferramenta:

Visual Studio Code no Windows.

### Linguagens: 

- CSS
- HTML
- JavaScript

## Descrição do site

### CSS

Começamos com o seletor `*`, `*::before` e `*::after` que captura inteiramente o site para definir a propriedade `box-sizing` com um valor `border-box`, para que preenchimento e borda estejam incluídos na largura e altura de todo o site.

Definimos a gride para ambos o html e o body a fim de podermos alinhar as divisões, secções ou elementos. Expandimos a altura e a largura para que o rodapé possa mover-se para o canto inferior:

```css
html,
body {
    display: grid;
    height: 100%;
    width: 100%;
}
```

Definimos a cor de vermelho rosado suave para o corpo inteiro, e a cor preta de Eerie para todo o texto. Defimos a fonte externa do Google para todo o texto:

```css
body {
    background-color: #F0877F;
    color: #252220;
    font-family: "Poppins", sans-serif;
}
```

E centralizamos o grupo com uma nova cor e definimos a redondeza do seu contorno com um preenchimento para afastar o grupo. Depois do seletor `centralizado`, definimos a outra divisão com a mesma cor, mas definimos uma bordura com contorno bem arredondado. Para afastar-se da divisão com bordura `descricao`, adicionamos 2 ems de preenchimento ao formulário

```css
.centralizado {
    background-color: #FFF9F2;
    border-radius: 20px;
    margin: auto;
    padding: 2em;
}

.descricao {
    background-color: #FFF9F2;
    border: 1px solid #53011F;
    border-radius: 20px;
}

.info,
form {
    padding: 2em;
}
```

Adicionamos uma regra de linha horizontal, estilizando-a com dupla linha de tamanho médio, e centralizamo-na. Adicionamos o atributo "`after`" para colocar o conteúdo sobre a linha horizontal:

```css
hr {
    border: none;
    border-top: medium double #53011F;
    color: #53011F;
    overflow: visible;
    padding: 0;
    text-align: center;
}

hr:after {
    background: #FFF9F2;
    content: "§";
    display: inline-block;
    font-size: 1.5em;
    padding: 0 0.25em;
    position: relative;
    top: -0.7em;
}
```

Definimos a margem de 20 pixels para afastar os grupos de campo com rótulo:

```css
.grupo-de-caixa {
    margin: 20px;
}
```

Um rótulo renderizado para estar ao lado do campo, com uma margem a fim de afastar-se dos campos:

```css
label {
    display: inline-block;
    width: 320px;
}WWS
```

Sobreescrevemos a aparência dos botões, dos campos, das listas suspensas, dos rótulos, das seleções com certas definições (tamanho da letra, nova fonte, remoção do contorno chato):

```css
label,
input,
select {
    font-size: 16px;
    padding: 5px;
}

button,
label,
input,
select {
    font-family: "Poppins", sans-serif;
}

input,
select {
    background-color: white;
    border: 1px solid #53011F;
    width: 250px;
}

input:hover,
input:focus,
input:active,
input:focus-visible,
input:focus-within,
select:hover,
select:focus,
select:active,
select:focus-visible,
select:focus-within {
    border: 1px solid #DC645F;
    outline: 0;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: inherit;
    display: inline-block;
    line-height: inherit;
    margin: 0;
}

button {
    margin-left: 325px;
    margin-top: 10px;
    padding: 5px;
    width: 250px;
}

button,
#cadastrar {
    background-color: #53011F;
    border: none;
    border-radius: 3px;
    color: #FFF9F2;
    font-family: "Bitter", serif;
}

button:hover,
#cadastrar:hover {
    background-color: #DC645F;
}
```

### HTML

No ínício, começa com `<!DOCTYPE HTML>`, uma declaração para avisar aos navegadores que é um documento HTML, e dentro, tem `<html>` representa a raiz de um documento HTML e contém um atributo "lang" para declarar o idioma da página da web a fim de ajudar os mecanismos de busca e os navegadores. 

Dentro desse elemento, tem um elemento `<head>` designado para informar os metadados e buscar os recursos. Está entre `<html>` e `<body>`. 

#### Metadados

- O `<link>` é um elemento que conecta os recursos externos aos documentos atuais para renderizar as coisas. Em seguida, os atributos:
  - O atributo "`rel`" é um relacionamento de tipo de arquivo;
  - O atributo "`crossorigin`" é um método de origem de cruzamento
  - O atributo "`href`" é um endereço do recurso externo

- `<meta charset="UTF-8">`: É um elemento de metadado para a codificação e a renderização de caracteres para o documento HTML
- `<meta http-equiv="X-UA-Compatible" content="IE=edge">`: É um elemento de metadado de fornecimento de HTTP para o conteúdo do navegador
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: É um elemento de metadado para renderizar a compatiblidade de visualizacão da página com todos os dispositivos
- `<title>Cadastro Pessoal</title>`: O <title> é um elemento que renderiza o título para a aba do navegador

#### Corpo

O elemento `<body>` renderiza todo o corpo de um document.

No corpo, vocês encontram os elementos <div>, que são divisões ou uma seções num documento HTML. O atributo "`class`" é um nome de classe para um elemento para pegar os seletores de um arquivo CSS.

Além disso, numa divisão, temos:

- `<h1>` é um cabeçalho de primeiro grau.
- `<h2>` é um cabeçalho de segundo grau.
- `<p>` é uma definição de parágrafos.
- `<hr/>` é um mais frequentemente exibido como uma regra horizontal que é usada para separar conteúdo (ou definir uma alteração) numa página HTML.

#### Formulário

O `<form>` é um elemento de criação de formulário usado para onde o usuário possa preencher os campos. Nele, tem um atributo "`onsumbit`" é um evento de submissão em JavaScript que executa a função. Dentro do formulário, definimos as classes `grupo-de-caixa` para agrupar o rótulo e o campo para uma mesma linha e expandir a largura do campo até à largura da classe "`descricao`".

Nele, temos:

##### Rótulos

- O `<label>` é um elemento que rotula a informação.
  - O atriuto "`for`" é um método que pega o identificador do campo de entrada.

##### Campos de entrada

- O `<input>` é um elemento de campo de entrada para o usuário escrever o valor e preenchê-lo.
  - O atributo "`id`" é uma vinculação do campo ao rótulo.
  - O atributo "`required`" significa que o campo não pode ser vazio.
  - O atributo "`aria-required`" é semelhante ao "required" para pessoas com deficiência.
  - O atributo "`maxlength`" define o limite de caracteres.
  - O atributo "`placeholder`" é um valor da dica ou do exemplo.
  - O atributo "`pattern`" é um método de expressão regular.

#### Fim

O comando `<input id="cadastrar" type="submit" value="Enviar dados">` é um botão de submissão com um valor para renderizar

Temos um script interno que é um elemento para executar JavaScript interno.

### JavaScript

Executamos uma primeira função (`function`) chamada `validarCPF()`, que foi executada ao clicar o botão em HTML. Dentro de uma função, usamos `getElementById` para pegar o valor por meio de um identificador do campo de entrada. Então ao obter o valor, analisamos dois casos:

- A vairável chamada `validar` obterá a expressão regular do CPF. A sua expressão regular é `/^[0-9]{11}$/`, que significa permitir os números 0 a 9 com 11 caracteres. \
- Pegando a variável `validar` e o valor da variável `cpf` a fim de compararmos a expressão regular e o valor e vermos se são iguais. Se checarmos se é valido, já é valido sem avisar, senão avisamos que é inválido.

A penúltima função `validarCelular()` é muito semelhante à função `validarCPF()`, mas é designado para detectar a validação do telefone celular. 

No fim, na última função, dentro da qual temos um comando `window.location.href`, que encaminha paraa próxima página de mensagem enviada com sucesso. 

## Referências

### HTML

- [O uso de `aria-required`](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute)
- [O uso de `pattern`](https://pt.stackoverflow.com/questions/182118/como-usar-o-atributo-pattern)
- [O uso de expressão regular de números permitidos](https://www.w3schools.com/jsref/jsref_regexp_not_0-9.asp)
- [A expressão regular de telefone celular](https://pt.stackoverflow.com/questions/46672/como-fazer-uma-express%C3%A3o-regular-para-telefone-celular)

### JavaScript

- [A expressão regular de CEP](https://dfilitto.com.br/video-aulas/validacao-do-cep-utilizando-expressao-regular/)

### CSS

- Meu amigo me ensinou a colocar as cores certas, mesmo que eu seja um deficiente visual. 