// 9장 컴포넌트 스타일링
// 9.1 가장 흔한 방식, 일반 CSS
/**
 * App.js
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

 /**
  * App.css
  * - 9.1.2 CSS Selector
  */
 .App {
    text-align: center;
  }
  
  /* .App 안에 들어 있는 .logo */
  .App .logo {
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
  }
  
  /* .App 안에 들어있는 header
    header 클래스가 아닌 header 태그 자체에
    스타일을 적용하기 때문에 .이 생략되었습니다. */
  .App header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  /* .App 안에 들어 있는 a 태그 */
  .App a {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  