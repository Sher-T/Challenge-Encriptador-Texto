function mostrarMensajeEncriptado() { 
  document.getElementById("muñeco").style.display = "none";
  document.getElementById("mensaje__titulo").style.display = "none";
  document.getElementById("mensaje__parrafo").style.display = "none";
  document.getElementById("mensaje").style.display = "block";
  document.getElementById("boton__extra").style.display = "block";
}

function ocultarMensajeEncriptado() {
  document.getElementById("muñeco").style.display = "block";
  document.getElementById("mensaje__titulo").style.display = "block";
  document.getElementById("mensaje__parrafo").style.display = "block";
  document.getElementById("mensaje").style.display = "none";
  document.getElementById("boton__extra").style.display = "none";
}

function encriptar() {
  const texto = document.getElementById("texto").value;

  if (texto === "") {
    alert("No se ha introducido texto");
    ocultarMensajeEncriptado();
    return;
  }

  if (/[A-ZÁÉÍÓÚáéíóú]/.test(texto)) {
    alert("No se permiten mayúsculas ni acentos");
    ocultarMensajeEncriptado();
    return;
  }

  const encriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  document.getElementById("mensaje").value = encriptado;
  mostrarMensajeEncriptado();
}

function desencriptar() {
  const texto = document.getElementById("texto").value;

  if (texto === "") {
    alert("No se ha introducido texto");
    ocultarMensajeEncriptado();
    return;
  }

  if (/[A-ZÁÉÍÓÚáéíóú]/.test(texto)) {
    alert("No se permiten mayúsculas ni acentos");
    ocultarMensajeEncriptado();
    return;
  }

  const desencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("mensaje").value = desencriptado;
  mostrarMensajeEncriptado();
}

function botonCopiar() {
  const mensaje = document.getElementById("mensaje").value;
  navigator.clipboard.writeText(mensaje).then(() => {
    alert("Texto copiado al portapapeles");
    document.getElementById("texto").value = "";
    ocultarMensajeEncriptado();
  });
}

// Al iniciar la página, ocultamos el segundo textarea y el botón de copiar
ocultarMensajeEncriptado();
