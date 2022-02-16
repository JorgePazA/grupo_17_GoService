window.addEventListener("load", () => {
    
    const form = document.querySelector(".form-container-register");
    
    // function emailValido(email){
    //     let emailReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    //     let valido = emailReg.test(email)
    //     if (!valido) {
    //       return true
    //     }
    // }   

    let nameInput = form.fullName;
    let descriptionArea = form.description;
    let priceInput = form.price;
    let experienceInput = form.experience;
    let imageInput = form.inputfile;

        const validName = () => {
            let name = nameInput.value
            if (name == "") return "Por favor ingrese un nombre"
            if (name.length < 2) return "Debe tener al menos 2 caracteres"
            return null
        }

        const validDescription = () => {
            let description = descriptionArea.value
            if (description == "") return "Por favor ingresa una descripcion de tu servicio"
            if (description.length < 20) return "Debe tener al menos 20 caracteres"
            return null
          }

        const validPrice = () => {
            let price = priceInput.value
            if (!price) return "Por favor ingresa un precio para tu servicio"
            if (price.length < 5) return "Debe tener al menos 5 caracteres"
            return null
          }

          const validExperience = () => {
            let experience = experienceInput.value
            if (!experience) return "Por favor ingresa tus años de experiencia"
            return null
          }

          const validImage = () => {
            let extension = avatarInput.value.split('.').pop().toLowerCase()
            return allowedExtensions.includes(extension);
          }


        const sendFeedback = (element, message) => {
            const feedbackEl = element.nextElementSibling
            if (feedbackEl.innerText === message) return
            feedbackEl.innerText = message
          }
          
          nameInput.addEventListener("input", e => {
            sendFeedback(nameInput, validName())
          })

          descriptionArea.addEventListener("input", e => {
            sendFeedback(descriptionArea, validDescription())
          })

          priceInput.addEventListener("input", e => {
            sendFeedback(priceInput, validPrice())
          })

          experienceInput.addEventListener("input", e => {
            sendFeedback(experienceInput, validExperience())
          })


          form.addEventListener("submit", e => {
            e.preventDefault()
            if (!validName() && !validDescription() && !validPrice() && !validExperience())
              return form.submit()
          
            sendFeedback(nameInput, validName())
            sendFeedback(descriptionArea, validDescription())
            sendFeedback(priceInput, validPrice())
            sendFeedback(experienceInput, validExperience())
          })

})