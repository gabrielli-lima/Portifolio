const modal = document.getElementById("modal");
const modalConteudo = document.getElementById("modalConteudo");

function modalC() {
  modal.style.visibility = "visible"
  modal.style.opacity = "1"
  modalConteudo.style.visibility = "visible"
  modalConteudo.style.opacity = "1"
}

function btnClose(){
  modal.style.visibility = "hidden"
  modal.style.opacity = "0"
  modalConteudo.style.visibility = "hidden"
  modalConteudo.style.opacity = "0"
}