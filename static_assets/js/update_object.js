function updateData() {
    let data = { // Obtener los valores de los elementos HTML y construir el objeto de datos
        "id": this.dataUpdate.id,
        "concepto": this.dataUpdate.concepto,
        "significado": this.dataUpdate.significado,
        "unidad": this.dataUpdate.unidad,
        "materia": this.dataUpdate.materia,
    }

    axios.put(this.urlRelativeActualizar, data).then(response => { // Manejar la respuesta exitosa
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
