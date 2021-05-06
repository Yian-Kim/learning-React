// 18.2 미들웨어란?
// 18.2.1 미들웨어 만들기
/**
 * lib/loggerMiddleware.js
 */
const loggerMiddleware = store => next => action => {
    console.group(action && action.type); // 액션 타입으로 log를 그룹화함
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action); // 다음 미들웨어 혹은 리듀서에게 전달
    console.log('다음 상태', store.getState()); // 업데이트된 상태
    console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;

/**
 * index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './modules';
// import loggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const stroe = createStore(rootReducer, applyMiddleware(loggerMiddleware));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
document.getElementsById('root')
);

// 18.3.1.3 Thunk 생성 함수 만들기
/**
 * modules/counter.js
 */
import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
    export const decraseAsyncd = () => dispatch => {
        setTimeout(() => {
            dispatch(decrease());
        }, 1000);
    }
};

const initialState = 0; // 상태는 꼭 객체일 필요가 없습니다. 숫자도 작동해요.

function counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1,
    },
    initialState,
);

export default counter;

/**
 * container/CounterContainer.js
 */
import React from 'react';
import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    return (
        <Counter
            number={number}
            onIncrease={increaseAsync}
            onDecrease={decreaseAsync}
        />
    );
};

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer);

// 18.3.1.4 웹 요청 비동기 작업 처리하기
/**
 * lib/api.js
 */
import axios from 'axios';

export const getPost = id =>
    axios.get('https://jsonplaceholder.typicode.com/posts/${id}');

export const getUsers = id =>
    axios.get('https://jsonplaceholder.typicode.com/users');