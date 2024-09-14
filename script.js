document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('header nav ul li a');
    const productSections = document.querySelectorAll('.product-section');

    // Função para ocultar todas as seções de produtos
    function hideAllSections() {
        productSections.forEach(section => {
            section.classList.remove('active');
        });
    }

    // Adiciona evento de clique para cada link de categoria
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita o comportamento padrão do link

            // Obtém a categoria selecionada
            const category = link.getAttribute('data-category');

            // Oculta todas as seções
            hideAllSections();

            // Mostra a seção correspondente à categoria selecionada
            const sectionToShow = document.querySelector(`#${category}`);
            if (sectionToShow) {
                sectionToShow.classList.add('active');
            }
        });
    });

    // Mostra a primeira seção por padrão
    if (productSections.length > 0) {
        productSections[0].classList.add('active');
    }
});
