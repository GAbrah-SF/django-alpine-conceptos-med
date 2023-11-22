function cleanForm(dataForm) {
    const selectBimestre = document.getElementById('selectBimestre')
    const selectMateria = document.getElementById('selectMateria')

    selectBimestre.selectedIndex = 0
    selectMateria.selectedIndex = 0

    selectBimestre.dispatchEvent(new Event('change'))
    selectMateria.dispatchEvent(new Event('change'))

    Object.keys(dataForm).forEach(key => {
        dataForm[key] = ''
    })
}
