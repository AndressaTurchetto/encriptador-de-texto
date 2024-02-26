function criptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let lupa = document.getElementById("lupa");
    let textoCop = document.getElementById("copiar");
  
    let textoCriptografado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCriptografado;
      tituloMensagem.textContent = "Texto criptografado com sucesso";
      paragrafo.textContent = "";
      lupa.src = "./imagens/st3.jpg";
      textoCop = "copiar";
    } else {
      lupa.src = "./imagens/sm3.jpg";
      tituloMensagem.textContent = "Nenhum texto foi encontrado";
      paragrafo.textContent = "Digite um texto que deseja criptografar e descriptografar";
      swal("Ooops!", "Digite um texto", "warning");
    }
  }
  
  function descriptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let lupa = document.getElementById("lupa");
    let textoCop = document.getElementById("copiar");
  
    let textoCriptografado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCriptografado;
        tituloMensagem.textContent = "Texto descriptografado com sucesso";
        paragrafo.textContent = "";
        lupa.src = "./imagens/st3.jpg";
        textoCop = "copiar";
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