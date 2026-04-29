/**
 * Studio Divina Olhar - Lógica de Negócio
 * Desenvolvido por: Nicolas
 */

// 1. Base de Dados de Serviços (Simulando uma API)
const servicosEstetica = [
    { id: 1, titulo: 'Volume Russo', categoria: 'cilios', descricao: 'Técnica para máximo volume e preenchimento dos fios.' },
    { id: 2, titulo: 'Fio a Fio Luxo', categoria: 'cilios', descricao: 'Extensão clássica para um olhar elegante e natural.' },
    { id: 3, titulo: 'Lash Lifting', categoria: 'cilios', descricao: 'Curvatura e hidratação dos seus cílios naturais.' },
    { id: 4, titulo: 'Design com Henna', categoria: 'sobrancelha', descricao: 'Modelagem precisa com pigmentação para realçar o rosto.' },
    { id: 5, titulo: 'Brow Lamination', categoria: 'sobrancelha', descricao: 'Alinhamento dos fios das sobrancelhas para um visual moderno.' }
];

// 2. Seleção de Elementos do DOM
const containerServicos = document.getElementById('services-container');
const botoesFiltro = document.querySelectorAll('.filter-btn');

/**
 * Função para Renderizar os Cards de Serviço
 * @param {string} filtro - A categoria selecionada ('all', 'cilios', 'sobrancelha')
 */
function renderizarCards(filtro = 'all') {
    // Limpa o container antes de renderizar
    if (!containerServicos) return;
    containerServicos.innerHTML = '';

    // Filtra os dados
    const servicosFiltrados = filtro === 'all' 
        ? servicosEstetica 
        : servicosEstetica.filter(item => item.categoria === filtro);

    // Gera o HTML dinamicamente
    servicosFiltrados.forEach(servico => {
        const cardHTML = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm border-0">
                    <div class="card-body text-center p-4">
                        <h5 class="card-title fw-bold mb-3" style="color: #B8860B;">${servico.titulo}</h5>
                        <p class="card-text text-muted small">${servico.descricao}</p>
                    </div>
                </div>
            </div>
        `;
        containerServicos.innerHTML += cardHTML;
    });
}

// 3. Gerenciamento de Eventos (Event Listeners)
document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializa a galeria com todos os serviços
    renderizarCards();

    // Adiciona lógica aos botões de filtro
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', (e) => {
            // Remove classe ativa de todos e adiciona ao clicado
            botoesFiltro.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            // Filtra os resultados
            const categoriaSelecionada = e.target.getAttribute('data-filter');
            renderizarCards(categoriaSelecionada);
        });
    });
});

// 4. Efeito de Navbar (Opcional - Muda cor ao rolar)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#1a1a1a';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.boxShadow = 'none';
    }
});
