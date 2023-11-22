function openModalUpdate(dataTable) {
    const selectBimestre = document.getElementById('selectBimestreUpdate')
    const optionSelectBimestre = selectBimestre.querySelector(`[value="${dataTable.bimestre}"]`)

    if (optionSelectBimestre) {
        optionSelectBimestre.selected = true
        selectBimestre.dispatchEvent(new Event('change'))
    }

    const selectMateria = document.getElementById('selectMateriaUpdate')
    const optionSelectMateria = selectMateria.querySelector(`[value="${dataTable.materia}"]`)

    if (optionSelectMateria) {
        optionSelectMateria.selected = true
        selectMateria.dispatchEvent(new Event('change'))
    }
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
        const selectUnidad = document.getElementById('selectUnidadUpdate')
        const optionSelectUnidad = selectUnidad.querySelector(`[value=""]`)

        if (optionSelectUnidad) {
            optionSelectUnidad.selected = true
            selectUnidad.dispatchEvent(new Event('change'))
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    Alpine.data('renderObjectsUpdate', () => renderObjectsUpdate)
})

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
