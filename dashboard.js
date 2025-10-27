// dashboard.js

// --------------------------------------------------------
// SIMULACIÓN DE AUTENTICACIÓN
// --------------------------------------------------------

// Función que verifica si el usuario está 'logueado' (simulación)
function checkAuthentication() {
    // Intentamos recuperar la información de la última cuenta del LocalStorage
    // NOTA: En una aplicación real, esto sería un token JWT o ID de sesión.
    const lastLoginEmail = localStorage.getItem('nexoraLastLoginEmail');

    if (!lastLoginEmail) {
        // Si no hay email, redirige de vuelta a la página de login
        alert('Sesión no encontrada. Por favor, inicia sesión de nuevo.');
        window.location.href = 'index.html';
        return;
    }

    // Si hay email, muestra un mensaje de bienvenida personalizado
    const welcomeElement = document.getElementById('welcome-message');
    welcomeElement.textContent = `¡Hola, ${lastLoginEmail}! Has entrado a Nexora.`;
}

// --------------------------------------------------------
// GESTIÓN DEL CIERRE DE SESIÓN
// --------------------------------------------------------
function setupLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 1. Eliminar la información de la sesión simulada
        localStorage.removeItem('nexoraLastLoginEmail');
        
        // 2. Redirigir a la página de login
        alert('Sesión cerrada correctamente. ¡Vuelve pronto!');
        window.location.href = 'index.html';
    });
}

// --------------------------------------------------------
// INICIO DE LA APLICACIÓN DEL DASHBOARD
// --------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    checkAuthentication();
    setupLogout();
});