// Aguarda o carregamento total da árvore DOM antes de processar os scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleção de elementos da interface
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector('i');

    /**
     * Função para alternar o tema da aplicação (Modo Claro vs Modo Escuro)
     */
    const toggleTheme = () => {
        // Obtém o estado atual do tema mapeado no atributo data-theme
        const currentTheme = htmlElement.getAttribute('data-theme');
        let newTheme = 'dark';

        // Validação e inversão do estado lógico do tema
        if (currentTheme === 'dark') {
            newTheme = 'light';
        }

        // Aplica o novo valor no elemento raiz do documento
        htmlElement.setAttribute('data-theme', newTheme);
        
        // Atualiza dinamicamente o ícone correspondente do botão
        updateThemeIcon(newTheme);

        // Armazena a preferência de navegação do usuário na sessão local do browser
        localStorage.setItem('portfolio-theme', newTheme);
    };

    /**
     * Função auxiliar para renderização visual do ícone correspondente ao tema
     * @param {string} theme - O estado atual do tema ('light' ou 'dark')
     */
    const updateThemeIcon = (theme) => {
        if (theme === 'light') {
            themeIcon.className = 'fa-solid fa-sun';
        } else {
            themeIcon.className = 'fa-solid fa-moon';
        }
    };

    // Verificação de persistência de dados: Carrega preferência prévia caso exista
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    // Vincula o escutador de eventos de clique para o botão de toggle
    themeToggleBtn.addEventListener('click', toggleTheme);
});