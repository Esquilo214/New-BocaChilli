function atualizarContador() {
    const horaAtual = new Date()

    const meiaNoite = new Date()
    meiaNoite.setHours(24, 0, 0, 0)

    const diferenca = meiaNoite - horaAtual

    if (diferenca <= 0) {
        document.getElementById("timer").innerText = "00:00:00"
        return;
    }

    // Tive que pesquisar a forma de calculas as horas, os minutos e os segundos. Essa foi a forma que encontrei.
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

    const horasFormatadas = String(horas).padStart(2, '0')
    const minutosFormatados = String(minutos).padStart(2, '0')
    const segundosFormatados = String(segundos).padStart(2, '0')

    document.getElementById("timer").innerText = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`
}

setInterval(atualizarContador, 1000)
atualizarContador()