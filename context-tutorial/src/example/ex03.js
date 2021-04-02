// 15.4 Consumer 대신 Hook 또는 static contextType 사용하기
// 15.4.1 useContext Hook 사용하기
/**
 * components/ColorBox.js
 */
import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
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
    );
};

export default ColorBox;

// 15.4.2 static ContextType 사용하기
/**
 * components/SeletColors.js
 */
import React, { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
    static contextType = ColorContext;

    handleSetColor = color => {
        this.context.actions.setColor(color);
    }

    handleSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    }

    render() {
        return (
            <div>
                <h2>색상을 선택하세요.</h2>
                <div style={{ display: 'flex'}}>
                    {colors.map(color => (
                        <div
                            key={color}
                            style={{ 
                                background: color, 
                                width: '24px', 
                                height: '24px', 
                                cursor: 'pointer' 
                            }}
                            onClick={() => this.handleSetColor(color)}
                            onContextMenu={e => {
                                e.preventDefault();
                                this.handleSetSubcolor(color);
                            }}
                        />
                    ))}
                </div>
                <hr />
            </div>
        );
    }
}

export default SelectColors;

/**
 * index.js
 * - 16.2.3 DOM 레퍼런스 만들기
 */
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 1.6.2.4 액션 타입과 액션 생성 함수 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ rtpe: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 16.2.5 초기값 설정
const initialState = {
    toggle: false,
    counter: 0
};

// 16.2.6 리듀서 함수 정의
//state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    // action.type에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWTICH:
            return {
                ...state, // 불변성 유지를 해 주어야 합니다.
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}