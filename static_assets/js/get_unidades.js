function getUnidades() {
    let url = `${this.urlRelativeGetUnidades}?materia=${this.dataForm.selectMateria}` // Construye la URL completa para la solicitud GET
    axios.get(url).then(response => {
        this.responseData = response.data  // Asigna data a responseData para uso posterior si es necesario
        this.listaUnidades = response.data.unidades || [] // Actualiza el array de unidades con los datos recibidos

    }).catch(error => { // Maneja errores aquí
        console.error('Error al obtener datos:', error)
    })
}
