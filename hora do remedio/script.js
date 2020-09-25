function zera() {
    document.getElementById('anterior').value = ''
    document.getElementById('intervalo').value = ''
}
function calcular(ant, int) {
    let anterior = ant
    let intervalo = int
    let proximo

    let valor = anterior.split(':')
    if (valor.length < 2) {
        valor[1] = '00'
    }

    anterior = parseInt(valor[0])
    intervalo = parseInt(intervalo)
    if (!isNaN(anterior)) {
        proximo = anterior + intervalo
    } else {
        alert('Entrada inválida!')
        zera()
        return ''
    }

    if (proximo > 24) {
        proximo -= 24
    }
     return proximo + ':' + valor[1]
}

function enviar() {

    let anterior = document.getElementById('anterior').value
    let intervalo = document.getElementById("intervalo").value

    if (anterior == '' || intervalo.length == 0) {
        alert('Preencha os campos')
    } else {
        let next = calcular(anterior, intervalo)
        document.getElementById('proximo').value = next
    }
}

function ajudar() {
    alert(" -> Hora da dose anterior: preencha com a hora de 1 á 24, depois coloque o sinal ':' e finalize colocando o minuto de 01 á 60.\n Ex: 1:15, 15:45, 12:00.\n\n -> Intervalo: preencha com um número que representa de quantas em quantas horas voce deve tomar a próxima dose ex: tomar o remédio de 8 em 8 horas coloque o valor 8.\n\n -> Após tudo preenchido corretamente é só clicar em enviar e será calculado o horário da próxima dose do seu remédio.")
}

