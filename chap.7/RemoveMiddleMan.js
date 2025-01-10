class Person {
    constructor(department) {
        this.department = department;
    }

    get manager() {
        return this.department.manager;
    }

    get name() {
        return this.department.name;
    }

    get employees() {
        return this.department.employees;
    }
}

class Department {
    constructor(manager, name, employees) {
        this.manager = manager;
        this.name = name;
        this.employees = employees;
    }

    get manager() {
        return this.manager;
    }

    get employees() {
        return this.employees;
    }

    get departmentName() {
        return this.name;
    }
}

//////////////////////////////////////////////////////

class Person {
    constructor(department) {
        this.department = department;
    }

    get department() {
        return this.department;
    }
}

class Department {
    constructor(manager, name, employees) {
        this.manager = manager;
        this.name = name;
        this.employees = employees;
    }

    get manager() {
        return this.manager;
    }

    get name() {
        return this.name;
    }

    get employees() {
        return this.employees;
    }
}   

const aPerson = new Person(new Department("John", "Sales", ["Alice", "Bob", "Charlie"]));
const manager = aPerson.department.manager;
