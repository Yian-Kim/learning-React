// 12.1 immer를 설치하고 사용법 알아보기
// 12.1.1 프로젝트 준비
// 12.1.2 immer를 사용하지 않고 불변성 유지
/**
 * App.js
 */
import React, { useRef, useCallback, useState } from 'react';

const App = () => {
    const nextId = useRef(1);
    const [form, setForm] = useState({ name: '', usename: ''});
    const [data, setData] = useState({
        array: [],
        uselessValue: null
    });

    // input 수정을 위한 함수
    const onChange = useCallback(
        e => {
            const { name, value } = e.target;
            setForm({
                ...form,
                [name]: [value]
            });
        },
        [form]
    );

    // form 등록을 위한 함수
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            const info = {
                id: nextId.current,
                name: form.name,
                username: form.username
            };

            // array에 새 항목 등록
            setData({
                ...data,
                array: data.array.concat(info)
            });

            // form 초기화
            setForm({
                name: '',
                username: ''
            });
            nextId.current += 1;
        },
        [data, form.name, form.username]
    );

    // 항목을 삭제하는 함수
    const onRemove = useCallback(
        id => {
            setData({
                ...data,
                array: data.array.filter(info => info.id !== id)
            }); 
        },
        [data]
    );

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="username"
                    placeholder="아이디"
                    value={form.username}
                    onChange={onChange}
                />
                <input
                    name="name"
                    placeholder="이름"
                    value={form.name}
                    onChange={onChange}
                />
                <button type="submit">등록</button>
            </form>
            <div>
                <ul>
                    {data.array.map(info => (
                        <li key={info.id} onClick={() => onRemove(info.id)}>
                            {info.username} ({info.name})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;