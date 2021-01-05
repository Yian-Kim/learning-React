// 4.2 예제로 이벤트 핸들링 익히기
// 4.2.1 컴포넌트 생성 및 불러오기

/**
 * EventPractice.js
 * 
 * - 4.2.1.1 컴포넌트 생성
 */
import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: ''
    }

    // 4.2.3.2 Property Initializer Syntax를 사용한 메소드 작성
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                {/* 4.2.2 onChange 이벤트 핸들링하기 */}
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    // onChange={
                    //     (e) => {
                            // console.log(e.target.value);
                            // 4.2.2.2 state에 input 값 담기
                    //         this.setState({
                    //             message: e.target.value
                    //         })
                    //     }
                    // }
                    // 4.2.3.1 기본 방식
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                {/* 4.2.2.3 버튼을 누를 때 comment 값을 공백으로 설정 */}
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>확인</button>
            </div>
        );
    }
}

export default EventPractice;

/**
 * App.js
 * 
 * - 4.2.1.2 App.js에서 EventPractice 렌더링
 */
import React from 'react';
import EventPractice from './EventPractice';

const App = () => {
    return <EventPractice />;
};

export default App;