const pdt1 = "아방핏 도톰하찌 소라색 니트";
const pdt2 = "아이스 아메리카노";
const pdt3 = "플레어 스커트";
const pdt1Price = 34000;
const pdt2Price = 2000;
const pdt3Price = 27000;
const discountRate = 15;
const freeShippingLimit = 50000;
const shippingFee = 3000;

const isMember = true;
const memberDiscount=5;

console.log("장바구니 계산기")
console.log("====================")
const realPrice = pdt1Price + pdt2Price + pdt3Price;
const DiscountedAmount = (realPrice) * (discountRate / 100);
const FinalPrice = realPrice - DiscountedAmount;

console.log('상품명: ${pdt1}');
console.log('상품명: ${pdt2}');
console.log('상품명: ${pdt3}');
console.log('정가: ${realPrice.toLocaleString()}원');
console.log('기본 할인: -${DiscountedAmount.toLocaleString()}원 (${discountRate}%)');
// console.log('기본할인: ${realPrice.toLocaleString()}원 (${discountRate}%');


// 2단계: 회원 추가 할인 계산
let memberDiscountAmount = 0;
let finalDiscountedPrice = basicDiscountedPrice;

if (isMember) {
    memberDiscountAmount = basicDiscountedPrice * (memberDiscountRate / 100);
    finalDiscountedPrice = basicDiscountedPrice - memberDiscountAmount;
    console.log(`👑 회원 할인: -${memberDiscountAmount.toLocaleString()}원 (${memberDiscountRate}%)`);
}