import React, { Fragment } from 'react';

function App() {
    const name = '리액트';
    return (
        /* <div>, <Fragment>, <> 다 사용 가능 */
        <>
            <h1>{name} 리액트 안녕!</h1>
            <h2>잘 작동하니?</h2>
        </>
    );
}

export default App;