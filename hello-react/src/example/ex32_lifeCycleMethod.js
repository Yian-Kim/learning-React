// 7.2 라이프사이클 메소드 살펴보기

/**
 * render()
 * constructor
 * getDerivedStateFromProps
 * componentDidMount
 * shouldComponentUpdate
 * getSnapshotBeforeUpdate
 * componentDidUpdate
 * componentWillUnmount
 * componentDidCatch
 */

 /**
  * LifeCycleSample.js
  * - 7.3.1 예제 컴포넌트 생성
  */
 import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null; // ref를 설정할 부분

    constrctor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color != = this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapshot) {
            console.log('업데이트되기 직전 색상: ', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };

        return (
            <div>
                {this.psrops.missing.value}
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;

/**
 * App.js
 * - 7.3.2 App 컴포넌트에서 예제 컴포넌트 사용
 */
import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

// 랜덤 색상을 생성합니다.
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: '#000000'
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;

/**
 * ErrorBoundary.js
 * - 7.3.3 에러 잡아내기
 */
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    };
    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
        console.log({ error, info });
    }
    render() {
        if (this.state.error) return <div>에러가 발생했습니다!</div>
        return this.props.children;
    }
}

export default ErrorBoundary;