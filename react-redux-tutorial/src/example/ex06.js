// 17.5 컨테이너 컴포넌트 만들기
// 17.5.1 CounterContainer 만들기
/**
 * containers/CounterContainer.js
 */
import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrase } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// const mapStateToProps = state => ({
//     number: state.counter.number,
// });
// const mapDispatchToProps = dispatch => ({
//     // 임시 함수
//     increase: () => {
//         // console.log('increase');
//         dispatch(increase());
//     },
//     decrease: () => {
//         // console.log('decrease');
//         dispatch(decrease());
//     },
// });
export default connect(
    // mapStateToProps,
    // mapDispatchToProps,
    state => ({
        number: state.counter.number,
    }),
    // dispatch => ({
    //     increase: () => dispatch(increase()),
    //     decrease: () => dispatch(decrease()),
    // }),
    // dispatch => 
    //     bindActionCreators(
    {
        increase,
        decrease,
    },
    //     dispatch,
    // ),
)(CounterContainer);

/**
 * App.js
 */
import React from 'react';
// import Todos from './components/Todos';
import CounterContainer from './components/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
return (
    <div>
    <CounterContainer />
    <hr />
    {/* <Todos /> */}
    {/* // 17.5.2 TodosContainer 만들기 */}
    <TodosContainer />
    </div>
);
};

export default App;

// 17.5.2 TodosContainer 만들기
/**
 * containers/TodosContainer.js
 */
import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove,
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

export default connect(
    // 비구조화 할당을 통해 todos를 분리하여
    // state.todos.input 대신 todos.input을 사용
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput,
        insert,
        toggle,
        remove,
    },
)(TodosContainer);

/**
 * components/Todos.js
 */
import React from 'react';

const TodoItem = ({ todos, onToggle, onRemove }) => {
    return (
        <div>
            <input 
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                {todo.text}    
            </span>
            <button onClick={() => onRemove(todo.id)}>삭 제</button>
        </div>
    );
};

const Todos = ({
    input, // 인풋에 입력되는 텍스트
    todos, // 할 일 목록이 들어 있는 객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput(''); // 등록 후 인풋 초기화
    };
    const onChange = e => onChangeInput(e.target.value);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    );
};

export default Todos;