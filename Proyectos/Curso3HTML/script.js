// script.js

// Obtener los elementos del DOM
var inputTexto = document.getElementById("input-texto");
var btnEncriptar = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById("btn-desencriptar");
var outputTexto = document.getElementById("output-texto");
var btnCopiar = document.getElementById("btn-copiar");

// Definir las llaves de encriptación
var llaves = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
};

// Función para encriptar un texto
function encriptar(texto) {
  // Convertir el texto en un array de letras
  var letras = texto.split("");
  // Recorrer el array y reemplazar las vocales por las llaves
  var cifrado = letras.map(function(letra) {
    // Si la letra es una vocal, devolver la llave correspondiente
    if (llaves[letra]) {
      return llaves[letra];
    }
    // Si no, devolver la letra original
    else {
      return letra;
    }
  });
  // Unir el array cifrado en un solo texto
  return cifrado.join("");
}

// Función para desencriptar un texto
function desencriptar(texto) {
  // Convertir el texto en un array de letras
  var letras = texto.split("");
  // Recorrer el array y reemplazar las llaves por las vocales
  var descifrado = [];
  for (var i = 0; i < letras.length; i++) {
    // Obtener la letra actual
    var letra = letras[i];
    // Obtener la siguiente letra si existe
    var siguiente = letras[i + 1] || "";
    // Obtener la llave formada por la letra y la siguiente
    var llave = letra + siguiente;
    // Buscar la vocal correspondiente a la llave
    var vocal = Object.keys(llaves).find(function(key) {
      return llaves[key] === llave;
    });
    // Si se encontró una vocal, agregarla al array descifrado y saltar una posición
    if (vocal) {
      descifrado.push(vocal);
      i++;
    }
    // Si no, agregar la letra original al array descifrado
    else {
      descifrado.push(letra);
    }
  }
  // Unir el array descifrado en un solo texto
  return descifrado.join("");
}

// Agregar eventos a los botones
btnEncriptar.addEventListener("click", function() {
  // Obtener el texto del input
  var texto = inputTexto.value.toLowerCase();
  // Encriptar el texto y mostrarlo en el output
  outputTexto.value = encriptar(texto);
});

btnDesencriptar.addEventListener("click", function() {
  // Obtener el texto del input
  var texto = inputTexto.value.toLowerCase();
  // Desencriptar el texto y mostrarlo en el output
  outputTexto.value = desencriptar(texto);
});

btnCopiar.addEventListener("click", function() {
  // Seleccionar el texto del output
  outputTexto.select();
  // Copiar el texto al portapapeles
  document.execCommand("copy");
});
