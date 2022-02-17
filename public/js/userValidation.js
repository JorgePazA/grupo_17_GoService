window.addEventListener("load", () => {
    
    const form = document.querySelector(".form-container-register");
    
    function emailValido(email){
        let emailReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let valido = emailReg.test(email)
        if (!valido) {
          return true
        }
    }  
    
    const allowedExtensions = ['jpeg', 'jpg', 'png', 'gif'];

  

    let nameInput = form.name;
    let lastNameInput = form.lastName;
    let emailInput = form.email;
    let passwordInput = form.password;
    let passwordValInput = form.passwordVal;
    let avatarInput = form.avatar;

        const validName = () => {
            let name = nameInput.value
            if (name == "") return "Por favor ingrese un nombre"
            if (name.length < 2) return "Debe tener al menos 2 caracteres"
            return null
        }

        const validLastName = () => {
            let lastName = lastNameInput.value
            if (lastName == "") return "Por favor ingresa tu apellido"
            if (lastName.length < 2) return "Debe tener al menos 2 caracteres"
            return null
          }

        const validEmail = () => {
            let email = emailInput.value
            if (!email) return "Por favor ingresa tu correo"
            if (emailValido(email)) return "El correo debe ser valido"
            return null
        }

        const validPassword = () => {
            let password = passwordInput.value
            if (!password) return "Por favor ingresa una contraseña"
            if (password.length < 8) return "Debe tener al menos 8 caracteres"
            return null
          }

        const validConfirmPassword = () => {
            let password = passwordInput.value
            let confirm = passwordValInput.value
            if (password !== confirm) return "Contraseñas no coinciden"
            return null
          }

        const validAvatar = () => {
            let extension = avatarInput.value.split('.').pop().toLowerCase()
            if(!(allowedExtensions.includes(extension))) return "Tu imagen debe ser de las siguientes extensiones: jpeg, jpg, png o gif" 
            return null
        }




        const sendFeedback = (element, message) => {
            const feedbackEl = element.nextElementSibling
            if (feedbackEl.innerText === message) return
            feedbackEl.innerText = message
          }
          
          nameInput.addEventListener("input", e => {
            sendFeedback(nameInput, validName())
          })

          lastNameInput.addEventListener("input", e => {
            sendFeedback(lastNameInput, validLastName())
          })

          emailInput.addEventListener("input", e => {
            sendFeedback(emailInput, validEmail())
          })

          passwordInput.addEventListener("input", e => {
            sendFeedback(passwordInput, validPassword())
            sendFeedback(passwordConfirmInput, validConfirmPassword())
          })

          passwordValInput.addEventListener("input", e => {
            sendFeedback(passwordInput, validPassword())
            sendFeedback(passwordValInput, validConfirmPassword())
          })

          avatarInput.addEventListener("input", e => {
            sendFeedback(avatarInput, validAvatar())
          })


          form.addEventListener("submit", e => {
            e.preventDefault()
            if (!validName() && !validLastName() && !validEmail() && !validPassword() && !validConfirmPassword() && !validAvatar())
              return form.submit()
          
            sendFeedback(nameInput, validName())
            sendFeedback(lastNameInput, validLastName())
            sendFeedback(emailInput, validEmail())
            sendFeedback(passwordInput, validPassword())
          })

})

