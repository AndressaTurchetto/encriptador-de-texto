function criptografar() {
  let texto = document.getElementById("texto").value.toLowerCase(); // Converter para minúsculas
  let tituloMensagem = document.getElementById("titulo-mensagem");
  let paragrafo = document.getElementById("paragrafo");
  let lupa = document.getElementById("lupa");

  // Verificar se há caracteres inválidos
  if (/[^a-z\s]/.test(texto)) {
    swal("Ooops!", "Digite apenas letras minúsculas e sem acentos", "error");
    return;
  }

  if (texto.length !== 0) {
    let textoCriptografado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    document.getElementById("texto").value = textoCriptografado;
    tituloMensagem.textContent = "Texto criptografado com sucesso";
    paragrafo.textContent = "";
    lupa.src = "./imagens/st3.jpg";
  } else {
    lupa.src = "./imagens/sm3.jpg";
    tituloMensagem.textContent = "Nenhum texto foi encontrado";
    paragrafo.textContent = "Digite um texto que deseja criptografar e descriptografar";
    swal("Ooops!", "Digite um texto", "warning");
  }
}

function descriptografar() {
  let texto = document.getElementById("texto").value.toLowerCase(); // Converter para minúsculas
  let tituloMensagem = document.getElementById("titulo-mensagem");
  let paragrafo = document.getElementById("paragrafo");
  let lupa = document.getElementById("lupa");

  // Verificar se há caracteres inválidos
  if (/[^a-z\s]/.test(texto)) {
    swal("Ooops!", "Digite apenas letras minúsculas e sem acentos", "error");
    return;
  }

  if (texto.length !== 0) {
    let textoDescriptografado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

    document.getElementById("texto").value = textoDescriptografado;
    tituloMensagem.textContent = "Texto descriptografado com sucesso";
    paragrafo.textContent = "";
    lupa.src = "./imagens/st3.jpg";
  } else {
    lupa.src = "./imagens/sm3.jpg";
    tituloMensagem.textContent = "Nenhum texto foi encontrado";
    paragrafo.textContent = "Digite um texto que deseja criptografar e descriptografar";
    swal("Ooops!", "Digite um texto", "warning");
  }
}

function copiar() {
  let textoCop = document.getElementById('texto');

  textoCop.select();
  document.execCommand('copy');
  alert("Texto copiado.");
}