// ✅ Función para abrir el popup de donación cuando se hace clic en "Dona"
function abrirPopupDonacion() {
    document.getElementById("popup-donacion").style.display = "flex";
}

// ✅ Función para cerrar el popup de donación al hacer clic en "Cancelar" o "Aceptar"
function cerrarPopupDonacion() {
    document.getElementById("popup-donacion").style.display = "none";
    document.getElementById("form-donacion").style.display = "block";  // Volver a mostrar el formulario
    document.getElementById("mensaje-confirmacion").style.display = "none";  // Ocultar mensaje de éxito
}

// ✅ Función para procesar la donación y mostrar mensaje de éxito
function procesarDonacion(event) {
    event.preventDefault();  // Evitar recarga de la página

    // Obtener valores del formulario
    const titular = document.getElementById("titular").value;
    const tarjeta = document.getElementById("tarjeta").value;
    const cvv = document.getElementById("cvv").value;
    const cantidad = document.getElementById("cantidad").value;

    // Verificar que los campos están completos
    if (titular && tarjeta && cvv && cantidad) {
        document.getElementById("form-donacion").style.display = "none"; // Ocultar formulario
        document.getElementById("mensaje-confirmacion").style.display = "block"; // Mostrar mensaje de éxito
    }
}

// ✅ Ocultar el popup al cargar la página para evitar que aparezca solo
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("popup-donacion").style.display = "none";
});
