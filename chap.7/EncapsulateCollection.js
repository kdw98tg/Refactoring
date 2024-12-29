class Person {
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    get name() {
        return this._name;
    }
    get courses() {
        return this._courses;
    }
    set courses(aList) {
        this._courses = aList;
    }

    addCourse(aCourse) {
        this.courses.push(aCourse);
    }
    removeCourse(aCourse) {
        this.courses = this.courses.filter(c => c.name !== aCourse.name);
    }
}

class Course {
    constructor(name, isAdvanced) {
        this.name = name;
        this.isAdvanced = isAdvanced;
    }
    get name() {
        return this._name;
    }
    get isAdvanced() {
        return this._isAdvanced;
    }
}

for(const name of ['Kai', 'John', 'Jane', 'Jim']) {
    aPerson.courses.push(new Course(name, true));
}

for(const name of ['Kai', 'John', 'Jane', 'Jim']) {
    aPerson.addCourse(new Course(name, true));
}
