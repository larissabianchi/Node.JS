//const square = function (x) {
//    return x * x
//}

//const square = (x) => {
//    return x * x
//}

//const square = (x) => x * x

//console.log(square(3))
const evento = {
    nome: 'Larissa',
    convidados: ['Vincent', 'Giulio', 'Luan'],
    printGuestList() {
        console.log('Festa de Aniversário: '+ this.nome)

        this.convidados.forEach((convidado) => {
            console.log(convidado + ' virá na festa de aniverário da ' + this.nome)
        })
    }
}

evento.printGuestList();