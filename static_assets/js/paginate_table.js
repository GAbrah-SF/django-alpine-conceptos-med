const paginationLogic = {
    listConceptos: [], currentPage: '', itemsPerPage: '', searchTerm: 4,
    getConceptos(url) {
        axios.get(url).then(response => {
            this.listConceptos = response.data.reverse()

        }).catch(error => { // Manejar errores
            if (error.response) { // La solicitud fue hecha, pero el servidor respondió con un código de estado que no está en el rango 200
                console.error('Código de estado:', error.response.status)
                console.error('Respuesta del servidor:', error.response.data)

            } else if (error.request) { // La solicitud fue hecha, pero no se recibió respuesta
                console.error('No se recibió respuesta del servidor:', error.request)

            } else { // Error en la configuración de la solicitud
                console.error('Error de configuración:', error.message)
            }
        })
    },
    handleSearchInput() {
        // Verificar si 'this.searchTerm' es una cadena antes de reemplazar caracteres no numéricos
        if (typeof this.searchTerm === 'string') {
            this.searchTerm = this.searchTerm.replace(/\D/g, '')
        }
    },
    showNConcepts() {
        const n = parseInt(this.searchTerm)
        if (!isNaN(n) && n > 0) { // Establecer itemsPerPage para mostrar N conceptos por página
            this.itemsPerPage = n
            this.currentPage = 1 // Restablecer a la primera página al cambiar el número de conceptos

        } else if (n === 0) { // Mostrar mensaje de error o manejar el caso de 0
            swal.fire({
                position: 'center',
                icon: 'warning',
                background: "#000",
                title: 'Ingrese un número\nmayor a 0',
                showConfirmButton: false,
                timer: 2500
            })
            this.searchTerm = 4
        }

        if (n > 10) {
            swal.fire({
                position: 'center',
                icon: 'warning',
                background: "#000",
                title: 'Ingrese un número\nmenor o igual a 10',
                showConfirmButton: false,
                timer: 2500
            })
            this.searchTerm = 10
        }
    },
    paginatedData() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage
        const endIndex = startIndex + this.itemsPerPage
        return this.listConceptos.slice(startIndex, endIndex)
    },
    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--
        }
    },
    nextPage() {
        if (this.currentPage < Math.ceil(this.listConceptos.length / this.itemsPerPage)) {
            this.currentPage++
        }
    },
    totalPages() {
        return Math.ceil(this.listConceptos.length / this.itemsPerPage)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    Alpine.data('paginationLogic', () => paginationLogic)
})
