import createStatementData from './createStatementData.js'

function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data, plays) {
    let result = '청구 내역 (고객명: ${data.customer})\n'

    for (let perf of invoice.performances) {
        result += '${perf.play.name}: ${usd(amountFor(perf.amount)/100)} (${perf.audience}석)\n';
    }

    let totalAmount = totalAmount();

    result += '총액: ${usd(data.totalAmount/100)}\n';
    result += '적립 포인트 : ${data.totalVolumeCredits}점\n';//-> 변수 인라인 하기
    return result;
}

function htmlStatement(invoice, plays) {
    return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
    let result = `<h1>Statement for ${data.customer}</h1>\n`;
    result += "<table>\n";
    result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>";
    for (let perf of data.performances) {
        result += `  <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
        result += `<td>${usd(perf.amount)}</td></tr>\n`;
    }
    result += "</table>\n";
    result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
    result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>\n`;
    return result;
}

function usd(aNumber) {
    return new Intl.NumberFor("en-US",
        {
            style: "currency", currency: "USD",
            minimumFractinoDigits: 2
        }).format;
}