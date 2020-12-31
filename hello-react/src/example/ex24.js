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
        </div>
    )
}

/**
 * App.js
 */
import React from 'react';
import Say from './Say';

const App = () => {
    const <Say />;
};

export default App;