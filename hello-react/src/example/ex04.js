import React from 'react';

function App() {
    const name = '리액트';
    return (
        <div>
            {name === '리액트' ? (
                <h1>리액트입니다.</h1>
            ) : (
                <h2>리액트가 아닙니다.</h2>
            )}
        </div>
    );

    // null을 렌더링하면 아무것도 나타나지 않음
    // const name = '뤼액트';
    // return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>

    // 렌더링 하면 브라우저에 아무것도 나타나지 않음
    // return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;

    // 주의할점: falsy한 값인 0은 예외적으로 화면에 보여짐
    // const number = 0;
    // return number && <div>내용</div>

}

export default App;