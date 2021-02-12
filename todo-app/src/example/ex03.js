// 10.2.3 TodoListItem과 TodoList 만들기
/**
 * TodoListItem.js
 */
import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
    return (
        <div className="TodoListItem">
            <div className="checkbox">
                <MdCheckBoxOutlineBlank />
                <div className="text">할 일</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;

/**
 * TodoList.js
 */
import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = () => {
    return (
        <div className="TodoList">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
};

export default TodoList;

/**
 * App.js
 */
import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default App;

/**
 * TodoList.scss
 */
.TodoList {
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
}

/**
 * TodoListItem.scss
 */
.TodoListItem {
    padding: 1rem;
    display: flex;
    align-items: center; // 세로 중앙 정렬
    &:nth-child(even) {
        background: #f8f9fa;
    }
    .checkbox {
        cursor: pointer;
        flex: 1; // 차지할 수 있는 영역 모두 차지
        display: flex;
        align-items: center; // 세로 중앙 정렬
        svg {
            // 아이콘
            font-size: 1.5rem;
        }
        .text {
            margin-left: 0.5rem;
            flex: 1; // 차지할 수 있는 영역 모두 차지
        }
    }
}
.remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6bbb;
    cursor: pointer;
    &:hover {
        color: #ff8787;
    }
}

// 엘리먼트 사이사이에 테두리를 넣어 줌
    & + & {
        border-top: 1px solid #dee2e6;
    }
}