function statement(invoice, plays) {
    let result = '청구 내역 (고객명: ${invoice.customer})\n'

    for (let perf of invoice.performances) {
        //청구 내역을 출력함
        result += '${playFor(perf).name}: ${usd(amountFor(perf)/100)} (${perf.audience}석)\n';
    }//for문 종료

    let totalAmount = totalAmount();//->반복문 쪼개기

    result += '총액: ${usd(totalAmount/100)}\n';
    result += '적립 포인트 : ${totalVolumeCredits(perf)}점\n';//-> 변수 인라인 하기
    return result;

    function volumeCreditsFor(aPerformance) {
        let volumeCredits = 0;

        volumeCredits += Math.max(aPerformance.audience - 30, 0);
        if ("comedy" == playFor(aPerformance).type) // -> 변수 인라인 하기{
            volumeCredits += Math.floor(aPerformance.audience / 5);

        return volumeCredits;
    }

    function usd(aNumber) {
        return new Intl.NumberFor("en-US",
            {
                style: "currency", currency: "USD",
                minimumFractinoDigits: 2
            }).format;
    }

    function totalVolumeCredits() {
        let result = 0;
        for (let perf of invoice.performaces) {
            result += volumeCreditsFor(perf);
        }
        return result;
    }

    function totalAmount() {
        let result = 0;
        for (let perf of invoice.performances) {
            result += amountFor(perf);
        }
        return result;
    }

    function amountFor(aPerformance) {
        let result = 0;

        switch (playFor(aPerformance).type) {
            case "tragedy": //비극
                thisAmount = 4000;
                if (aPerformance.audience > 30) {
                    thisAmount += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                thisAmount = 3000;
                if (aPerformance.audience > 20) {
                    thisAmount += 10000 + 500 * (aPerformance.audiece - 20);
                }
                thisAmount += 300 * aPerformance.audience;
                break;

            default:
                throw new Error('알 수 없는 장르: ${playFor(aPerformance).type}');
        }

        return result;//결과값 반환
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }
}