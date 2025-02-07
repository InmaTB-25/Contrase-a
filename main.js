const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");
passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    if (password.length <= 7) {
        feedback.textContent = "La contraseña es demasiado corta";
        feedback.className = "rojo";
    } else if (password.length >= 11) {
        feedback.textContent = "La contraseña no es del todo segura";
        feedback.className = "naranja";
    } else {
        feedback.textContent = "La contraseña es segura";
        feedback.className = "verde";
    }
    return test(password);
});
