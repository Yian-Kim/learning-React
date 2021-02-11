// 10.3.2 항목 추가 기능 구현하기
// 10.3.2.1 TodoInsert value 상태 관리하기
/**
 * TodoInsert.js
 */
import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

// 10.3.2.4 TodoInsert에서 onSubmit 이벤트 설정하기
const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');
    
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // value 값 초기화

            // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
            // 이를 방지하기 위해 이 함수를 호출합니다.
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;