// 17.2 UI 준비하기
// 17.2.1 카운터 컴포넌트 만들기
/**
 * components/Counter.js
 */
import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
};

export default Counter;

/**
 * App.js
 */
import React from 'react';
import Counter from './components/Counter';

const App = () => {
return (
    <div>
    <Counter number={0} />
    </div>
);
};

export default App;