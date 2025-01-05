document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón por su clase
    const botonEntrar = document.querySelector(".boton-entrar");

    // Verifica si el botón existe antes de agregar el evento
    if (botonEntrar) {
        botonEntrar.addEventListener("click", function(event) {
            event.preventDefault(); // Previene el comportamiento predeterminado del botón
            window.location.href = "pages/principal.html"; // Redirige a la página principal
        });
    } else {
        console.error("❌ Error: No se encontró el botón con la clase .boton-entrar");
    }
});
