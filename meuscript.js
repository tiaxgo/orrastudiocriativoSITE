// meuscript.js

window.addEventListener('DOMContentLoaded', () => {
    // Seleciona o elemento do logo
    const sobeorra = document.querySelector('.sobeorra');

    // Seleciona todas as opções de navegação
    const navOptions = document.querySelectorAll('.nav-opcoes ul.nav-links li.nav-option');

    // Seleciona o elemento de localização
    const navLocalizacao = document.querySelector('.nav-localizacao');

    // Função para adicionar a classe 'show' com delay
    const animateElement = (element, delay) => {
        setTimeout(() => {
            element.classList.add('show');
        }, delay);
    };

    // Inicia a animação do logo após 100ms
    animateElement(sobeorra, 100);

    // Inicia a animação das opções de navegação com delays incrementais
    navOptions.forEach((option, index) => {
        // Cada opção terá um delay de 200ms multiplicado pelo seu índice
        animateElement(option, 300 + index * 200);
    });

    // Inicia a animação da localização após todas as opções terem animado
    animateElement(navLocalizacao, 100 + navOptions.length * 100 + 100);
});


window.addEventListener('DOMContentLoaded', () => {
    const slideElements = document.querySelectorAll('.slide-up');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    }, {
      threshold: 0.1
    });
  
    slideElements.forEach(el => observer.observe(el));
  });