/**
 * ES6 이전 클래스가 없었을 때
 * class라는 개념은 있었지만 prototype이라는 문법을 사용
 */

function Dog(name) {
  this.name = name;
}

Dog.prototype.say = function () {
  console.log(this.name + ': 멍멍');
};
var dog = new Dog('검둥이');
dog.say(); // 검둥이: 멍멍

/**
 * ES6 문법부터는 class를 사용하여 작성
 */

class Dog {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name + ': 멍멍');
  }
}

const dog = new Dog('흰둥이');
dog.say(); // 흰둥이: 멍멍
