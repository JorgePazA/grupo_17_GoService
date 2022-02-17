window.addEventListener("load", () => {
  
  // Se lee document del formulario
  const form = document.querySelector(".login-container");

  const emailInput = form.email;
  const passwordInput = form.password;

  // Funcion validación de correo
  function emailValido(email){
    let emailReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let valido = emailReg.test(email)
    if (!valido) {
      return true
    }
  }

  // Funciones de validación
  const validEmail = () => {
    let email = emailInput.value
    if (!email) return "Por favor ingresa tu correo"
    if (emailValido(email)) return "El correo debe ser valido"
    return null
  }

  const validPassword = () => {
    let password = passwordInput.value;
    if (!password) return "Por favor ingresa una contraseña";
    if (password.length < 8) return "Debe tener al menos 8 caracteres";
    return null;
  };

  const sendFeedback = (element, message) => {
    const feedbackEl = element.nextElementSibling;
    if (feedbackEl.innerText === message) return;
    feedbackEl.innerText = message;
  };

  emailInput.addEventListener("input", (e) => {
    sendFeedback(emailInput, validEmail());
  });

  passwordInput.addEventListener("input", (e) => {
    sendFeedback(passwordInput, validPassword());
  });

  // Pusheo de mensaje de feedback
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validEmail() && !validPassword()) return form.submit();

    sendFeedback(emailInput, validEmail());
    sendFeedback(passwordInput, validPassword());
  });
});
