// 15.2 Context API 사용법 익히기
// 15.2.1 새 Context 만들기
/**
 * contexts/color.js
 */
 import { createContext } from 'react';

 const ColorContext = createContext({ color: 'black'});
 
 export default ColorContext;