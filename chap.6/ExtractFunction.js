//유효범위를 벗어나는 변수가 없을 때

function printOwing(invoice) {

    printBanner();
    const outstanding = calculateOutstanding(invoice);
    recordDueDate(invoice);
    printDetails(invoice, outstanding);


    function printDetails(invoice, outstanding) {
        console.log(`고객명: ${invoice.customer}`);
        console.log(`채무액: ${outstanding}`);
        console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
    }

    function calculateOutstanding(invoice) {
        let result = 0;
        for (const o of invoice.orders) {
            result += o.amount;
        }
        return result;
    }

    function recordDueDate(invoice) {
        const today = new Date();
        invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    }

    function printBanner() {
        console.log("***********************");
        console.log("**** 채무 표시 ****");
        console.log("***********************");
    }
}
