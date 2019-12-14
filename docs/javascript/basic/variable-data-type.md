---
title: Javascript - Variable & Data Type
lang: ko
description: 자바스크립트의 변수와 자료형
meta:
  - name: keywords
    content: javascript variable type undefined null
  - property: og:title
    content: Javascript - Variable & Data Type
  - property: og:description
    content: 자바스크립트의 변수와 자료형
  - property: og:image
    content: /images/javascript-logo.png
tags: ["javascript"]
---

![Javascript-logo](/images/javascript-logo.png)

# Javascript - Variable & Data Type

## 변수
변수란 쉽게 말해서 **데이터를 저장하는 장소**입니다.

내부적으로는, 메모리에 데이터를 저장하고 변수를 통해 그 메모리 주소에 접근하여 참조하는 방식으로 동작합니다.

## 선언
변수를 사용하려면 먼저 선언을 해야합니다. 선언을 할 때는 다음과 같이 `var` 키워드를 사용합니다.
```javascript
var foo, bar;       /* 한 번에 여러 개의 변수를 선언할 수 있음 */
var name = "까막";   /* 선언과 함께 초기화를 할 수 있음 */
var age = 17;
console.log(age);    /* age의 값을 출력하는 함수. Result: 17 */
```
C나 Java와 같은 언어를 접해보신 분이라면, 선언 시 자료형을 따로 명시하지 않는다는 점이 눈에 들어올 것입니다. 컴파일 시에 자료형을 결정하는 위 **정적 언어**들과는 다르게 자바스크립트는 런타임에서 자료형이 결정되는 **동적 언어**입니다. 즉, 자료형이 프로그램 실행 시 대입되는 값에 따라 알아서 결정되니 선언할 때 따로 적어주지 않아도 됩니다.

혹시 `let`, `const`라는 선언 키워드를 들어보셨나요? 사실 `var` 키워드는 여러가지 잠재적 위험성을 가지고 있습니다. 이러한 단점을 보완하기 위해 ES6에서 새로 도입된 키워드가 `let`과 `const` 키워드인데요, 이와 관련해서는 추후에 따로 포스팅하도록 하겠습니다.

## 대입
대입이란 변수에 데이터를 저장하는 것을 말합니다. 다음과 같이 `=` 연산자를 사용합니다.
```javascript
var year = 2019;  /* 선언과 함께 초기화를 하며 year 변수에 2019를 대입합니다. */
year = 2020;      /* 기존 year 변수에 2020를 새로 대입합니다. */
```

## 자료형
자료형에는 Number, String, Boolean, Undefined, Null, Object가 있습니다.
ES6에서 Symbol이라는 원시 자료형이 새로 추가되었는데, Symbol은 ES6을 다룰 때 따로 설명하도록 하겠습니다.

Object를 제외한 나머지 자료형은 원시 자료형(Primitive)이라고 불리며, 가장 단순한 형태의 데이터를 나타냅니다. 원시 자료형은 모든 값이 immutable, 즉 수정이 불가능하다는 특징이 있습니다.

다른 자료형은 이게 별 상관이 없을 수 있는데, String 자료형의 경우 조금 낯설 수 있습니다. 분명 다른 언어에서는 인덱스로 접근하거나 메서드를 호출해서 문자열을 수정할 수 있었던 것 같은데, 자바스크립트는 그럴 수 없거든요.

그럼 이제 하나하나 알아보도록 합시다.

### Number
자바스크립트에서는 정수나 실수를 따로 구분하지 않고 그냥 Number 자료형 하나만 존재합니다.
```javascript
var foo = 42;        /* 정수 */
var bar = 3.14;      /* 실수 */
var bin = 0b00101010 /* 2진수 */
var oct = 0o52       /* 8진수 */
var hex = 0x2A       /* 16진수 */
```
숫자 값 외에 Infinity (무한대), -Infinity (-무한대), NaN (Not a Number. 산술 연산 불가)도 Number 자료형을 가집니다. 아니 근데 왜 *Not a Number*가 Number 자료형인걸까요? 뭐, 아무튼 그렇답니다...

