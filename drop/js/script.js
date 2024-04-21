// Função para mostrar/esconder o submenu
function mostrarSubmenu(elemento) {
  const submenu = elemento.nextElementSibling;
  submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
}

// Adicionar evento click aos itens do menu principal
const itensMenuPrincipal = document.querySelectorAll('.menu-principal li');

for (const item of itensMenuPrincipal) {
  item.addEventListener('click', function () {
    mostrarSubmenu(this);
  });
}
