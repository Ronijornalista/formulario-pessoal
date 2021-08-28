// Uma função
function validarCEP() 
{
  // O método getElementById pega o identificador do campo de entrad, obtendo o valor
  cep = document.getElementById('cep').value;

  // Checa se for menor que 8 números de CEP
  if (cep.length != 8) 
  {
    // Avisa
    alert("CEP precisa ter 8 números");
    return;
  }

  // Expressão regular de CEP
  var valido = /^[0-9]{8}$/;

  // Checa se e válido
  if (valido.test(cep))
  {
    // Avisa
      alert("CEP válido!")
  }

  // Senão avisa que um CEP inválido
  else 
  {
      alert("Formato de CEP inválido.");
  }
}

// Ao rpeencher todos os campos, submete-se automaticamente e ncaminha para a próxima página
function sucesso() 
{
  window.location.href = "enviado.html";
}