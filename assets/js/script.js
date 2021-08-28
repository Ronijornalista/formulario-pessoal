function carregaEndereco () {
  cep = document.getElementById("cep").value;
  if (cep.length != 8) {
    alert("CEP precisa ter 8 números");
    return;
  }

  url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url)
    .then(async (res) => {
      endereco = await res.json()
      if (endereco.erro) {
        alert("Número de CEP inválido");
        document.getElementById("cep").focus();
        return;
      }

      document.getElementById("endereco").value = endereco.logradouro;
      document.getElementById("bairro").value = endereco.bairro;
      document.getElementById("cidade").value = endereco.localidade;
      document.getElementById("estado").value = endereco.uf;
    })
    .catch(() => {
      alert("Algo deu errado com seu CEP");
      document.getElementById("cep").focus();
    });
}
function sucesso () {
  window.alert("Os seus dados foram enviados com sucesso!");
}