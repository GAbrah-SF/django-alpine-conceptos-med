function searchObject() {
    const url = `${this.urlRelativeGetConceptos}?search=${this.searchConcept}`
    axios.get(url).then(response => {
        this.listaConceptos = response.data || []

    }).catch(error => { // Maneja errores aquí
        console.error('Error al obtener datos:', error)
    })
}
