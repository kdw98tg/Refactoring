class PerformanceCalculator {
    constructor(aPerformance, aPlay) {
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get amount() {
        throw new Error('서브클래스에서 이용하세요.');
    }
}

class TragedyCalculator extends PerformanceCalculator {
    get amount() {
        let result = 40000;
        if (this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30);
        }
        return result;
    }

    get volumeCredits() {
        return Math.max(this.performance.audience - 30, 0);
    }
}

class ComedyCalculator extends PerformanceCalculator {
    get amount() {
        let result = 30000;
        if (this.performance.audience > 20) {
            result += 10000 + 500 * (this.performance.audience - 20);
        }
        result += 300 * this.performance.audience;
        return result;
    }

    get volumeCredits() {
        let volumeCredits = Math.max(this.performance.audience - 30, 0);
        volumeCredits += Math.floor(this.performance.audience / 5);
        return volumeCredits
    }
}

function createPerformanceCalculator(aPerformance, aPlay) {
    switch (aPlay.type) {
        case "tragedy": return new TragedyCalculator(aPerformance, aPlay);
        case "comedy": return new ComedyCalculator(aPerformance, aPlay);
        default: throw new Error("알 수 없는 장르 : ${aPlay.type}");
    }
}

export default function createStatementData(invoice, plays) {
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerformance);
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);

    function enrichPerformance(aPerformance) {
        const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));//계산기 생성
        const result = Object.assign({}, aPerformance);
        result.play = playFor(result);
        result.amount = calculator.amount;//함수를 클래스로 이동시킨 후, 인라인
        result.volumeCredits = calculator.volumeCredits;//함수를 클래스로 이동시킨 후, 인라인
        return result;
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function totalAmount(data) {
        return data.performances.reduce((total, p) => total + p.amount, 0);
    }

    function totalVolumeCredits(data) {
        return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
    }
}
