// 17.7 Hooks를 사용하여 컨테이너 컴포넌트 만들기
// 17.7.1 useSelector로 상태 조회하기
/**
 * containers/CounterContiner.js
 */
import React from 'react';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    return <Counter number={number} />;
};

export default CounterContainer;