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

 // 17.7.4 TodosContainer를 Hooks로 전환하기
 /**
  * container/TodosContainer.js
  */
// import React, { useCallback } from 'react';
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';

const TodosContainer = () => {
    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos
    }));
    // const dispatch = useDispatch();
    // const onChangeInput = useCallback(input => dispatch(changeInput(input)), [
    //     dispatch
    // ]);
    // const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
    // const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
    // const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);
    // 17.7.5 useActions 유틸 Hook을 만들어서 사용하기
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        []
    );
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

// export default TodosContainer;
// 17.7.6 connect 함수와의 주요 차이점
export default React.memo(TodosContainer);

// 17.7.5 useActions 유틸 Hook을 만들어서 사용하기
/**
 * lib/useActions.js
 */
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export default function useActions(actions, deps) {
    const dispatch = useDispatch();
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map(a => bindActionCreators(a, dispatch));
            }
            return bindActionCreators(actions, dispatch);
        },
        deps ? [dispatch, ...deps] : deps
    );
}