// Menu responsivo - alternância
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

// Fechar menu ao clicar em um item (em dispositivos móveis)
document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.menu').classList.remove('active');
    });
});

// Validação do formulário
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (nome && email && mensagem) {
        alert('Obrigada pela mensagem, ' + nome + '! Retornarei em breve.');
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Adicionar classe ativa ao menu conforme a rolagem
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});