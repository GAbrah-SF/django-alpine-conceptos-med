function deleteData(id, concepto) {
    swal.fire({
        background: "#000",
        position: 'center',
        icon: 'warning',
        title: `¿Eliminar concepto\n${concepto}?`,
        showConfirmButton: true,
        confirmButtonColor: '#19980b',
        confirmButtonText: 'SÍ',
        showCancelButton: true,
        cancelButtonColor: '#910018',
        cancelButtonText: 'NO',
    })
}
