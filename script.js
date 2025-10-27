// script.js (ACTUALIZADO para redirigir)
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Usaremos la URL de tu VPS de prueba
    const API_URL = 'http://node2.nodebyte.pro:25468/api/login'; 

    const userData = { email, password };

    // Función simplificada para mostrar mensajes (solo error)
    function showMessage(text, type) {
        messageElement.textContent = text;
        messageElement.className = `message ${type}`;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.ok) {
            // ÉXITO: Los datos se han guardado en el servidor.
            
            // 1. Redirigir al usuario al Dashboard
            window.location.href = 'dashboard.html'; // ¡Esta es la clave!

            // 2. Nota: El mensaje de éxito ya no se muestra porque redirigimos.

        } else {
            // Error del Servidor
            showMessage(`❌ Error de inicio de sesión: ${data.message}`, 'error');
        }

    } catch (error) {
        // Error de red/conexión
        showMessage(`⚠️ Error de conexión: No se pudo conectar a la API.`, 'error');
        console.error('Error de fetch:', error);
    }
});