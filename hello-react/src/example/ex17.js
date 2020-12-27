 /**
  * MyComponent.js
  * - 3.3.3 props 기본값 설정: defaultProps
  */

 import React from 'react';

 const MyComponent = props => {
     return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
 };
 
 MyComponent.defaultProps = {
     name: '기본 이름'
 };
 
 export default MyComponent;
 