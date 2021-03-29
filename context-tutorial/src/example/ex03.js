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