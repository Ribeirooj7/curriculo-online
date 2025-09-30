// Revela seções ao rolar
function revelarAoRolar() {
  const elementos = document.querySelectorAll('.reveal');
  const alturaJanela = window.innerHeight;

   elementos.forEach(el => {
    const rect = el.getBoundingClientRect();
    const topo = rect.top;
    const fundo = rect.bottom;
    const margem = 100;

// Se qualquer parte do elemento estiver visível dentro da janela
    if (topo < alturaJanela - margem && fundo > margem) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revelarAoRolar);

// Remove preloader quando a página carregar
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
  preloader.style.opacity = '0';
  preloader.style.visibility = 'hidden';
  }, 1500);
});
