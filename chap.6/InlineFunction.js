////////////////////////////////////////////////////////////////
//변경 전
function rating(driver) {
    return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
    return driver.numberOfLateDeliveries > 5;
}

// 변경 후
function getRating(driver) {
    return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//변경 전
function reportLines(customer) {
    const lines = [];
    gatherCustomerData(lines, customer);
    return lines;
}

function gatherCustomerData(lines, customer) {
    lines.push(["name", customer.name]);
    lines.push(["location", customer.location]);
}

//변경 후
function reportLines(customer) {
    const lines = [];
    lines.push(["name", customer.name]);
    lines.push(["location", customer.location]);
    return lines;
}
////////////////////////////////////////////////////////////////