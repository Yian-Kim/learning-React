// 8.4 useMemo
// 8.6 useRef

/**
 * Average.js
 */
// import React, { useState } from 'react';
// import React, { useState, useMemo } from 'react';
import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if (numbers.length == 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    // const onChange = e => {
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    // };
    }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성
    // const onInsert = e => {
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => {
                    <li key={index}>{value}</li>
                })}
            </ul>
            <div>
                {/* <b>평균값:</b> {getAverage(list)} */}
                <b>평균값:</b> {avg}
            </div>
        </div>
    );
};

export default Average;

/**
 * App.js
 */
import React from 'react';
import Average from './Average';

const App = () => {
  return <Average />;
};

export default App;