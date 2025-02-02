function getTotalOutstandingAndSendBill() {
    const result = customer.invoices.reduce((sum, each) => each.amount + sum, 0);
    sendBill(customer, result);
    return result;
}

function sendBill(customer, amount) {
    console.log(`sending bill for ${amount} to ${customer}`);
}

//////////////////////////////////////////

function getTotalOutstanding() {
    return customer.invoices.reduce((sum, each) => each.amount + sum, 0);
}

function sendBill(customer) {
    emailGateway.send(formatBill(customer));
}

//클라이언트
const customer = site.customer;
const outstanding = getTotalOutstanding(customer);
sendBill(customer, outstanding);
