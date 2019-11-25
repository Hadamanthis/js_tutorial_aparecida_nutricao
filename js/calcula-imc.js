var header = document.querySelector(".titulo");
header.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {

  var tdPeso = paciente.querySelector(".info-peso")
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc")

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
});

function calculaImc(peso, altura) {
  var imc = peso/(altura*altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 1000)
    return true;

  return false;
}

function validaAltura(altura) {
  if (altura >= 0 && altura < 3)
    return true;

  return false;
}
