function plumages(bird) {
    return new Map(birds.map(bird => [bird.name, plumage(bird)]));
}

function speeds(birds) {
    return new Map(birds.map(bird => [bird.name, airSpeedVelocity(bird)]));
}

function plumage(bird) {
    switch (bird.type) {
        case "EuropeanSwallow": return "average";
        case "AfricanSwallow": return (bird.numberOfCoconuts > 2) ? "tired" : "average";
        case "NorwegianBlueParrot": return (bird.voltage > 100) ? "scorched" : "beautiful";
        default: return "unknown";
    }
}

function airSpeedVelocity(bird) {
    switch (bird.type) {
        case "EuropeanSwallow": return 35;
        case "AfricanSwallow": return 40 - 2 * bird.numberOfCoconuts;
        case "NorwegianBlueParrot": return bird.isNailed ? 0 : 10 + bird.voltage / 10;
        default: return null;
    }
}

///////////////////////////////////////////////////////////

function plumage(bird) {
    return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow': return new EuropeanSwallow(bird);
        case 'AfricanSwallow': return new AfricanSwallow(bird);
        case 'NorwegianBlueParrot': return new NorwegianBlueParrot(bird);
        default: return new Bird(bird);
    }
}

class Bird {
    constructor(bird) {
        Object.assign(this, bird);
    }

    get plumage() {
        return "unknown";
    }

    get airSpeedVelocity() {
        return null;
    }
}

class EuropeanSwallow extends Bird {
    get plumage() {
        return "average";
    }

    get airSpeedVelocity() {
        return 35;
    }
}

class AfricanSwallow extends Bird {
    get plumage() {
        return (this.numberOfCoconuts > 2) ? "tired" : "average";
    }

    get airSpeedVelocity() {
        return 40 - 2 * this.numberOfCoconuts;
    }
}

class NorwegianBlueParrot extends Bird {
    get plumage() {
        return (this.voltage > 100) ? "scorched" : "beautiful";
    }

    get airSpeedVelocity() {
        return (this.isNailed) ? 0 : 10 + this.voltage / 10;
    }
}