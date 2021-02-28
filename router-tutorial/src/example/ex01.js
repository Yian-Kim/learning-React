// 13.2 프로젝트 준비 및 기본적인 사용버
// 13.2.1 프로젝트 생성 및 라이브러리 설치
// 13.2.2 프로젝트에 라우터 적용
/**
 * src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// 13.2.3 페이지 만들기
/**
 * Home.js
 */
import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>홈, 그 페이지는 가장 먼저 보여지는 페이지는</p>
        </div>
    );
};

export default Home;

/**
 * About.js
 */
import React from 'react';

const About = () => {
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
        </div>
    );
};

export default About;

/**
 * App.js
 */
import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/About" component={About} />
    </div>
  );
}

export default App;
