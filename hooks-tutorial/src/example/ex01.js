// 8.1 useState

/**
 * Counter.js
 */
import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button                                                          onClick={() => setValue(value - 1)}>-1</button>
        </div>                                   
    );
};

export default Counter;

/**    
 * App.js
 */
import React from 'react';
// import Counter from './Counter';
import Info from './Info';

const App = () => {
//   return <Counter />;
    return <Info />;
};

export default App;

/**
 * Info.js
 * - 8.1.1 useState를 여러 번 사용하기
 */
import React, { useState } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        // console.log('렌더링이 완료되었습니다!');
        // console.log({
        //     name,
        //     nickname
        // });
        // 8.2.1 마운트될 때만 실행하고 싶을 때
        // console.log('마운트될 때만 실행됩니다.');
        // 8.2.2 특정 값이 업데이트될 때만 실행하고 싶을 때
        // console.log(name);
        // 8.2.3 뒷정리하기
        return () => {
            console.log('effect');
            console.log(name);
            return () => {
                console.log('cleanup');
                console.log(name);
            };
        };
    }, [name]);

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;