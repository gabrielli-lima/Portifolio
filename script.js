let headerConteudo = document.getElementById('headerConteudo');
let menu = document.getElementById('menu');
let navBar = document.getElementById('navBar');
let iconMenu = document.getElementById('iconMenu');
let menuImage = document.getElementById('menuImage');

let btVerTodos = document.getElementById('btVerTodos');
let maisProjetos = document.getElementById('maisProjetos')
let textoBtVerTodos = document.getElementById('textoBtVerTodos')
let projetos = document.getElementById('projetos');

let cardProjeto = document.querySelectorAll('.card-projeto');

let btAlterarTema = document.querySelectorAll('button[name=theme]');
let iconTema = document.querySelectorAll('.icon-tema');

const yearElement = document.getElementById('year');
const anoAtual = new Date();
yearElement.innerHTML = anoAtual.getFullYear();

iconMenu.addEventListener('click', function () {
  if (menuImage.src.includes('list.svg')) {
    menuImage.src = './assets/close.svg';

    navBar.classList.add('fixed', 'shadow-lg');
    headerConteudo.classList.add('pt-[88px]')

    menu.classList.remove('hidden');
    menu.classList.add('fixed', 'flex', 'flex-col');

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
  } else {
    projetos.scrollIntoView();
    maisProjetos.style.display = 'none';
    textoBtVerTodos.innerText = 'Ver todos'
  }
}

btAlterarTema.forEach(element => {
  element.addEventListener('click', trocarTema);
});

function trocarTema() {
  const temaAtual = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  const novoIcone = temaAtual === 'dark' ? './assets/light-theme-icon.svg' : './assets/dark-theme-icon.svg';

  transicao();
  iconTema.forEach(icon => icon.src = novoIcone);
  document.documentElement.setAttribute('data-theme', temaAtual);
}

function transicao() {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000)
}