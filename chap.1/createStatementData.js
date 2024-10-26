function createStatementData(invoice, plays) {
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerformance);
    statementData.totalAmount = totalAmount(statementData);//totalAmount 함수를 statement의 중첩함수로 만들어서 중간 데이터 생성
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);//totalVolumeCredits 함수를 statement의 중첩함수로 만들어서 중간 데이터 생성


    function enrichPerformance(aPerformance) {
        const result = Object.assign({}, aPerformance);//얕은 복사 수행
        result.play = playFor(result);//playFor 함수를 statement의 중첩함수로 만들어서 중간 데이터 생성
        result.amount = amountFor(result);//amountFor 함수를 statement의 중첩함수로 만들어서 중간 데이터 생성
        result.volumeCredits = volumeCreditsFor(result);//volumeCreditsFor 함수를 statement의 중첩함수로 만들어서 중간 데이터 생성
        return result;
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function amountFor(aPerformance) {
        let result = 0;

        switch (aPerformance.play.type) {
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

    function volumeCreditsFor(aPerformance) {
        let volumeCredits = 0;

        volumeCredits += Math.max(aPerformance.audience - 30, 0);
        if ("comedy" == aPerformance.play.type) // -> 변수 인라인 하기{
            volumeCredits += Math.floor(aPerformance.audience / 5);

        return volumeCredits;
    }

    function totalAmount(data) {
        return data.performances.reduce((total, p) => total + p.amount, 0);
    }

    function totalVolumeCredits(data) {
        return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
    }
}
