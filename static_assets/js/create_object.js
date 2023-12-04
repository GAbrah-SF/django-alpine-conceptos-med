function sendData() {
    let data = { // Obtener los valores de los elementos HTML y construir el objeto de datos
        "concepto": this.dataForm.inputConcepto,
        "significado": this.dataForm.inputSignificado,
        "materia": this.dataForm.selectMateria,
        "unidad": this.dataForm.selectUnidad,
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
            icon: error.response.data.icon,
            background: "#000",
            title: error.response.data.message,
            showConfirmButton: false,
            timer: 2500
        })
    })
}
