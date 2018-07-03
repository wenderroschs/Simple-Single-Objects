export class ATM {
    constructor(numeroSerie) {
        this._numeroSerie = numeroSerie;
        this._notas = [
            [5, 0],
            [10, 0],
            [20, 0],
            [50, 0],
            [100, 0]
        ];
    }
    get numeroSerie() {
        return this._numeroSerie;
    }
    get valor() {
        let i = 0;
        for (const valor_cedulas of this.notas) {
            i += valor_cedulas[0] * valor_cedulas[1];
        }
        return i;
    }

    cedulas(cedulas) {
        for (let i = 0; i < 5; i++) {
            if (this._notas[i][0] === cedulas) {
                return this._notas[i][1];
            }
        }
        return 0;
    }
    abastecer(a, cedulas) {
        for (let i = 0; i < 5; i++) {
            if (this._notas[i][0] === cedulas) {
                if (this._notas[i][1] + a <= 100) {
                    this._notas[i][1] += a;
                    a = null;
                    break;
                }
            }
        }
    }
    
    retirar(valor) {
        let total = [];
        if (valor > this.valor) {
            return null;
        } else {
            for (let i = 4; i >= 0; i--) {
                for (let j = 0; j < 100; j++) {
                    if (this._notas[i][0] <= valor && this._notas[i][1]) {
                        this._notas[i][1]--;
                        valor -= this._notas[i][0];
                        total.push(this._notas[i]);
                    }
                    if (valor === 0 || valor < this._notas[1][0]) {
                        break;
                    }
                }
            }
            if (valor > 0) {
                for (const a of valor) {
                    for (let k = 0;  k <= 4; k++) {
                        if (this._notas[k][0] === a[0]) {
                            this._notas[k][1]++;
                        }
                    }
                }
            }
        }
    }
}
