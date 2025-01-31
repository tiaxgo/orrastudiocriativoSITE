window.addEventListener('DOMContentLoaded', () => {
  // 🚀 Função genérica para animar elementos em sequência com delay
  const animateSequentially = (elements, baseDelay, stepDelay) => {
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('show');
      }, baseDelay + index * stepDelay);
    });
  };

  // 🏷️ Elementos que queremos animar
  const sobeorra = document.querySelector('.sobeorra'); // Logo
  const navOptions = document.querySelectorAll('.nav-opcoes ul.nav-links li.nav-option'); // Opções de navegação
  const navLocalizacao = document.querySelector('.nav-localizacao'); // Localização

  // 🎬 Aplica animações individuais e sequenciais
  if (sobeorra) sobeorra.classList.add('show');
  animateSequentially(navOptions, 300, 200);
  setTimeout(() => navLocalizacao?.classList.add('show'), 100 + navOptions.length * 200 + 100);

  // 📌 Animação baseada no scroll para elementos "slide-up" e outros efeitos
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Remove a observação após animação
      }
    });
  }, { threshold: 0.1 });

  // 🎯 Lista de classes a observar
  const animatedClasses = ['.slide-up', '.fade-in', '.zoom-in'];

  // 🔍 Adiciona ao observer
  animatedClasses.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  });

  // 🔥 Animação SEQUENCIAL para os cartões de planos
  const sectionPlanos = document.querySelector('.area-planos'); // A section onde os planos estão
  const cartoes = document.querySelectorAll('.cartao-plano'); // Todos os cartões dentro da section

  // Criando o Observer para quando a section de planos entrar na tela
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Quando a section de planos entra na tela, inicia a animação dos cartões
        let delay = 0;
        cartoes.forEach((cartao, index) => {
          setTimeout(() => {
            cartao.classList.add('animate'); // Adiciona a classe que dispara a animação do cartão
          }, delay + index * 1000); // Cada cartão anima com atraso de 400ms em relação ao anterior
        });
        observer.unobserve(entry.target); // Para de observar a section após a animação
      }
    });
  }, { threshold: 0.3 }); // Ajuste para 30% da section estar visível

  // Começa a observar a section de planos
  if (sectionPlanos) {
    sectionObserver.observe(sectionPlanos);
  }
});


  let flipped = false;

  function toggleButton() {
    const front = document.querySelector('.btn-front');
    const back = document.querySelector('.btn-back');
  
    if (flipped) {
      front.style.transform = 'translateY(0%)';
      back.style.transform = 'translateY(100%)';
    } else {
      front.style.transform = 'translateY(-100%)';
      back.style.transform = 'translateY(0%)';
    }
  
    flipped = !flipped;
  }
 