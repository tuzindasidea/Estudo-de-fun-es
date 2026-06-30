const menuBtn = document.getElementById('menuBtn');
const fecharBtn = document.getElementById('fecharBtn');
const sidebar = document.getElementById('sidebar');

// Função para abrir
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('ativa');
});

 
const fecharMenu = () => {
    sidebar.classList.remove('ativa');
};

fecharBtn.addEventListener('click', fecharMenu);
