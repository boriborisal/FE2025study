//스코프

// 전역 스코프
let globalVar = "전역 변수";

function outerFunction() {
    // 함수 스코프
    let functionVar = "함수 변수";
    
    if (true) {
        // 블록 스코프
        let blockVar = "블록 변수";
        console.log(globalVar);     // 접근 가능
        console.log(functionVar);   // 접근 가능
        console.log(blockVar);      // 접근 가능
    }
    
    // console.log(blockVar);       // ReferenceError (블록 외부에서 접근 불가)
}

// 호이스팅
// var 호이스팅
console.log(hoistedVar);        // undefined (선언은 호이스팅, 초기화는 안됨)
var hoistedVar = "값";

// let/const는 TDZ(Temporal Dead Zone)
// console.log(letVar);         // ReferenceError
let letVar = "let 변수";

// 함수 호이스팅
console.log(hoistedFunction()); // "호이스팅됨!" (함수 선언문은 완전히 호이스팅)

function hoistedFunction() {
    return "호이스팅됨!";
}