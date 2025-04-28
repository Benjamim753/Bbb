// Animações de Eventos (Carrossel de Imagens)
$(document).ready(function() {
    let currentIndex = 0;
    const items = $(".eventos-item");
    const totalItems = items.length;

    function showEvent(index) {
        items.hide();
        items.eq(index).show();
    }

    $(".eventos-slider").on("click", function() {
        currentIndex = (currentIndex + 1) % totalItems;
        showEvent(currentIndex);
    });

    // Iniciar com o primeiro item visível
    showEvent(currentIndex);
});

// Submissão do Formulário
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
});