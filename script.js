var headerConteudo = document.getElementById('headerConteudo');
var menu = document.getElementById('menu');
var navBar = document.getElementById('navBar');
var iconMenu = document.getElementById('iconMenu');
var menuImage = document.getElementById('menuImage');

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
