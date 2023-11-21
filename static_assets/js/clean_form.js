function cleanForm(dataForm) {
    // Busca el elemento option dentro del select con el valor específico
    const selectBimestre = document.getElementById('selectBimestre')
    const selectMateria = document.getElementById('selectMateria')

    const optionSelectBimestre = selectBimestre.querySelector(`[value=""]`)
    const optionSelectMateria = selectMateria.querySelector(`[value=""]`)

    if (optionSelectBimestre || optionSelectMateria) { // Verifica si se encontró la opción y la selecciona si es así
        optionSelectBimestre.selected = true
        optionSelectMateria.selected = true
        selectBimestre.dispatchEvent(new Event('change'))
        selectMateria.dispatchEvent(new Event('change'))
    }

    const formKeys = Object.keys(dataForm) // Obtiene las claves del objeto dataForm

    formKeys.forEach(key => { // Establece los valores de todas las claves como cadenas vacías
        dataForm[key] = ''
    })
}
