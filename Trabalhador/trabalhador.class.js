export class Trabalhador {
    constructor(nome, cargo, salarioHr, CHdiaria) {
        this._nome = nome;
        this._cargo = cargo;
        this._salarioHr = salarioHr;
        this._CHdiaria = CHdiaria;
    }
    get nome() {
        return this._nome;
    }
    get cargo() {
        return this._cargo;
    }
    get salarioHr() {
        return this._salarioHr;
    }
    get CHdiaria() {
        return this._CHdiaria;
    }
    get SalarioDia() {
        const salariodia = (this._CHdiaria * this._salarioHr);
        return ('R$ ' + salariodia);
    }
    toString() {
        return `Nome ${this._nome} cargo ${this._cargo}`;
    }
    aumentarSalario(valor) {
        this._salarioHr += valor;
    }
    aiminuirSalario(valor) {
        this._salarioHr -= valor;
    }
    aumentarCH(horas) {
        this._CHdiaria += horas;
    }
    diminuirCH(horas) {
        this._CHdiaria -= horas;
    }
    cargaHorariaMensal(diasTrabalhados) {
        return (this._CHdiaria * diasTrabalhados) + ' horas';
    }
    salarioMensal(diasTrabalhados) {
        const chmensal = this._CHdiaria * diasTrabalhados;
        return ('R$ ' + (chmensal*this.salarioHr));
    }
}
