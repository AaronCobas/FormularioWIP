const formulario = document.getElementById("formulario")
formulario.addEventListener("submit",capturarDatos)
function capturarDatos (event) {
    event.preventDefault()
    const inputUsuario = document.getElementById("exampleInputText1").value
    const inputEmail = document.getElementById("exampleInputEmail1").value
    const inputConstrasenia = document.getElementById("exampleInputPassword1").value
    console.log(inputUsuario, inputEmail, inputConstrasenia)
    }
