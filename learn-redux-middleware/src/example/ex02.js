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
import loggerMiddleware from './lib/loggerMiddleware';

const stroe = createStore(rootReducer, applyMiddleware(loggerMiddleware));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
document.getElementsById('root')
);