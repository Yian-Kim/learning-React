// 18.1 작업 환경 준비
/**
 * modules/counter.js
 */
import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

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
 * index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './modules';

const stroe = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
document.getElementsById('root')
);