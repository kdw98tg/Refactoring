/////////////////////////////////////////
//변경전
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}
//////////////////////////////////////////
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    const price = applyShipping(price, shippingMethod, quantity, discount);
    return price;
}
function applyShipping(price, shippingMethod, quantity, discount) {
    const shippingPerCase = (price > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}
//////////////////////////////////////////

//////////////////////////////////////////
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    const priceData = { basePrice: basePrice, quantity: quantity, discount: discount };
    const price = applyShipping(priceData, shippingMethod);
    return price;
}
function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
}

//////////////////////////////////////////

//////////////////////////////////////////
function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    return applyShipping(priceData, shippingMethod);
}
function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    return { basePrice: basePrice, quantity: quantity, discount: discount };
}
function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
}
//////////////////////////////////////////

//////////////////////////////////////////
function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    return applyShipping(priceData, shippingMethod);
}
function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    return { basePrice: basePrice, quantity: quantity, discount: discount };
}
function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount + shippingCost;
}
//////////////////////////////////////////