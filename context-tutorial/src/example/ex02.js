// 15.3 동적 Context 사용하기
// 15.3.1 Context 파일 수정하기
/**
 * contexts/color.js
 */
import Reaact, { createContext, useState } from 'react';

const ColorContext = createContext({ 
    state: { color: 'black', subcolor: 'red' },
    action: {
        setColor: () => {},
        setSubcolor: () => {}
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: { color, subcolor },
        action: { setColor, setSubcolor }
    };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;

/**
 * App.js
 * - 15.3.2 새로워진 Context를 프로젝트에 반영하기
 */
import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

const App = () => {
return (
    <ColorProvider value={{ color: 'red' }}>
    <div>
        {/* // 15.3.3 색상 선택 컴포넌트 만들기 */}
        <SelectColors />
        <ColorBox />
    </div>
    </ColorProvider>
);
};

export default App;

/**
 * components/ColorBox.js
 */
import React from 'react';
import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
    return (
        <ColorConsumer>
            {/* {value => { */}
            {/* // 15.3.2 새로워진 Context를 프로젝트에 반영하기 */}
            {({ state }) => (
                <>
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            background: state.color
                        }}
                    />
                    <div
                        style={{
                            width: '32px',
                            height: '32px',
                            background: state.subcolor
                        }}
                    />
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;

/**
 * components/SelectColors.js
 */
import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']l

const SelectColors = () => {
    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            {/* // 15.3.3 색상 선택 컴포넌트 만들기 */}
            <ColorConsumer>
                {({ actions }) => (
                    <div style={{ display: 'flex' }}>
                        {colors.map(color => (
                            <div
                                key={color}
                                style={{
                                    background: color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer' }}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={e => {
                                    e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                                    actions.setSubcolor(color);
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr />
        </div>
    );
};

export default SelectColors;