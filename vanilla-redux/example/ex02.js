// 16.2.3 DOM 레퍼런스 만들기
/**
 * index.js
 */
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 1.6.2.4 액션 타입과 액션 생성 함수 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ rtpe: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 16.2.5 초기값 설정
const initialState = {
    toggle: false,
    counter: 0
};

// 16.2.6 리듀서 함수 정의
//state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    // action.type에 따라 다른 작업을 처리함
    switch (action.type) {
        case TOGGLE_SWTICH:
            return {
                ...state, // 불변성 유지를 해 주어야 합니다.
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

// 16.2.7 스토어 만들기
const store = createStore(reducer);

// 16.2.8 render 함수 만들기
const render = () => {
    const state = sotre.getState(); // 현재 상태를 불러옵니다.
    // 토클 처리
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerText = state.counter;
}


render();
store.subscribe(render); // 16.2.9 구독하기

// 16.2.10 액션 발생시키기
divToggle.onclick = () => {
    store.dispatch(toggleSwtich());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
};