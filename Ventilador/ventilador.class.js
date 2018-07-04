export class Ventilator {
    constructor(watts, brand, minRPM, maxRPM) {
        this._brand = brand;
        this._watts = watts;
        this._minRPM = minRPM;
        this._maxRPM = maxRPM;
        this._rpm = 0;
        this._on = false;
        this._velocity = 0;
    }
    get brand() {
        return this._brand;
    }
    get watts() {
        return this._watts;
    }
    get minRPM() {
        return this._minRPM;
    }
    get maxRPM() {
        return this._maxRPM;
    }
    get on() {
        return this._on;
    }
    get off() {
        return !this._on;
    }
    get velocity() {
        return this._velocity;
    }
    get rpm() {
        return this._rpm;
    }
    speedUp() {
        this._on = true;
        if (this._velocity < 3) {
            this._velocity++;
            if (this._velocity === 1) {
                this._rpm = this._minRPM;
            }
            if (this._velocity === 2) {
                this._rpm = ((this._minRPM + this._maxRPM) / 2);
            }
            if (this.velocity === 3) {
                this._rpm = this._maxRPM;
            }
        }
    }
    slowDown() {
        if (this._velocity === 1) {
            this._on = !this._on;
            this._rpm = 0;
            this._velocity = 0;
        } else {
            if (this._velocity > 0) {
                this._velocity--;
            }
            if (this._velocity === 2) {
                this._rpm = ((this._minRPM + this.maxRPM) / 2);
            }
            if (this.velocity === 1) {
                this._rpm = this.minRPM;
            }
        }
    }
    turnOff() {
        this._on = false;
        this._velocity = 0;
        this._rpm = 0;
    }
}
