function payAmount(employee) {
    let result;
    if (employee.isSeparated) {
        result = { amount: 0, reasonCode: "SEP" };
    }
    else {
        if (employee.isRetired) {
            result = { amount: 0, reasonCode: "RET" };
        }
        else {
            lorem.ipsum(dolor.sitAmet);
            consectetur.adipiscing.elit();
            sed.do.eiusmod = tempor.incididunt.ut.labore.et.dolore.magna.aliqua();
            ut.enim.ad(minim.veniam);
            result = someFinalComputation();
        }
    }
    return result;
}
///////////////////////////////////////////////////////////
function payAmount(employee) {
    let result;
    
    if (employee.isSeparated) return { amount: 0, reasonCode: "SEP" };
    if (employee.isRetired) return { amount: 0, reasonCode: "RET" };

    lorem.ipsum(dolor.sitAmet);
    consectetur.adipiscing.elit();
    sed.do.eiusmod = tempor.incididunt.ut.labore.et.dolore.magna.aliqua();
    ut.enim.ad(minim.veniam);
    result = someFinalComputation();
    return result;
}
