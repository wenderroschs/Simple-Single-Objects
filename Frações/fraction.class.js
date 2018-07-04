export class Fraction {
    constructor(numerator, denominator) {
        this._numerator = numerator;
        this._denominator = denominator;
    }
    get numerator() {
        return this._numerator;
    }
    get denominator() {
        return this._denominator;
    }
    get canReduce() {
        for (let i = 2; i <= this._denominator; i++) {
            if (this._numerator % i === 0 && this._denominator % i === 0) {
                return true;
            }
        }
        return false;
    }
    toString() {
        return (this._numerator + '/' + this.denominator);
    }
    plus(a) {
        if (this._denominator === a.denominator) {
            return (this._numerator + a.numerator) + '/' + (this._denominator);
        } else {
            const n = (this._numerator * a.denominator);
            const m = (a.numerator * this._denominator);
            return `${n + m} / ${this._denominator * a.denominator}`;
        }
    }
    reduce() {
        for (let i = 2; i < this.denominator; i++) {
            if (this._numerator % i === 0 && this._denominator % i === 0) {
                this._denominator = this._denominator / i;
                this._numerator = this._numerator / i;
            }
        }
        return false;
    }
    divide(a) {
        const n = this._numerator * a.denominator;
        const m = this._denominator * a.numerator;
        return (n) + '/' + (m);
    }
    multiply(a) {
        const n = this._numerator * a.numerator;
        const m = this._denominator * a.denominator;
        return (n) + '/' + (m);
    }
    greaterThan(a) {
        const n = this._numerator * a.denominator;
        const m = a.numerator * this._denominator;
        if (this._denominator === a.denominator) {
            if (this._numerator > a.numerator) {
                return true;
            } else {
                return false;
            }
        } else {
            if (n > m) {
                return true;
            } else {
                return false;
            }
        }
    }
    lessThan(a) {
        const n = this._numerator * a.denominator;
        const m = a.numerator * this._denominator;
        if (this._denominator === a.denominator) {
            if (this._numerator < a.numerator) {
                return true;
            } else {
                return false;
            }
        } else {
            if (n < m) {
                return true;
            } else {
                return false;
            }
        }
    }
    equals(a) {
        const n = this._numerator * a.denominator;
        const m = a.numerator * this._denominator;
        if (this._denominator === a.denominator) {
            if (this._numerator === a.numerator) {
                return true;
            } else {
                return false;
            }
        } else {
            if (n === m) {
                return true;
            } else {
                return false;
            }
        }
    }
}
