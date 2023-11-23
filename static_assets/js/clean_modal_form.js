function selectValue(elementId, value) {
    const selectElement = document.getElementById(elementId)
    const optionSelect = selectElement.querySelector(`[value="${value}"]`)

    if (optionSelect) {
        optionSelect.selected = true
        selectElement.dispatchEvent(new Event('change'))
    }
}

function cleanForm(dataForm) {
    selectValue('selectBimestre', "")
    selectValue('selectMateria', "")

    Object.keys(dataForm).forEach(key => {
        dataForm[key] = ''
    })
}
