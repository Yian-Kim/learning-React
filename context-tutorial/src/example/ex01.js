// 15.2 Context API 사용법 익히기
// 15.2.1 새 Context 만들기
/**
 * contexts/color.js
 */
import { createContext } from 'react';

const ColorContext = createContext({ color: 'black'});

export default ColorContext;

 /**
  * components/ColorBox.js
  */
import React from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
    return (
        <ColorContext.Consumer>
            {value => {
                <div
                    style={{
                        width: '64px',
                        height: '64px',
                        background: value.color
                    }}
                />
            }}
        </ColorContext.Consumer>
    );
};

export default ColorBox;

/**
 * App.js
 */
import React from 'react';
import ColorBox from './components/ColorBox';

const App = () => {
    return (
    <div>
        <ColorBox />
    </div>
    );
};

export default App;