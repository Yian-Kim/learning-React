// 13.6 리액트 라우터 부가 기능
// 13.6.1 history

/**
 * HistorySample.js
 */
import React, { Component } from 'react';

class HistorySample extends Component {
    // 뒤로 가기
    handleGoBack = () => {
        this.props.history.goBack();
    };

    // 홈으로 이동
    handleGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount() {
        // 이것을 설정하고 나면 페이지에 변화가 생기려고 할 때마다 정말 나갈 것인지를 질문함
        this.unblock = this.props.history.block('정말 떠나실 건가요?');
    }

    componentWillUnmout() {
        // 컴포넌트가 인마운트되면 질문을 멈춤
        if (this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}

export default HistorySample;

/**
 * WithRouterSample.js
 * - 13.6.2 withRouter
 */
 import React from 'react';
 import { withRouter } from 'react-router-dom';
 const WithRouterSample = ({ location, match, history }) => {
     return (
         <div>
             <h4>location</h4>
             <textarea
                 value={JSON.stringify(location, null, 2)}
                 rows={7}
                 readOnly={true}
             />
             <h4>match</h4>
             <textarea
                 value={JSON.stringify(match, null, 2)}
                 rows={7}
                 readOnly={true}
             />
             <button onClick={() => history.push('/')}>홈으로</button>
         </div>
     );
 };
 
 export default withRouter(WithRouterSample);

 /**
  * App.js
  * - 13.6.3 Switch
  */
  import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;