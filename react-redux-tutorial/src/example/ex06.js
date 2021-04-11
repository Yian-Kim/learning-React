// 17.5 컨테이너 컴포넌트 만들기
// 17.5.1 CounterContainer 만들기
/**
 * containers/CounterContainer.js
 */
import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrase } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// const mapStateToProps = state => ({
//     number: state.counter.number,
// });
// const mapDispatchToProps = dispatch => ({
//     // 임시 함수
//     increase: () => {
//         // console.log('increase');
//         dispatch(increase());
//     },
//     decrease: () => {
//         // console.log('decrease');
//         dispatch(decrease());
//     },
// });
export default connect(
    // mapStateToProps,
    // mapDispatchToProps,
    state => ({
        number: state.counter.number,
    }),
    // dispatch => ({
    //     increase: () => dispatch(increase()),
    //     decrease: () => dispatch(decrease()),
    // }),
    // dispatch => 
    //     bindActionCreators(
    {
        increase,
        decrease,
    },
    //     dispatch,
    // ),
)(CounterContainer);

/**
 * App.js
 */
import React from 'react';
import Todos from './components/Todos';
import CounterContainer from './components/CounterContainer';

const App = () => {
return (
    <div>
    <CounterContainer />
    <hr />
    <Todos />
    </div>
);
};

export default App;