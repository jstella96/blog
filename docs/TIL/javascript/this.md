---
index: 4
icon: creative
title: this바인딩
category:
  - JavaScript
editLink: false
---

::: tip 학습 목표
Q. 자바스크립트에서의 this를 설명하시오
:::

## This

ThisBinding은 실행 컨텍스트가 활성화 될 때 한다.
실행컨텍스트가 생성되는 순간에 언제? 이 컨텍스트가 실행되는 함수가 호출될때
즉 함수가 호출될 때 결정된다. 즉 정적바인딩아닌 동적 바인딩이다. ==호출하는 방식에 따라 다르다==

## 호출 방식 - 함수를 어떻게 호출 했는가

### 전역공간에서 : 전역 공간에서의 this는 전역객체(window/global) 를 가리킨다

- 브라우저에서는 window 객체 , 노드js에서는 global 객체
- 전역 컨텍스트를 실행하는 주체 전역객체(=호스트 객체)
- 자바스크립트가 실행되는 환경 즉 런타임에 따라서 전역객체의 정보가 달라진다
- window, global 둘다 ECMAScript(에크마스크립트)에서 정의한 객체가 아니고 ECMAScript가 전역객체는 ~~해야한다 라고 정의한 내용에 따라서 런타임에서 제공하는 구현체이다. 각 호스트에서 정의한 바에 따라서 전역객체의 구체적인 내용이 달라지는 것.

### 함수 호출시 : 함수를 호출 했을 때도 전역객체를 가리킨다.

```
function a(){
  console.log(this); //전역객체
}
a();
function b(){
  function c(){
    console.log(this); //전역객체
  }
}
b();
```

- 모두 전역객체가 출력된다.
- 자바스크립트 고유의 특성 vs 문제 , 의견이 나뉜다.
- ECMAScript6에서 문제라는 의겸 수렴해서 아예 this Binding을 하지 않는 Arrow function이 나옴.(화살표 함수)
- arrow function 은 바로 위 컨텍스트에 있는 this를 그대로 가져다가 사용한다.
- ECMAScrit5에서는 함수로서 호출했을때 this는 무조건 언제나 전역객체를 가리킨다. 암기사항

```
var d = {
  e: function (){
    function f(){
     console.log(this); //전역객체
    }
    f(); // 전역객체, 호출한 형태가 함수이다.
  }
}
d.e();
```

### 메서드 호출시: 메서드를 호출한 주체(메서드 앞)

```
var a = {
  b: function (){

     console.log(this); //a

  }
}
a.b();
```

- b함수를 a객체의 "메서드"로 호출이라고 생각
- 메서드 뜻 : 객체지향에서 인스턴스와 관련된 동작, 자바스크립트에서 객체로 범위 확장.(클래스의 인스턴스냐 여부 상관 x 객체와 관련된 동작하면 메서드라고 부르겠다)

```
var a = {
  b:
    c: {
        function (){
        console.log(this); //a.b
      }
    }
  }
}
a.b.c(); = a.b["c"]
```

상위에서 var self = this;
선언 후 self 호출하는 우회법이 있다. 그러나 arrow func 등장하면서(this 바인딩x) this로 해결.

### callback 호출시: 기본적으로는 함수 내부에서와 동일

- 기본적으로는 함수 내부에서와 동일
- 콜백 함수 내부에서 this는 기본적으로는 전역객체로 보는게 맞으나. 지정하는 바에 따라서 달라질 수 있다.

:::tip
명시적으로 this를 바인딩하는 3가지 방법call , apply, bind 명령어

```js
function a(x, y, z)
{
  console.log(this, x,y, z))
}
var b = {
  bb : 'bbb'
}
a.call(b,1,2,3)
a.apply(b,[1,2,3])
var c = a.bind(b);
c(1,2,3)
var d = a.bind(b,1,2);
d(3);

// 모든 호출 값 동일 {bb:"bbb"} 1 2 3

func.call(thisArg, [ arg2[, arg2[...]]])
func.apply(thisArg,[argsArray])
func.bind(thisArg, [ arg2[, arg2[...]]])

```

:::

예제1

```js
var callback = function () {
  console.dir(this);
};
var obj = {
  a: 1,
  b: function (cb) {
    cb.call(this); // obj, obj.j라는 함수 안에서 콜백함수 호출할 때 this를 내가 가지고 있는 this로 한다고 명령을 내린것.
    cb(); // 전역객체
  },
};
obj.b(callback);
```

예제2

```js
var callback = function () {
  console.dir(this);
};
var obj = {
  a: 1,
};
setTimeout(callback, 100); //setTimeout 전역객체 별도 처리 하지 않아서 this는 전역객체가 나온다. setTimeout 콜백 처리 방식 임의로 바꿀 수 없으니까 bind 이용
setTimeout(callback.bind(obj), 100);
```

예제3

이벤트 핸들러 에서 이벤트 발생시 호출하는 함수의 this는 전역이아니라 해당 HTML DOM객체이다.
그렇게 하도록 내부에서 정의가 되어 있다. 이렇듯 콜백함수의 this를 별도로 지정해놓은 경우가 있다.
하지만 이 경우도 func().bind(obj) 명시적으로 바인딩해주면 교체 가능하다.

**정리**

- 기본적으로는 함수의 this와 같다.
- 제어권을 가진 함수가 콜백의 this를 지정해둔 경우도 있다.
- 이 경우에도 개발자가 this를 바인딩해서 콜백을 넘기면 그에 따른다

### 생성자함수 호출시 : 인스턴스가 곧 this다

new 연산자, 생성자 함수를 바탕으로 인스턴스 만나는 명령어
새로만든 인스턴스 객체 그 자체가 곧 this

```js
function Person(n, a) {
  this.name = n;
  this.age = a;
}
var roy = Person("재남, 30"); // new 없이 -> 함수로써 호출
console.log(window.name, window.age); // 전역객체에 값이 할당된다.

var roy = new Person("재남, 30"); // new 있으 호출 생성자 함수로써 호출, 새로생성될 Person의 인스턴스 객체 자신이 곧 this 객체가 새로 만들어지면서 그 객체안에 name, age 프로퍼티가 생성되면서 값이 담긴다.

console.log(roy);
```

## 결론

**전역공간에서** : 전역객체(window/global)  
**함수 호출시** : 전역객체(window/global)  
**메서드 호출시** : 메서드 호출 주체(메서드명 앞,.앞)  
**callback 호출시** : 기본적으로 함수내부에서와 동일, 콜백함수를 어떤식으로 처리하는 지에 따라서 얼마든지 달라질 수 있다. 그런 경우에도 bind 명령등을 통해서 사용자가 직접 this를 명시할 수 있다.  
**생성자 함수 호출시**: 인스턴스가 곧 this다
