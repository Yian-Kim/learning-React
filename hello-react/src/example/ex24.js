// 3.4.2.2 useState 사용하기

/**
 * Say.js
 */
import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            {/* 3.4.2.3 한 컴포넌트에서 useState 여러 번 사용하기 */}
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                빨간색
            </button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>
                초록색
            </button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
                파란색
            </button>
        </div>
    )
}

export default Say;


/**
 * App.js
 */
import React from 'react';
import Say from './Say';

const App = () => {
    return <Say />;
};

export default App;