function stateS0(char) {
    // If there is a [0-9] digit or a - sign go to s1, else crash
    if (char >= '0' && char <= '9' || char === '-') {
        return 's1';
    } else {
        return false;
    }
}

function stateS1(char) {
    //if there is a [0-9] digit stay in s1 / if there is a . or , go to s2 / if there is a +-*/^ go to s3 / else crash
    if (char >= '0' && char <= '9') {
        return 's1';
    } else if (char === '.' || char === ',') {
        return 's2';
    } else if (char === '+' || char === '-' || char === '*' || char === '/' || char === '^') {
        return 's3';
    } else {
        return false;
    }
}

function stateS2(char) {
    //if there is a [0-9] digit stay in s2 / if there is a +-*/^ go to s3 / else crash
    if (char >= '0' && char <= '9') {
        return 's2';
    } else if (char === '+' || char === '-' || char === '*' || char === '/' || char === '^') {
        return 's3';
    } else {
        return false;
    }
}

function stateS3(char) {
    // If there is a space stay in s3 / if there is a [0-9] digit go to s4 / if there is a - sign go to s1 / else crash
    if (char === ' ') {
        return 's3';
    } else if (char >= '0' && char <= '9') {
        return 's4';
    } else if (char === '-') {
        return 's1';
    } else {
        return false;
    }
}

function stateS4(char) {
    // If there is a [0-9] digit stay in s4 / if there is a +-*/^ go to s1 / if there is a . or , go to s5 / else crash
    if (char >= '0' && char <= '9') {
        return 's4';
    } else if (char === '+' || char === '-' || char === '*' || char === '/' || char === '^') {
        return 's1';
    } else if (char === '.' || char === ',') {
        return 's5';
    } else {
        return false;
    }
}

function stateS5(char) {
    // If there is a [0-9] digit stay in s5 / if there is a +-*/^ go to s1 / else crash
    if (char >= '0' && char <= '9') {
        return 's5';
    } else if (char === '+' || char === '-' || char === '*' || char === '/' || char === '^') {
        return 's1';
    } else {
        return false;
    }
}

function verifyString(chain) {
    let stateActual = 's0';

    for (let i = 0; i < chain.length; i++) {
        const char = chain[i];

        switch (stateActual) {
            case 's0':
                stateActual = stateS0(char);
                break;
            case 's1':
                stateActual = stateS1(char);
                break;
            case 's2':
                stateActual = stateS2(char);
                break;
            case 's3':
                stateActual = stateS3(char);
                break;
            case 's4':
                stateActual = stateS4(char);
                break;
            case 's5':
                stateActual = stateS5(char);
                break;
            default:
                return false;
        }

        if (stateActual === false) {
            return 'Error de Caracter';
        }
    }

    return stateActual === 's4' || stateActual === 's5';
}

const chain1 = "5+5";
const chain2 = "43.5+4-6*5";
const chain3 = "23*3";
const chain4 = "10/2";
const chain5 = "10,5*3";
const chain6 = "1**3";
const chain7 = "1+3-5*a3/2^3";

console.log("Cadena 1:", verifyString(chain1));
console.log("Cadena 2:", verifyString(chain2));
console.log("Cadena 3:", verifyString(chain3));
console.log("Cadena 4:", verifyString(chain4));
console.log("Cadena 5:", verifyString(chain5));
console.log("Cadena 6:", verifyString(chain6));
console.log("Cadena 7:", verifyString(chain7));