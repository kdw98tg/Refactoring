class Person {
    get officeAreaCode() {
        return this._officeAreaCode;
    }
    set officeAreaCode(arg) {
        this._officeAreaCode = arg;
    }
}

class TelephoneNumber {
    get officeAreaCode() {
        return this._officeAreaCode;
    }
    set officeAreaCode(arg) {
        this._officeAreaCode = arg;
    }
}

/////////////////////////////////////////////////////////////////////
class Person {
    constructor(officeAreaCode, officeNumber) {
        this._officeAreaCode = officeAreaCode;
        this._officeNumber = officeNumber;
    }
    get officeAreaCode() {
        return this._officeAreaCode;
    }
    set officeAreaCode(arg) {
        this._officeAreaCode = arg;
    }
    get officeNumber() {
        return this._officeNumber;
    }
    set officeNumber(arg) {
        this._officeNumber = arg;
    }
}