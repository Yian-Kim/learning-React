// 17.4 리액트 애플리케이션에 리덕스 적용하기
// 17.4.1 스토어 만들기
// 17.4.2 Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용하기
/**
 * src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './modules';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'),
);