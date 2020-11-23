import React from 'react';
import './App.css';

function App() {
    
    const name = undefined;
    
    // undefined를 렌더링하면 에러발생
    // return name;

    return name || '값이 undefined입니다.';
}

export default App;