두 무한대 값은 연산의 결과가 무한대일 때 얻을 수 있습니다. 그리고 NaN에 관한 자세한 정보는 [여기](https://javascriptrefined.io/nan-and-typeof-36cd6e2a4e43)에서 확인하실 수 있습니다.

### String
String 자료형은 문자열을 나타내는 데에 사용됩니다. 큰따옴표 혹은 작은따옴표로 감싸서 표현합니다.

문자열 내의 각 문자는 인덱스로 접근 가능합니다.
```javascript
var foo = "abcd";
console.log(foo[0])  /* Result: "a" */
console.log(foo[1])  /* Result: "b" */
```
위에서 언급했듯이 자바스크립트의 문자열은 immutable합니다. 그러므로 변수에 저장된 문자열을 수정하고 싶으면 원하는 문자열을 따로 만든 뒤 그 값을 변수에 새로 대입해야 합니다.

### Boolean
`true` 혹은 `false` 값을 표현하는 자료형입니다.
```javascript
var foo = true;
var bar = false;
```

### Undefined
Undefined 자료형에 해당하는 `undefined` 값은 다음과 같은 경우에 만나볼 수 있습니다.
```javascript
/* 선언 후 값을 대입하지 않은 변수 */
var foo;
console.log(foo);  /* Result: undefined */

/* 인자를 필요로 하는 함수를 호출할 때 인자를 전달하지 않는 경우 */
function bar(param) {
  console.log(param);
}
bar();  /* Result: undefined */

/* 명시적으로 return을 하지 않는 함수의 return 값 */
console.log(bar());  /* Result: undefined (물론 bar 함수 내의 console.log 함수도 따로 값을 출력합니다) */

/* 객체에서 존재하지 않는 속성에 접근하는 경우 */
var obj = {};
console.log(obj.prop);  /* Result: undefined */
```
아직 다루지 않은 함수나 객체 얘기도 있는데, 우선 첫 번째 항목만 기억해두고 넘어가도 좋습니다.

### Null
Null 자료형에 해당하는 `null` 값도 `undefined`처럼 뭔가 비어있는 값이지만, `undefined`와 다른 점은 `undefined`는 자바스크립트 엔진에 의해 자동적으로 초기화된 값이고 `null`은 *아무 것도 참조하고 있지 않음*을 나타내기 위해 개발자가 **의도적으로** 넣어주는 값이라는 점입니다.
```javascript
var foo;        /* 아직 어떤 값도 대입하지 않아서 비어있음 */
var bar = 42;
bar = null;     /* 의도적으로 빈 값으로 만듦 */
```
물론 개발자가 `undefined` 값을 할당해줄 수도 있지만, 원래의 용도와 어긋나니 혼동이 생길 수 있습니다.

또한, 위에서 언급했듯이 `null`은 *이 변수가 어떤 데이터도 참조하고 있지 않음*을 나타냅니다. 이러한 정보는 자바스크립트 엔진이 불필요한 메모리 영역을 할당 해제하는 가비지 컬렉션을 수행할 때 정리할 메모리를 판단하는 데에 사용될 수 있습니다.
그러므로 의도적으로 빈 값을 할당할 때에는 `null`을 사용합시다.

참고로, `undefined`는 런타임 시 생성되는 전역 변수이고, `null`은 예약어입니다.
```javascript
var undefined = 42; /* 값이 수정되지는 않지만 에러도 일어나지 않습니다. */
var null = 42;      /* SyntaxError: Unexpected token null */
```
물론 되고 안되고를 떠나서 이렇게 헷갈리게 변수를 사용하는 일은 반드시 지양합시다!

마지막으로 기묘한 점이 하나 있습니다.
```javascript
var foo = null;
console.log(typeof foo);  /* Result: "object" */
```
`null`의 자료형은 Null 타입이고, Null 타입은 Object가 아닌 원시 자료형입니다.
하지만 typeof 연산자를 통해 확인해보면 자료형이 Object로 출력됩니다.

이 현상은 초기 자바스크립트 설계 상의 버그 때문이라고 하는데, 혹시 자세한 내용이 궁금하신 분은 [여기](https://github.com/FEDevelopers/tech.description/wiki/%E2%80%9Ctypeof-null%E2%80%9D%EC%9D%98-%EC%97%AD%EC%82%AC)서 확인해보시기 바랍니다.

### Object
원시 자료형 이외의 모든 것은 죄다 Object(객체)입니다. 배열도 객체이고, 함수도 객체이고, 자바스크립트를 이루고 있는 거의 모든 것이 객체입니다.

객체는 내용이 조금 길어질 예정이니 따로 정리해서 올리도록 하겠습니다.

## 명명 규칙
변수명을 지을 때는 다음과 같은 규칙을 따라야 합니다.
- *문자*, underscore(_), dollar sign($)으로 시작하며, 숫자로 시작할 수 없다
- 반드시 *문자*, underscore, dollar sign, 숫자로만 이루어져야 한다
- 변수명은 대소문자를 구분한다
- 예약어를 사용할 수 없다

*문자*... 뭔가 조금 애매한 단어죠? 일반적으로 문자라 하면 알파벳을 떠올리지만, 자바스크립트의 변수명에는 그보다 훨씬 많은 유니코드 문자가 들어갈 수 있습니다. 심지어 한글도 사용할 수 있습니다!
물론 첫 글자로 올 수 있는 문자와 그 외의 자리에 올 수 있는 문자의 범위가 조금 다르기는 합니다. 사용 가능한 문자에 대한 자세한 정보는 [여기](https://mathiasbynens.be/notes/javascript-identifiers-es6)에서 확인할 수 있지만... 가급적이면 문자는 **underscore, dollar sign 혹은 알파벳**을 사용하는 것이 바람직하지 않나 생각합니다.

예약어란 특정 용도로 사용하기 위해 정해놓은 키워드를 말합니다. 대표적으로 `if`, `for`, `new`  등 특정 구문에 사용되는 키워드가 있습니다.

현재 정의된 예약어 목록을 확인하고 싶으신 분은 [여기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar)를 참고하시기를 바랍니다.

그리고 정해진 규칙은 아니지만 관습적으로 따르는 규칙이 몇 가지 있습니다.
- 변수명은 너무 짧거나 너무 길지 않게, 그리고 데이터의 의미를 판단하기 쉽게 짓는다
- 변수명이 두 단어 이상으로 이루어졌을 경우 camelCase로 작성한다. 물론 다른 naming convention을 사용해도 무방하다. 무엇을 쓰든 일관된 표기법으로 변수명을 짓는다.

변수의 역할이나 의미를 알기 쉽도록 이름을 짓는다면 코드를 이해하기가 쉬워지고 유지보수가 용이해집니다. 본인의 코드도 종종 이해를 못 할 때가 있는데, 다른 사람이 내 코드를 봤더니 변수명이 그냥 `a`, `aa`, `aaa` 이런 식으로 되어있으면 다들 머리가 지끈지끈 해질겁니다.

여러 naming convention 중에는 *여러 단어로 구성된 변수명을 어떻게 쓸까*를 나타내는 것이 있습니다. 대표적으로 아래와 같은 규칙이 있습니다.
- camelCase: 모든 단어를 붙이고, 첫 단어를 제외한 모든 단어의 첫 문자를 대문자로 쓴다
- PascalCase: 모든 단어를 붙이고, 모든 단어의 첫 문자를 대문자로 쓴다
- snake_case: underscore로 단어를 연결한다
- kebab-case: hyphen(-)으로 단어를 연결한다

이 중에 올바른 표기법이 있고 잘못된 표기법이 있는 것은 아닙니다. 이게 좋네 저게 좋네 하면서 논쟁을 벌이면 아마 끝이 안 날거예요.

다만, 현재 대부분의 자바스크립트 라이브러리가 camelCase를 사용하고 있기 때문에 개발자들도 대체로 camelCase를 사용합니다. 물론 이것은 반드시 지켜야 하는 규칙이 아니기 때문에 camelCase가 마음에 안 들면 다른 표기법을 사용해도 됩니다. 대신 가독성을 위해 일관된 표기법으로 변수명을 짓는 것이 좋습니다.

## Reference
- 자바스크립트의 자료형 - JavaScript | MDN [Link](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)
- 자바스크립트 변수, 자료형 - ZeroCho Blog [Link](https://www.zerocho.com/category/JavaScript/post/57271d6e5aec14515b949b4b)
- Data type & Variable | PoiemaWeb [Link](https://poiemaweb.com/js-data-type-variable)
- Difference Between `null` and `undefined` in JavaScript | TO THE NEW Blog [Link](https://www.tothenew.com/blog/difference-between-undefined-and-null-in-javascript/#)

<Disqus/>