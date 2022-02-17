window.addEventListener("load", () => {

    // Se lee document del formulario
    const form = document.querySelector(".form-container-register");
       
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    // Se crean variables leyendo parametros del document
    let nameInput = form.fullName;
    let descriptionArea = form.description;
    let priceInput = form.price;
    let experienceInput = form.experience;
    let imageInput = form.inputfile;

        // Funciones de validación
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

          const validAvatar = () => {
            let extension = imageInput.value.split('.').pop().toLowerCase()
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

          descriptionArea.addEventListener("input", e => {
            sendFeedback(descriptionArea, validDescription())
          })

          priceInput.addEventListener("input", e => {
            sendFeedback(priceInput, validPrice())
          })

          experienceInput.addEventListener("input", e => {
            sendFeedback(experienceInput, validExperience())
          })

          imageInput.addEventListener("input", e => {
            sendFeedback(imageInput, validAvatar())
          })

          // Pusheo de mensaje de feedback
          form.addEventListener("submit", e => {
            e.preventDefault()
            if (!validName() && !validDescription() && !validPrice() && !validExperience() && !validAvAbstractRange())
              return form.submit()
          
            sendFeedback(nameInput, validName())
            sendFeedback(descriptionArea, validDescription())
            sendFeedback(priceInput, validPrice())
            sendFeedback(experienceInput, validExperience())
            sendFeedback(imageInput, validAvatar())
          })

})