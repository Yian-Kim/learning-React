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
    initialState
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
    </Provider>,
    document.getElementsById('root')
);

/**
 * components/Counter.js
 */
import React from 'react';

const Counter = ({ onIncrease, onDecrease, number }) => {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;

/**
 * containers/CounterContainers/js
 */
import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increase,
        decrease
    }
)(CounterContainer);

/**
 * App.js
 */
import React from 'react';
import CounterContainer from './containers/CounterContiner';

const App = () => {
return (
    <div>
    <CounterContainer />
    </div>
);
};

export default App;