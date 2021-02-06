// 10.3.2 항목 추가 기능 구현하기
// 10.3.2.1 TodoInsert value 상태 관리하기
/**
 * TodoInsert.js
 */
import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
    const [value, setValue] = useState('');
    
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    return (
        <form className="TodoInsert">
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