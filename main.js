const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");
const botonLogin = document.getElementById("btnLogin")
const userInput = document.getElementById("users")

function login(evento) {
    evento.preventDefault();
    const user = userInput.value;
    alert(`hola a ${user}`);
}

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    if (password.length <= 7) {
        feedback.textContent = "La contraseña es demasiado corta";
        feedback.className = "rojo";
        botonLogin.setAttribute('disabled', 'true')
    } else if (password.length >= 11) {
        feedback.textContent = "La contraseña es segura";
        feedback.className = "verde";
        botonLogin.removeAttribute('disabled')
    } else {
        feedback.textContent = "La contraseña no es del todo segura";
        feedback.className = "naranja";
        botonLogin.setAttribute('disabled', 'true')
        
    }
    loginPassword(new Event('input'));
});
botonLogin.addEventListener('click', login);