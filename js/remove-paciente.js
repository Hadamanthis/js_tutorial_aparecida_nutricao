var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
  var pacienteTd = event.target;
  var pacienteTr = pacienteTd.parentNode;

  pacienteTr.classList.add("fadeOut");

  setTimeout(function() {
      pacienteTr.remove();
  }, 500);

});
