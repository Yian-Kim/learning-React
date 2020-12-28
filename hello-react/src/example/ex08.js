import React from 'react';
import './App.css';

function App() {
    const name = '리액트';
    return (
        // 태그를 닫지 않으면 에러 발생
        <>
            <div className="react">{name}</div>
            {/* <input></input> */}
            <input />
        </>
    );
}

export default App;