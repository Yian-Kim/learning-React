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

    // 5.3.3 컴포넌트에 메소드 생성
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        // 앞 코드에는 비구조화 할당 문법을 사용했습니다.
        // 다음 코드와 같은 의미입니다.
        // const scrollHeight = this.box.scrollHeight;
        // const clientHeight = this.box.clientHeight;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

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