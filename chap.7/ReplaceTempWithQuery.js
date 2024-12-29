class Order {

    constructor(quantity, price) {
        this.quantity = quantity;
        this.price = price;
    }

    get totalPrice() {
        const basePrice = this.quantity * this.price;

        if (basePrice > 1000) {
            return this.basePrice * 0.95;
        }

        return basePrice * 0.98;
    }
}

/////////////////////////////////////////////////////////////
class Order {
    constructor(quantity, price) {
        this.quantity = quantity;
        this.price = price;
    }

    get basePrice() {
        return this.quantity * this.price;
    }

    get totalPrice() {
        if (this.basePrice > 1000) {
            return this.basePrice * 0.95;
        }
        return this.basePrice * 0.98;
    }
}