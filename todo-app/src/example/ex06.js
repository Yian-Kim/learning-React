// 10.3.3 지우기 기능 구현하기
// 10.3.3.2 todos 배열에서 id로 항목 지우기
/**
 * App.js
 */
import React, { useState, useRef, useCallback }  from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text:  '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id != = id));
    },
    [todos],
  );

  // 10.3.4 수정 기능
  // 10.3.4.1 onToggle 구현하기
  const onToggle = useallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked:!todo.checked } : todo,
          ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;

// 10.3.3.3 TodoListItem에서 삭제 함수 호출하기
/**
 * TodoList.js
 */
import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

// 10.3.4.2 TodoListItem에서 토글 함수 호출하기
const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem 
                    todo={todo} 
                    key={todo.id} 
                    onRemove={onRemove}
                    onToggle={onToggle} 
                />
            ))}
        </div>
    );
};

export default TodoList;

/**
 * TodoListItem.js
 */
import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

// 10.3.4.2 TodoListItem에서 토글 함수 호출하기
const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;