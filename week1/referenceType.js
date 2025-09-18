//object

// 객체 리터럴
let person = {
    name: "홍길동",
    age: 25,
    city: "서울",
    greet: function() {
        return `안녕하세요, ${this.name}입니다.`;
    }
};

// 프로퍼티 접근
console.log(person.name);       // 점 표기법
console.log(person["age"]);     // 대괄호 표기법

// 프로퍼티 추가/수정
person.job = "개발자";
person.age = 26;

// 프로퍼티 삭제
delete person.city;

//Array
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "문자열", true, null, {name: "객체"}];

// 배열 메서드들
numbers.push(6);                // 끝에 추가
numbers.pop();                  // 끝에서 제거
numbers.unshift(0);            // 앞에 추가
numbers.shift();               // 앞에서 제거

// 고차 함수들
let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((acc, n) => acc + n, 0);


//Function
// 함수 선언문
function add(a, b) {
    return a + b;
}

// 함수 표현식
let multiply = function(a, b) {
    return a * b;
};

// 화살표 함수 (ES6+)
let divide = (a, b) => a / b;

// 함수도 객체
console.log(typeof add);        // "function"
add.customProperty = "값";
console.log(add.customProperty); // "값"

//타입 확인
// typeof 연산자
console.log(typeof 42);         // "number"
console.log(typeof "문자열");    // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (JavaScript의 유명한 버그)
console.log(typeof []);         // "object"
console.log(typeof {});         // "object"
console.log(typeof function(){}); // "function"

// 더 정확한 타입 확인
console.log(Object.prototype.toString.call([]));    // "[object Array]"
console.log(Object.prototype.toString.call({}));    // "[object Object]"
console.log(Array.isArray([]));                     // true

// 타입 변환
// 명시적 변환

// 문자열로 변환
let num = 42;
let str1 = String(num);         // "42"
let str2 = num.toString();      // "42"

// 숫자로 변환
let str = "123";
let num1 = Number(str);         // 123
let num2 = parseInt(str);       // 123
let num3 = parseFloat("123.45"); // 123.45

// 불리언으로 변환
let bool1 = Boolean(1);         // true
let bool2 = Boolean("");        // false

// 암시적 변환
// 문자열 연결
console.log("5" + 3);           // "53"
console.log(5 + "3");           // "53"

// 산술 연산
console.log("5" - 3);           // 2
console.log("5" * 3);           // 15
console.log("5" / 3);           // 1.6666...

// 불리언 변환
if ("") console.log("실행됨");   // 실행되지 않음 (빈 문자열은 falsy)
if ("문자열") console.log("실행됨"); // 실행됨 (문자열은 truthy)