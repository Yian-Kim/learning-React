// 5.3 컴포넌트에 ref 달기
// 5.3.1 사용법
<MyComponent
    ref={(ref) => {this.MyComponent=ref}}
/>

// 5.3.2 컴포넌트 초기 설정

/**
 * ScrollBox.js
 */
import React, { Component } from 'react';

class ScrollBox extends Component {
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }

        return (
            <div
                style={style}
                ref={(ref) => {this.box=ref}}>
                <div style={innerStyle}/>
            </div>
        );
    }
}

export default ScrollBox;

// 5.3.2.2 App 컴포넌트에서 스크롤 박스 컴포넌트 렌더링

/**
 * App.js
 */
import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
    render() {
        return (
            <ScrollBox/>
        );
    }
}

export default App;