class Site {
    constructor(customer) {
        this.customer = customer;
    }
    get customer() {
        return (this._customer === "unknown") ? new UnknownCustomer() : this._customer;
    }
}

class Customer {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this.name;
    }
    get billingPlan() {
        return this.billingPlan;
    }
    set billingPlan(arg) {
        this.billingPlan = arg;
    }
    get paymentHistory() {
        return this.paymentHistory;
    }
    get isUnkown() {
        return false;
    }
}

class UnknownCustomer {
    get name() {
        return "occupant";
    }
}

// const aCustomer = site.customer;
// let customerName;
// if (aCustomer === "unknown") customerName = "occupant";
// else customerName = aCustomer.name;

// const plan = (aCustomer === "unknown") ? registry.billingPlans.basic : aCustomer.billingPlan;

////////////////////////////////////////////////////
const aCustomer = site.customer;
const customerName = aCustomer.name;


