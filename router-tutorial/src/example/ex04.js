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