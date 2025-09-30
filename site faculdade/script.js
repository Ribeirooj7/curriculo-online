// Revela seções ao rolar
function revelarAoRolar() {
  const elementos = document.querySelectorAll('.reveal');
  const alturaJanela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;
    const visivel = 100;

    if (topo < alturaJanela - visivel) {
      el.classList.add('active');
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