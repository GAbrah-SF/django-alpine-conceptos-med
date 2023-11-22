function selectValue(elementId, value) {
    const selectElement = document.getElementById(elementId)
    const optionSelect = selectElement.querySelector(`[value="${value}"]`)

    if (optionSelect) {
        optionSelect.selected = true
        selectElement.dispatchEvent(new Event('change'))
    }
}

function openModalUpdate(dataTable) {
    selectValue('selectBimestreUpdate', dataTable.bimestre)
    selectValue('selectMateriaUpdate', dataTable.materia)
}

const renderObjectsUpdate = {
    listaMateriasUpdate: [], listaUnidadesUpdate: [],
    getMateriasUpdate(url_get_materias, bimestre_actual, url_get_unidades, materia_actual) {
        const url_materias = `${url_get_materias}?bimestre=${bimestre_actual}`
        const url_unidades = `${url_get_unidades}?materia=${materia_actual}`

        axios.get(url_materias).then(response => {
            this.responseData = response.data
            this.listaMateriasUpdate = response.data.materias || []

        }).catch(error => {
            console.error('Error al obtener materias:', error)
        })

        axios.get(url_unidades).then(response => {
            this.responseData = response.data
            this.listaUnidadesUpdate = response.data.unidades || []

        }).catch(error => {
            console.error('Error al obtener unidades:', error)
        })
    },
    getUnidadesUpdate(url_get_unidades, materia_actual) {
        const url = `${url_get_unidades}?materia=${materia_actual}`

        axios.get(url).then(response => {
            this.responseData = response.data
            this.listaUnidadesUpdate = response.data.unidades || []

        }).catch(error => {
            console.error('Error al obtener datos:', error)
        })
    },
    cleanUnidades() {
        this.listaUnidadesUpdate = []

        this.$nextTick(() => {
            selectValue('selectMateriaUpdate', '')
            selectValue('selectUnidadUpdate', '')
        })
    }
}

document.addEventListener("DOMContentLoaded", function () {
    Alpine.data('renderObjectsUpdate', () => renderObjectsUpdate)
})
