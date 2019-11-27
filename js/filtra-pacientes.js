var filtro = document.querySelector("#filtro-pesquisa");

filtro.addEventListener("input", function(event) {
  var pacientes = document.querySelectorAll(".paciente");

  if (filtro.value.length > 0) {
    var expressao = new RegExp(filtro.value, "i");

    pacientes.forEach(function(paciente) {
      var nomeTd = paciente.querySelector(".info-nome");
      var nome = nomeTd.textContent;

      if (expressao.test(nome)) {
        paciente.classList.remove("invisivel");
      }
      else {
        paciente.classList.add("invisivel");
      }
    });
  } else {
    pacientes.forEach(function(paciente) {
      paciente.classList.remove("invisivel");
    });
  }
});
