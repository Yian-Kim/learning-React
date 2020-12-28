import React from 'react';

const MyComponent = () => {
    return <div>나의 새롭고 멋진 컴포넌트</div>
};

/**
 * props 값은 컴포넌트 함수의 파라미터로 받아 와서 사용할 수 있음
 * 
 * @param {*} props 
 */
const MyComponent = props => {
    return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

export default MyComponent;
