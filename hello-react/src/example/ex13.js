import React from 'react';

const MyComponent = () => {
  return <div>나의 새롭고 멋진 컴포넌트</div>;
};

/**
 * ES6의 화살표 함수
 *
 * 주로 함수를 파라미터로 전달할 때 유용
 */
setTimeout(function () {
  console.log('hello world');
}, 1000);

setTimeout(() => {
  console.log('hello world');
}, 1000);

/**
 * 기존 function을 대체할 수 없는 이유는 용도가 다름
 * 서로 가리키고 있는 this 값이 다름
 */

function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: function () {
      console.log(this.name + ': 멍멍!');
    },
  };
}

const blackDog = new BlackDog();
blackDog.bark(); // 검둥이: 멍멍!

function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name + ': 멍멍!');
    },
  };
}

const whiteDog = new WhiteDog();
whiteDog.bark(); // 흰둥이: 멍멍!

/**
 * function()을 사용하면 검둥이가 나타나고,
 * () => 를 사용했을 때는 흰둥이가 나타남.
 * 일반 함수는 자신이 종속된 객체를 this로 가리키며,
 * 화살표 함수는 자신이 종속된 인스턴스를 가리킴.
 * 화살표 함수는 값은 연산하여 바로 반환해야 할 때
 * 사용하면 가독성을 높일 수 있음.
 */

function twice(value) {
  return value * 2;
}

const triple = (value) => value * 3;

/**
 * 따로 { }를 열어 주지 않으면 연산한 값을 그대로 반환한다는 뜻
 */

export default MyComponent;
