let bigNumber = 123456789012345678901234567890n;
let anotherBig = BigInt("123456789012345678901234567890");

console.log(typeof bigNumber); // "bigint"

// Number와 BigInt는 직접 연산 불가
// console.log(1 + 1n);        // TypeError
console.log(1 + Number(1n));   // 2 (변환 후 연산)