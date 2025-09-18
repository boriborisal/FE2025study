let sym1 = Symbol();
let sym2 = Symbol("description");
let sym3 = Symbol("description");

console.log(sym2 === sym3); // false (각각 고유함)

// 객체 프로퍼티 키로 사용
let obj = {};
obj[sym1] = "값";
console.log(obj[sym1]);     // "값"