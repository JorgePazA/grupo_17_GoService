window.addEventListener("load", () => {

    let form = document.querySelector("form.form-container-register");
    
    form.addEventListener("submit", (e) => {
        
        let errors = [];
        
        let name = document.querySelector("input#name");
        let lastName = document.querySelector("input#lastName");
        let email = document.querySelector("input#email");
        let password = document.querySelector("input#password")
        let passwordVal = document.querySelector("input#passwordVal");
        let avatar = document.querySelector("input#avatar");

    
            if(!name.value){
                errors.push("Ingresa tu nombre")
            }else if(name.value.length < 2){
                errors.push("Tu nombre debe contener almenos 2 caracteres")
            }

            if(!lastName.value){
                errors.push("Ingresa tu apellido")
            }else if(lastName.value.length < 2){
                errors.push("Tu apellido debe contener almenos 2 caracteres")
            }

            if(!password.value){
                errors.push("Ingresa una contraseña")
            }else if(password.value.length < 8){
                errors.push("Tu contraseña debe tener almenos 8 caracteres")
            }

            if(passwordVal.value != password.value){
                errors.push("Las contraseñas no coinciden")
            }

            if(errors.length > 0) {
                e.preventDefault();
                let ulErrors = document.querySelector("div.errors")
                for (let i = 0; i < errors.length; i++) {
                    ulErrors.innerHTML += "<li>" + errors[i] + "</li>"
                }
            }

        })




})