import React from 'react';
import './App.css';

function App() {
    
    const name = undefined;
    
    // undefined를 렌더링하면 에러발생
    // return name;

    // || 사용해서 에러 방지
    // return name || '값이 undefined입니다.';

    // 내부에서 렌더링 가능
    // return <div>{name}</div>;

    // name 값이 undefined일 때 보여줄 문구
    return <div>{name || '리액트'}</div>
}

export default App;