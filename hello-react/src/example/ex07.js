import React from 'react'
import './App.css';

function App() {
    const name = '리액트';
    // className이 아닌 class로 사용할 경우 에러 발생
    return <div className="react">{name}</div>
}

export default App;