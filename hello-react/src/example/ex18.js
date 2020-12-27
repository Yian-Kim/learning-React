// 3.3.4 태그 사이의 내용을 보여 주는 children

/**
 * App.js
 */

import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent>리액트</MyComponent>;
};

export default App;

/**
 * MyComponent.js
 */

 import React from 'react';

 const MyComponent = props => {
    return (
        <div>
            안녕하세요, 제 이름은 {props.name}입니다. <br />
            children 값은 {props.children}입니다.
        </div>
    );
 };

 MyComponent.defaultProps = {
    name: '기본 이름'
 };

 export default MyComponent;
 