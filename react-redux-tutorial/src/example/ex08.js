// 17.7 Hooks를 사용하여 컨테이너 컴포넌트 만들기
// 17.7.1 useSelector로 상태 조회하기
// 17.7.2 useDispatch를 사용하여 액션 디스패치하기
/**
 * containers/CounterContiner.js
 */
 import React, { useCallback } from 'react';
 import { useSelector, useDispatch } from 'react-redux';
 import Counter from '../components/Counter';
 import { increase, decrease } from '../modules/counter';
 
 const CounterContainer = () => {
     const number = useSelector(state => state.counter.number);
     const dispatch = useDispatch();
     const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
     const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
     return (
         <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
     );
 };
 
 export default CounterContainer;