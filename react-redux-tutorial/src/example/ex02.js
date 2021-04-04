// 17.2.2 할 일 목록 컴포넌트 만들기
/**
 * components/Todos.js
 */
import React from 'react';

const TodoItem = ({ todos, onToggle, onRemove }) => {
    return (
        <div>
            <input type="checkbox" />
            <span>예제 텍스트</span>
            <button>삭 제</button>
        </div>
    );
};

const Todos = ({
    input,
    todos, 
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e => {
        e.preventDefault();
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
};

export default Todos;

/**
 * App.js
 */
import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';

const App = () => {
return (
    <div>
    <Counter number={0} />
    <hr />
    <Todos />
    </div>
);
};

export default App;