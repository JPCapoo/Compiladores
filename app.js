function verificarCadena(cadena) {
    let estadoActual = 's0';

    for (let i = 0; i < cadena.length; i++) {
        const simbolo = cadena[i];

        switch (estadoActual) {
            case 's0':
                if (simbolo === '0') {
                    estadoActual = 's0';
                } else if (simbolo === '1') {
                    estadoActual = 's1';
                } else {
                    return false;
                }
                break;
            case 's1':
                if (simbolo === '0' || simbolo === '1') {
                    estadoActual = 's2';
                } else {
                    return false;
                }
                break;
            case 's2':
                if (simbolo === '1') {
                    estadoActual = 's2';
                } else {
                    return false;
                }
                break;
            default:
                return false;
        }
    }

    return estadoActual === 's2';
}

const cadena1 = "001111";
const cadena2 = "010101";

console.log("Cadena 1:", verificarCadena(cadena1));
console.log("Cadena 2:", verificarCadena(cadena2)); 