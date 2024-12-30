class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get department() {
        return this._department;
    }
    set department(arg) {
        this._department = arg;
    }
}

class Department {
    constructor(chargeCode, manager) {
        this._chargeCode = chargeCode;
        this._manager = manager;
    }
    get chargeCode() {
        return this._chargeCode;
    }
    set chargeCode(arg) {
        this._chargeCode = arg;
    }
}

manager = aPerson.department.manager;
/////////////////////////////////////////////////////////////////////
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get manager() {
        return this._department.manager;
    }
}

class Department {
    constructor(chargeCode, manager) {
        this._chargeCode = chargeCode;
        this._manager = manager;
    }
    get chargeCode() {
        return this._chargeCode;
    }
    set chargeCode(arg) {
        this._chargeCode = arg;
    }
}
manager = aPerson.manager;