function estadoS0(simbolo) {
    if (simbolo === '0') {
        return 's0';
    } else if (simbolo === '1') {
        return 's1';
    } else {
        return false;
    }
}

function estadoS1(simbolo) {
    if (simbolo === '0' || simbolo === '1') {
        return 's2';
    } else {
        return false;
    }
}

function estadoS2(simbolo) {
    if (simbolo === '1') {
        return 's2';
    } else {
        return false;
    }
}

function verificarCadena(cadena) {
    let estadoActual = 's0';

    for (let i = 0; i < cadena.length; i++) {
        const simbolo = cadena[i];

        switch (estadoActual) {
            case 's0':
                estadoActual = estadoS0(simbolo);
                break;
            case 's1':
                estadoActual = estadoS1(simbolo);
                break;
            case 's2':
                estadoActual = estadoS2(simbolo);
                break;
            default:
                return false;
        }

        if (estadoActual === false) {
            return false;
        }
    }

    return estadoActual === 's2';
}

const cadena1 = "001111";
const cadena2 = "010101";

console.log("Cadena 1:", verificarCadena(cadena1));
console.log("Cadena 2:", verificarCadena(cadena2));