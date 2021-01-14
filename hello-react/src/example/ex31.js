// 6.2 데이터 배열을 컴포넌트 배열로 변환하기

/**
 * IterationSample.js
 * - 6.2.1 컴포넌트 수정하기
 */
import React from 'react';

const IterationSample = () => {
    // const names = ['눈사람', '얼음', '눈', '바람'];
    // const nameList = names.map(name => <li>{name}</li>);
    // 6.3.1 key 설정
    // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    // 6.4.1 초기 상태 설정하기
    const [names, setNames] = useState([
        { id: 1, text: '눈사람'},
        { id: 2, text: '얼음'},
        { id: 3, text: '눈'},
        { id: 4, text: '바람'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concate({
            id: nextId, // nextId 값을 id로 설정하고
            text: inputText
        });
        setNextId(nextId + 1); // nextId 값에 1을 더해 준다.
        setNames(nextNames); // names 값을 업데이트한다.
        setInputText(''); // inputText를 비운다.
    };

    // 6.4.3 데이터 제거 기능 구현하기
    const onRemove = id => {
        const nextNames = names.filter(name => name.id != id);
        setNames(nextNames);
    };
    const nameList = names.map(name => <li key={name.id}>{name.text}</li>);
    // return <ul>{nameList}</ul>;
    // 6.4.2 데이터 추가 기능 구현하기
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button>추가</button>
            <ul>{nameList}</ul>;
        </>
    );
};

export default IterationSample;

 /**
  * App.js
  * - 6.2.2 App 컴포넌트에서 예제 컴포넌트 렌더링
  */
import React, { Component } from 'react';
import IterationSample from './IterationSample';
import ScrollBox from './IterationSample';

class App extends Component {
    render() {
        return (
            <IterationSample/>
        );
    }
}

export default App;