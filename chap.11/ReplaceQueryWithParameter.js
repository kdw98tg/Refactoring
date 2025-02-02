class HeatingPlan {

    constructor(min, max) {
        this.min = min;
        this.max = max;
    }

    get targetTemperature() {
        if (thermostat.selectedTemperature > this.max) {
            return this.max;
        } else if (thermostat.selectedTemperature < this.min) {
            return this.min;
        }
        return thermostat.selectedTemperature;
    }
}

class Thermostat { }

//클라이언트
const thePlan = new HeatingPlan(10, 20);
const thermostat = new Thermostat();
if (thePlan.targetTemperature > thermostat.currentTemperature) {
    setToHeat();
} else if (thePlan.targetTemperature < thermostat.currentTemperature) {
    setToCool();
} else {
    setOff();
}