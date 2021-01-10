// 5.1.1 예제 컴포넌트 생성

/**
 * ValidationSample.css
 */
.success {
    background-color: lightgreen;
}
.failure {
    background-color: lightcoral;
}

/**
 * ValidationSample.js
 */
import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        // 5.2.3.2 버튼 onClick 이벤트 코드 수정
        this.input.focus();
    }
    render() {
        return (
            <div>
                <input
                    // 5.2.3.1 input에 ref 달기
                    ref={(ref) => this.input=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;

// 5.1.2 App 컴포넌트에서 예제 컴포넌트 렌더링

/**
 * App.js
 */
import React, { Component } from 'react';
import ValidationSample from './ValidationSample';

class App extends Component {
    render() {
        return (
            <ValidationSample/>
        );
    }
}

export default App;

// 5.2 ref 사용
// 5.2.1 콜백 함수를 통한 ref 설정
<input ref={(ref) => {this.input=ref}} />

// 5.2.2 createRef를 통한 ref 설정
import React, { Component } from 'react';

class RefSample extends Component {
    input = React.createRef();
    
    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.input} />
            </div>
        );
    }
}

export default RefSample;