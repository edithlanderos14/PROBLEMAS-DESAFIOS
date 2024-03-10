// Problema 3: Verificación de Contraseña
document.addEventListener('DOMContentLoaded', function () {
    const passwordSelect = document.getElementById('passwordSelect');
    const checkButton = document.getElementById('checkButton');
    const passwordResult = document.getElementById('passwordResult');

    checkButton.addEventListener('click', function () {
        const selectedPassword = passwordSelect.value;

        if (selectedPassword === '911') {
            passwordResult.textContent = 'Password 1 correcto';
        } else if (selectedPassword === '714') {
            passwordResult.textContent = 'Password 2 es correcto';
        } else {
            passwordResult.textContent = 'Password incorrecto';
        }
    });
});
