---
title: Javascript - Expression & Statement
lang: ko
description: 자바스크립트에서 표현식과 문은 비슷해 보이지만 반드시 구분해서 이해해야 하는 개념입니다. 자바스크립트의 모든 코드는 표현식 또는 문으로 구성되어 있습니다. 그런 만큼 자바스크립트 문법의 구조를 이루는 매우 중요한 개념이라 할 수 있습니다.
meta:
  - property: og:title
    content: Javascript - Expression & Statement
  - property: og:description
    content: 같은 듯 다른, 그리고 중요한 자바스크립트의 표현식과 문
  - property: og:image
    content: /images/javascript-logo.png
tags: ["javascript"]
shortDescription: 같은 듯 다른, 그리고 중요한 자바스크립트의 표현식과 문
writtenDate: "2019-12-18 14:37:00"
modifiedDate: "2019-12-18 14:37:00"
---

![Javascript-logo](/images/javascript-logo.png)

# {{ $frontmatter.title }}

## 표현식과 문

자바스크립트에서 **표현식(Expression)** 과 **문(Statement)** 은 비슷해 보이지만 반드시 구분해서 이해해야 하는 개념입니다. 자바스크립트의 모든 코드는 표현식 또는 문으로 구성되어 있습니다. 그런 만큼 자바스크립트 문법의 구조를 이루는 매우 중요한 개념이라 할 수 있습니다.

## 표현식

표현식은 **실행 결과가 하나의 값이 되는 코드 조각**을 말합니다. 여기서 표현식을 실행하여 하나의 값으로 만드는 과정을 **평가(evaluation)** 라고 합니다.

표현식의 종류는 리터럴(값 그 자체), 식별자(변수, 함수 등의 이름), 연산자, 함수 호출 등이 있습니다.

```javascript
42; /* 리터럴 표현식 */
declaredVariable; /* 식별자 표현식 */
1 + 2 * 21 - 1; /* 연산자 표현식 */
functionCall(); /* 함수 호출 표현식 */
```

일반적으로 표현식은 값을 생성할 뿐, 프로그램의 상태를 변화시킬 수는 없습니다. 그러한 역할은 표현식이 아닌 문이 수행합니다.

```javascript
var answer = 42; /* 변수에 값을 할당하는 문 */
answer + (1 * 2) / 3 - 4; /* 표현식 */
console.log(answer); /* Result: 42 */
```

### Expression statement

물론 예외는 있습니다. 할당 연산자 =, 증감 연산자 ++와 --, 혹은 문이 포함된 함수 호출로 구성된 표현식은 상태를 변화시키는 side effect를 가지고 있습니다.

```javascript
var x; /* 선언문 */
x = 2; /* 표현식: x = 2, Evaluation: 2 */
x++; /* 표현식: x++, Evaluation: 2 */
x--; /* 표현식: x--, Evaluation: 3 */
function func() {
  x = 42;
  return 0;
}
func(); /* 표현식: func(), Evaluation: 0 */
```

위 예시에서 각 표현식은 하나의 값을 나타냄과 동시에, 연산 및 실행 후 변수 `x`의 상태를 변화시킵니다. 이처럼 **표현식의 역할과 문의 역할을 모두 수행하는 코드 조각**을 **expression statement**라고도 부릅니다.

## 문

문은 어떠한 동작이 일어나도록 **자바스크립트 엔진에 명령을 내리는 코드 조각입니다**. 코드 블록({ ... })을 제외하면 문의 끝에는 원칙적으로 세미콜론이 옵니다.

문에는 대표적으로 다음과 같은 종류가 있습니다.

- `if-else`, `switch` 와 같은 조건문
- `for`, `for-in`, `while`, `do-while`과 같은 반복문
- 변수 및 함수 선언문
- 할당문과 같이 표현식과 문의 역할을 모두 수행하는 expression statement

모든 표현식은 끝에 세미콜론을 붙이면 딱히 어떠한 명령을 내리지 않더라도 일단 expression statement, 즉 문으로 간주할 수 있습니다.

```javascript
/* valid */
42;
sum;
```

그러나 expression statement를 제외하면, 문은 값이 와야하는 자리에 _절대로_ 올 수 없습니다.

```javascript
/* invalid */
var var1 = var var2;
console.log(var param);
functionCall(if (true) { ... });
```

### 함수 선언문 vs 함수 표현식

**함수 선언문(function declaration)** 과 **함수 표현식(function expression)** 은 다음과 같이 사용합니다.

```javascript
/* 함수 선언문 */
function func(param) {
  console.log("Function declaration");
  param();
}

/* 함수 표현식 */
func(function() {
  console.log("Function expression");
});
```

이름에서 알 수 있듯이, 함수 선언문은 문이고 함수 표현식은 표현식입니다. 그래서 함수 표현식은 인자로 전달하거나, 변수에 할당하는 값으로 사용할 수 있습니다.

위 예시처럼 이름 없이 사용되는 함수 표현식을 **익명 함수(anonymous function)** 라고 부릅니다. 그러면 이름이 붙는 함수 표현식도 있을까요?

```javascript
func1(function func2() {});
```

그렇습니다. 함수 표현식에는 이름이 붙을 수 있습니다. 이러한 함수 표현식은 **기명 함수(named function expression)** 라고 부릅니다.

그런데 뭔가... 생김새가 함수 선언문과 똑같지 않나요? 그러면 자바스크립트 엔진은 함수 선언문과 기명 함수을 어떻게 구분할까요? 그 기준은 대략적으로 다음과 같습니다.

- **값이 와야하는 영역**에 있을 경우 **함수 표현식**으로 간주하며, 불가능할 경우 에러를 일으킵니다
- 스크립트의 전역 레벨, 코드 블록 내의 최상위 레벨 등 **값이 오기로 되어있지 않은 영역**에서는 **함수 선언문**으로 간주하며, 불가능할 경우 에러를 일으킵니다

```javascript
if (true) {
  function func() {}           /* 코드 블록 내의 최상위 레벨 => 함수 선언문 */
  function() {}                /* 코드 블록 내의 최상위 레벨 => 함수 선언문 => 에러 */
}

function func1() {             /* 스크립트의 전역 레벨 => 함수 선언문 */
  function func2() {}          /* 코드 블록 내의 최상위 레벨 => 함수 선언문 */
  return function func3() {    /* 값이 와야하는 자리 => 함수 표현식 */
    function func4() {}        /* 코드 블록 내의 최상위 레벨 => 함수 선언문 */
  };
}

function() {}                   /* 스크립트의 전역 레벨 => 함수 선언문 => 에러 */
```

### 즉시 실행 함수(IIFE)

자바스크립트에서는 소괄호로 값이 와야하는 영역을 나타낼 수 있습니다.

```javascript
(function() {}); /* Evaluation: function() {} */
```

즉, 이러한 방식으로 함수 표현식은 정의를 한 뒤 즉시 호출할 수 있습니다.

```javascript
(function() {
  console.log("IIFE");
})();
```

이러한 형태를 **즉시 실행 함수(Immediately invoked function expression)** 라고 하며, 일반적으로 줄여서 **IIFE** _[iffy]_ 라고 부릅니다.

자바스크립트 함수 및 즉시 실행 함수에 대한 자세한 내용은 추후 따로 포스팅하도록 하겠습니다.

## Reference

- All you need to know about Javascript's Expressions, Statements and Expression Statements | DEV Community [Link](https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2)
- JavaScript Expressions and Statements | Launch School [Link](https://medium.com/launch-school/javascript-expressions-and-statements-4d32ac9c0e74)
- Operator | PoiemaWeb [Link](https://poiemaweb.com/js-operator)
