import React from 'react';

const MyComponent = () => {
    return <div>나의 새롭고 멋진 컴포넌트</div>
};

/**
 * ES6의 화살표 함수
 * 
 * 주로 함수를 파라미터로 전달할 때 유용
 */
setTimeout(function() {
    console.log('hello world');
}, 1000);

setTimeout(() => {
    console.log('hello world')
}), 1000);

function BlackDog() {
    this.name = '흰둥이';
    return {
        name: '검둥이',
        bark: function() {
            console.log(this.name + ': 멍멍!');
        }
    }
}

const blackDog = new BlackDog();
blackDog.bark(); // 검둥이: 멍멍!

export default MyComponent;
