// 3.3.6 propTypes를 통한 props 검증

/**
 * MyComponent.js
 */
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다. <br />
            children 값은 {children}
            입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.PropTypes = {
    name: PropTypes.string
};

export default MyComponent;

 /**
  * App.js
  */
 import React from 'react';
 import MyComponent from './MyComponent';
 
 const App = () => {
     // return <MyComponent name={3}>리액트</MyComponent>;
     return <MyComponent name="React">리액트</MyComponent>;
 };
 
 export default App;