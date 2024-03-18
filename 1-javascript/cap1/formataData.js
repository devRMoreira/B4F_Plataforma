//mm-dd-aaaa

function formataData(data) {
    const mes = data.getMonth() + 1

    const dia = data.getDate()

    const ano = data.getFullYear()

    return `${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}-${ano}`
}


//dd-mm-aaaa

function formataData(data) {
    const mes = data.getMonth() + 1

    const dia = data.getDate()

    const ano = data.getFullYear()

    return `${dia.toString().padStart(2, '0')}-${mes.toString().padStart(2, '0')}-${ano}`
}