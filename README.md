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

### HTML

No ínício, começa com `<!DOCTYPE HTML>`, uma declaração para avisar aos navegadores que é um documento HTML, e dentro, tem `<html>` representa a raiz de um documento HTML e contém um atributo "lang" para declarar o idioma da página da web a fim de ajudar os mecanismos de busca e os navegadores. 

Dentro desse elemento, tem um elemento `<head>` designado para informar os metadados e buscar os recursos. Está entre `<html>` e `<body>`. 

#### Metadados

- O `<link>` é um elemento que conecta os recursos externos aos documentos atuais para renderizar as coisas. Em seguida, os atributos:
  - O atributo "`rel`" é um relacionamento de tipo de arquivo;
  - O atributo "`type`" é um tipo de arquivo;
  - O atributo "`media`" especifica quais os dispositivos o documento deve ser renderizado.

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

O comando `<button type="button" onclick="validarCEP()">Checar a validade do CEP</button>` é um botão com um evento "onclick" que executa a função "validarCEP()" para checar se CEP é válido ou não. 

O comando `<input id="cadastrar" type="submit" value="Enviar dados">` é um botão de submissão com um valor para renderizar

O comando `<script src="assets/js/script-2.js" type="text/javascript"></script>` é elemento para anexar o arquivo externo em JavaScript e define o tipo de documento

### JavaScript

Executamos uma função (`function`) chamada `validarCEP()`, que foi executada ao clicar o botão em HTML. Dentro de uma função, usamos `getElementById` para pegar o valor por meio de um identificador do campo de entrada. Então ao obter o valor, analisamos dois casos:

- Checamos se for (`if ()`) menor que 8 números (`length != 8`) de CEP, avisamos (`alert`) que o CEP deve ter 8 números sem hífen.
- Pegamos a expressão regular de CEP para testar se é válido ou não – se válido, avisamos que é válido, senão avisamos que é inválido.

No fim, na última função, dentro da qual temos um comando `window.location.href`, que encaminha paraa próxima página de mensagem enviada com sucesso. 