if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
    charge = quantity * plan.summerRate;
} else {
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
}

//////////////////////////////////////////////

if (isSummer(date)) {
    charge = summerCharge(quantity);
} else {
    charge = regularCharge(quantity);
}

function isSummer(date) {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
}

function summerCharge(quantity) {
    return quantity * plan.summerRate;
}

function regularCharge(quantity) {
    return quantity * plan.regularRate + plan.regularServiceCharge;
}