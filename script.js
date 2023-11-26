var headerConteudo = document.getElementById('headerConteudo');
var menu = document.getElementById('menu');
var navBar = document.getElementById('navBar');
var iconMenu = document.getElementById('iconMenu');
var menuImage = document.getElementById('menuImage');

var btVerTodos = document.getElementById('btVerTodos');
var maisProjetos = document.getElementById('maisProjetos')
var textoBtVerTodos = document.getElementById('textoBtVerTodos')
var projetos = document.getElementById('projetos');

var cardProjeto = document.querySelectorAll('.card-projeto')

iconMenu.addEventListener('click', function () {
  if (menuImage.src.includes('list.svg')) {
    menuImage.src = './assets/close.svg';

    navBar.classList.add('fixed', 'shadow-lg');
    headerConteudo.classList.add('pt-[88px]')

    menu.classList.remove('hidden');
    menu.classList.add('fixed', 'flex', 'flex-row', 'justify-end');

  } else {
    menuImage.src = './assets/list.svg';

    navBar.classList.remove('fixed', 'shadow-lg');
    headerConteudo.classList.remove('pt-[88px]')

    menu.classList.add('hidden');
    menu.classList.remove('fixed', 'flex', 'flex-row', 'flex-end');
  }

});

maisProjetos.style.display = 'none';
btVerTodos.onclick = function () {
  if (maisProjetos.style.display === 'none') {
    maisProjetos.style.display = 'grid';

    textoBtVerTodos.innerText = 'Mostrar menos'
    menuImage.src = './assets/list.svg';
  } else {
    projetos.scrollIntoView();
    maisProjetos.style.display = 'none';
    textoBtVerTodos.innerText = 'Ver todos'
  }
}
