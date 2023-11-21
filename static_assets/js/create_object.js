function sendData() {
    let data = { // Obtener los valores de los elementos HTML y construir el objeto de datos
        "concepto": this.dataForm.inputConcepto,
        "significado": this.dataForm.inputSignificado,
        "unidad": this.dataForm.selectMateria,
        "materia": this.dataForm.selectUnidad,
    }

    axios.post(this.urlRelativeGuardar, data, { // Enviar la solicitud Axios
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': this.csrfToken
        }
    }).then(response => { // Manejar la respuesta exitosa
        let success = response.data
        swal.fire({
            position: 'center',
            icon: success.icon,
            background: "#000",
            title: success.message,
            showConfirmButton: false,
            timer: 2500
        }).then(function () {
            setTimeout('document.location.reload()', 1000) // Recargar la página
        })
    }).catch(error => { // Manejar errores
        swal.fire({
            position: 'center',
            icon: error.icon,
            background: "#000",
            title: error.message,
            showConfirmButton: false,
            timer: 2500
        })
    })
}
