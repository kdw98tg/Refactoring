class Order {
    constructor(data) {
        this.priority = data.priority;
    }
    get priority() {
        return this._priority;
    }
    set priority(aString) {
        this._priority = aString;
    }
}

class Priority {
    constructor(value) {
        this.value = value;
    }
    isHigherThan(otherPriority) {
        return this.value > otherPriority.value;
    }
}

highPriorityCount = orders.filter(o => o.priority.value > 'normal').length;

highPriorityCount = orders.filter(o => o.priority.isHigherThan(new Priority('normal'))).length;