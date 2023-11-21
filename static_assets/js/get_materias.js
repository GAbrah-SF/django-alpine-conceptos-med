function getMaterias() {
    let url = `${this.urlRelativeGetMaterias}?bimestre=${this.dataForm.selectBimestre}`
    axios.get(url).then(response => {
        this.responseData = response.data  // Asigna data a responseData para uso posterior si es necesario
        this.listaMaterias = response.data.materias || [] // Actualiza el array de materias con los datos recibidos

    }).catch(error => {
        console.error('Error al obtener datos:', error)
    })
}
