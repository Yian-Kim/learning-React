// 10.2 UI 구성하기
/**
 * 1. TodoTemplate: 화면을 가운데에 정렬시켜 주며, 앱 타이틀(일정 관리)을 보여줍니다.
 *                  children으로 내부 JSX를 props로 받아 와서 렌더링해 줍니다.
 * 2. TodoInsert: 새로운 항목을 입력하고 추가할 수 있는 컴포넌트입니다.
 *                  state를 통해 인풋의 상태를 관리합니다.
 * 3. TodoListItem: 각 할 일 항목에 대한 정보를 보여 주는 상태에 따라 다른 스타일의 UI를 보여줍니다.
 * 4. TodoList: todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여 줍니다.
 */

 // 10.2.1 TodoTemplate 만들기
 /**
  * TodoTemplate.js
  */
import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;

/**
 * App.js
 */
import React from 'react';
import TodoTemplate from './component/TodoTemplate';

const App = () => {
  return <TodoTemplate>Todo App을 만들자!</TodoTemplate>
};

export default App;

/**
 * jsconfig.json
 */
{
  "compilerOptions": {
      "target": "es6"
  }
}